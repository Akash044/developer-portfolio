import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import DiagonalShape from "../DiagonalShape/DiagonalShape";
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <DiagonalShape />
      <div className="home-page-header">
        <div className="left-portion" data-aos="fade-up">
          <div className="left-text-small">
            <p style={{ fontSize: "30px", fontWeight: "bold",color:"white" }}>
            Hey, I'm a Junior{" "} <br/>
              <ReactTypingEffect
              typingDelay = "500"
              text={["Front-End Web", "M.E.R.N. Stack","Full Stack Web"]}
              /> <br/>
               Developer
            </p>
          </div>
          <div className="left-text-big pt-4">
            <p style={{ fontSize: "60px", fontWeight: "bold", color:"white" }}>
              Hey, I'm a Junior{" "} <br/>
              <ReactTypingEffect
              typingDelay = "500"
             text={["Front-End Web", "M.E.R.N. Stack","Full Stack Web"]}
              /> <br/>
               Developer
            </p>
           
          </div>

          <div  data-aos="fade-down-left">
            <p className="big-below-txt" style={{ color: "white", fontSize: "19px" }}>
              Hi, I'm Akash a full stack web developer. I help brands turn their
              ideas into high quality products.
            </p>
          </div>
          <div className="pb-2">
            <a
              href="https://github.com/Akash044"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              <FontAwesomeIcon className="bg-white" icon={faGithubSquare} size="2x" color="black" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/akash002/"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              <FontAwesomeIcon className="bg-white" icon={faLinkedin} size="2x" color="#0a66c2" />{" "}
            </a>
            <a
              href="https://www.facebook.com/akash.hossain.5895/"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              <FontAwesomeIcon
              className="bg-white "
                icon={faFacebookSquare}
                size="2x"
                color="#385898"
              />{" "}
            </a>
          </div>
          <div>
            <a href="https://drive.google.com/uc?export=download&id=1PZeXz4t0pWDS-rgJssCvQJeBCNbDv_GM">
              <button className="btn fw-bold" style={{ background: "tomato" }}>
                Download resume
              </button>
            </a>
          </div>
        </div>
        <div className="right-side" data-aos="fade-down-left">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_rycdh53q.json"
            className="lottie-img"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          {/* <img src={propic} style={{ width:"35rem",paddingTop:"40px"}}alt=""/> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
