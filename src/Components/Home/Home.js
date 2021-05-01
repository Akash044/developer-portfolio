import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-page-header">
        <div className="left-portion">
          <div>
            <h1 style={{ fontSize:"70px"}}>
              Hey, I'm Junior{" "}
              <span style={{ color: "#34a1cd" }}>Front-End</span> Web Developer
            </h1>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
