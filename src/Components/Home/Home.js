import React from "react";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import "./Home.css";
import propic from "../../Images/mypic2.png"

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-page-header">
        <div className="left-portion" data-aos="fade-up">
          <div>
            <h1 style={{ fontSize:"70px"}}>
              Hey, I'm a Junior{" "}
              <span style={{ color: "#34a1cd" }}>Front-End</span> Web Developer
            </h1>
          </div>
          <div data-aos="fade-down-left">
            <p style={{ color: "gray", fontSize:"19px" }}>Hi, I'm Akash a full stack web developer. I help brands turn their ideas into high quality products.</p>
          </div>
          <div>
            <a href="https://drive.google.com/uc?export=download&id=1PZeXz4t0pWDS-rgJssCvQJeBCNbDv_GM"><button className="btn fw-bold" style={{ background:"tomato"}}>Download resume</button></a>
            
          </div>
          <div></div>
        </div>
        <div data-aos="fade-down-left">
          <img src={propic} style={{ width:"35rem",paddingTop:"40px"}}alt=""/>
        </div>
      </div>
    </div>
  
  );
};

export default Home;
