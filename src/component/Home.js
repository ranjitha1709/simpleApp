// Home.js
import React from "react";
import "./Home.css"
import Sidebar from './Sidebar'
import UserProfile from "./UserProfile";
import Graph from "./Graph";
import Gauge from "./Guage";
function Home() {
  return (
     <div className="container">
          <Sidebar />
          <div  className="content">
            <UserProfile />
           <Graph />
              <Gauge style={{    "width": "24%"}} />
              </div>
        </div>
  );
}

export default Home;
