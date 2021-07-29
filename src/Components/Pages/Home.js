import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Footer from "../Layout/Footer";
import AllPosts from "../Layout/AllPost";

function Home() {
  return (
    <div>
      <AllPosts />
      {/* <ul>
        
        <li>
          <Link to="/slider">Slider</Link>
        </li>
        <li>
          <Link to="/flex">Flex Example</Link>
        </li>
        <li>
          <Link to="/use-effects">UseEffect Example</Link>
        </li>
       
      </ul> */}
    </div>
  );
}

export default Home;
