// import React from 'react';

// const Navbar = () => {
//     return(
//         <div>

//         </div>
//     );
// }
// export default Navbar;

import Nav from './Nav.js';
import GetProducts from './GetProducts.js'
import React from 'react';

const Dashboard = () => {
    return (<>
    {/* <Nav/> */}
  <div className="dashboard-container container clearfix">
    <div className="side-bar left">
    <ul className=" small-content">
  <li className="side-bar-item"> <a href="/dashboard">Products </a></li>
  <li className="side-bar-item">Customers</li>
  <li className="side-bar-item">Orders</li>
  <li className="side-bar-item">Admin</li>
</ul>
    </div>
    <div className="dashboard-content left">
    <GetProducts/>
    </div>
  </div>
  </>
    );
}

export default Dashboard;