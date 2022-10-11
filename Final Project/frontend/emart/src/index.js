import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from "redux-thunk";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import reducers from "./redux/reducer";
import { createStore, applyMiddleware } from "redux";
import reportWebVitals from "./reportWebVitals";

const store = createStore(
  reducers,
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  //   // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  // })
  (applyMiddleware(thunk))
);

const root = createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

