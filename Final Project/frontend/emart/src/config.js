console.log(process.env);

const config = {
  apiUrl: process.env.REACT_APP_API_URL,

  endpoints: {
    products: "products",
    product: "products/:id",
    customers:"customers",
    customer:"customers/:id",
    orders:"orders",
    order:"orders/:id",
    users:"users",
    login:"login",
    customerlogin:"customerlogin"
  },
};

export default config;
