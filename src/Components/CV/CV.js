import React from "react";
import Navbar from "../Navbar/Navbar";
import "./CV.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode,faReact,faJsSquare, faBootstrap, faHtml5, faCss3, faPython} from '@fortawesome/free-brands-svg-icons';
import router from '../../Images/skills icon/router.png'
import redux from '../../Images/skills icon/redux.jpg'
import mongodb from '../../Images/skills icon/mongodb.png'
import firebase from '../../Images/skills icon/firebase.png'
import RN from '../../Images/skills icon/react-native.png'
import mySql from '../../Images/skills icon/mysql.png'

const CV = () => {
  return (
    <div>
        <Navbar />
      <div className="cv-page" >
        
        <div className="text-center skills-header"> 
          <h1>Skills</h1>
          <p>I have broad range of applicable skills that enable me to be a valuable member of your team.These include specific technical skills i have developed along with strong soft skills developed over the course of my career.</p>
        </div>
        <div className="shadow skill-section w-75" data-aos="slide-up">
          <div style={{textAlign:"center",}}>
              <h2>Technical</h2>
              <p>I have become confident using the following technologies</p>
          </div>
          <div className="skill-ex-info text-center">

            <div><FontAwesomeIcon icon={faJsSquare} size="2x" /> <br/> Javascript</div>
            <div><FontAwesomeIcon icon={faReact} size="2x" /> <br/> React</div>
            <div><FontAwesomeIcon icon={faNode} size="2x" /> <br/>Node</div>
            <div><FontAwesomeIcon icon={faHtml5} size="2x" /> <br/>HTML5</div>
            <div><FontAwesomeIcon icon={faCss3} size="2x" /> <br/>CSS3</div>
            <div><FontAwesomeIcon icon={faBootstrap} size="2x" /> <br/> Bootstrap</div>
            <div> 
              <img src={router} style={{ width:"2.5rem"}} alt=""/> <br/>
              React-Router</div>
            <div>
            <img src={mongodb} style={{ width:"2.5rem"}} alt=""/> <br/>
              MongoDB</div>

              <div>
            <img src={firebase} style={{ width:"2.5rem"}} alt=""/> <br/>
              Firebase</div>

          </div>
          
          <div className=" text-center pt-3">
            <div>
            <h3>Familiar with these technologies</h3>
            <p></p>
            </div>

            <div className="skills-fam-info text-center">

            <div>
            <img src={redux} style={{ width:"2.5rem"}} alt=""/> <br/>
              Redux</div>
              <div>
            <img src={RN} style={{ width:"2.5rem"}} alt=""/> <br/>
              React-Native</div>
              <div>
            <img src={mySql} style={{ width:"2.5rem"}} alt=""/> <br/>
              MySQL</div>
              <div>
              <FontAwesomeIcon icon={faPython} size="2x" /> <br/>
              Python</div>
            </div>
          </div>
        </div>
        <div className="edu-section text-center mt-5 shadow w-75 bg-white p-5">
         <u><h3>Education</h3></u> 
          <h6>B.Sc. in Computer Science and Engineering(CSE)</h6>

          <h5>Rajshahi University of Engineering & Technology(RUET)</h5>
          <h5>Rajshahi-6204,Bnagladesh</h5>
        </div>
      </div>
    </div>
  );
};

export default CV;
