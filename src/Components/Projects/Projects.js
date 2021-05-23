import React from "react";
import "./Projects.css";

import im1 from "../../Images/p01/p01 p01.jpg";
import im2 from "../../Images/p01/p01 p02.jpg";
import im3 from "../../Images/p01/p01 p03.jpg";
import im4 from "../../Images/p01/p01 p04.jpg";
import img1 from "../../Images/p02/p02 p01.jpg";
import img2 from "../../Images/p02/p02 p02.jpg";
import img3 from "../../Images/p02/p02 p03.jpg";
import img4 from "../../Images/p02/p02 p04.jpg";
import img01 from "../../Images/p03/p03 p01.jpg";
import img02 from "../../Images/p03/p03 p02.jpg";
import img03 from "../../Images/p03/p03 p03.jpg";
import img04 from "../../Images/p03/p03 p04.jpg";
import img05 from "../../Images/p04/p04 p01.jpg";
import img06 from "../../Images/p04/p04 p02.jpg";
import img07 from "../../Images/p04/p04 p03.jpg";
import img08 from "../../Images/p04/p04 p04.jpg";
import img09 from "../../Images/p05/p05 p01.jpg";
import img10 from "../../Images/p05/p05 p02.jpg";
import img11 from "../../Images/p05/p05 p03.jpg";
import img12 from "../../Images/p05/p05 p04.jpg";
import img13 from "../../Images/p06/p06 p01.jpg";
import img14 from "../../Images/p06/p06 p02.jpg";
import img15 from "../../Images/p06/p06 p03.jpg";
import img16 from "../../Images/p06/p06 p04.jpg";

import Navbar from "../Navbar/Navbar";

const Projects = () => {

  return (
    <div>
      <Navbar />
      <div className="project-page">
        <div className="project-body shadow" data-aos="fade-down">
          <div className="project-info">
            {/* //project information */}
            <div>
              {/* //header */}
              <h1>Cool Repair</h1>
              <a
                className="me-2"
                target="_blank"
                rel="noreferrer"
                href="https://cool-repair.web.app/"
              >
                Preview
              </a>
              <a
                className="me-2"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Akash044/Cool-Repair-Client"
              >
                client code
              </a>
              <a
                style={{ display: "inline" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Akash044/Cool-Repair-Server"
              >
                server code
              </a>
              <h5>
                A full stack project of electrical appliances repair and
                installation services.
              </h5>
            </div>

            <div>
              {/* //description */}
              <ul style={{ fontSize: "17px" }}>
                <li>
                  Responsive and dynamically handles clients and admin dashboard
                  by firebase authentication system.
                </li>
                <li>
                  After login, the client can see the dashboard which has
                  current booking, booking list and write review section.
                </li>
                <li>
                  There has an admin dashboard. Admin would modify client
                  booking status, add new services, delete services.
                </li>
              </ul>
            </div>

            <div className="tech-sec text-center fw-bold">
              {/* <h5>Technologies that are used</h5> */}
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                React
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#4289ff,#07f8c3)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Node
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff9c35,#ffd019)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                React-Router
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Express.js
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#4289ff,#07f8c3)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Firebase
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                HTML
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#5a00dd,#684efb)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                CSS
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#2eb1ea,#2eb1ea)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Bootstrap
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#4f59ff,#15dbff)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Heroku
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#4f59ff,#15dbff)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Stripe pay
              </div>
            </div>

            <div></div>
          </div>

          <div className="screenshot-portion">
            {/* screenshot portion */}
            <div>
              <img
                // onMouseOver = {handleMouseOver}
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={im3}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={im4}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={im1}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={im2}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* 2nd project */}
        <div className="project-body shadow" data-aos="fade-left">
          <div className="project-info">
            {/* //project information */}
            <div>
              {/* //header */}
              <h1>Prime Books</h1>{" "}
              <a
                className="me-2"
                target="_blank"
                rel="noreferrer"
                href="https://prime-books-auth.web.app/"
              >
                Preview
              </a>
              <a
                className="me-2"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Akash044/Prime-Books-Client"
              >
                client code
              </a>
              <a
                style={{ display: "inline" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Akash044/Prime-Books-Server"
              >
                server code
              </a>
              <h5>A full stack project of online book store.</h5>
            </div>

            <div>
              {/* //description */}
              <ul style={{ fontSize: "17px" }}>
                <li>
                  Responsive and used firebase authentication system to
                  authenticate users.
                </li>
                <li>
                  Here the client can see books of various type, buy them and
                  see orders list.
                </li>
                <li>
                  Admin will able to add new books and delete existing books
                  item.
                </li>
              </ul>
            </div>

            <div className="tech-sec text-center fw-bold">
              {/* <h5>Technologies that are used</h5> */}
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                React
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#4289ff,#07f8c3)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Node
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff9c35,#ffd019)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                React-Router
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Express.js
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#4289ff,#07f8c3)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Firebase
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                HTML
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#5a00dd,#684efb)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                CSS
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#2eb1ea,#2eb1ea)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Bootstrap
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#4f59ff,#15dbff)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Heroku
              </div>
            </div>

            <div></div>
          </div>

          <div className="screenshot-portion" data-aos="fade-down-left">
            {/* screenshot portion */}

            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img1}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img2}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img3}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img4}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 2nd project end here */}

        {/* 3rd project start here */}
        <div
          className="project-body shadow"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="project-info">
            {/* //project information */}
            <div>
              {/* //header */}
              <h1>Dhaka Metro</h1>{" "}
              <a
                className="me-2"
                target="_blank"
                rel="noreferrer"
                href="https://dhaka-metro-7f59d.web.app/"
              >
                Preview
              </a>
              <a
                className="me-2"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Akash044/Dhaka-Metro"
              >
                client code
              </a>
              <h5>A platform of buying metro rail ticket.</h5>
            </div>

            <div>
              {/* //description */}
              <ul>
                <li>
                  Device friendly and used both email/password and Google
                  sign-in method to authenticate users.
                </li>
                <li>
                  Here the client can see the different category of the ticket
                  and buy them.
                </li>
                <li>
                  The client also choose the route and used Google map as
                  developer mode.
                </li>
              </ul>
            </div>

            <div className="tech-sec text-center fw-bold">
              {/* <h5>Technologies that are used</h5> */}
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                React
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff9c35,#ffd019)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                React-Router
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#4289ff,#07f8c3)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Firebase
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                HTML
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#5a00dd,#684efb)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                CSS
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#2eb1ea,#2eb1ea)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Bootstrap
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#2eb1ea,#2eb1ea)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Google Map
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#4289ff,#07f8c3)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Netlify
              </div>
            </div>

            <div></div>
          </div>

          <div className="screenshot-portion">
            {/* screenshot portion */}

            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img01}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img02}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img03}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img04}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 3rd project end here */}

        {/* 4th project start here */}
        <div
          className="project-body shadow"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="project-info">
            {/* //project information */}
            <div>
              {/* //header */}
              <h1>League Tracker</h1>{" "}
              <a
                className="me-2"
                target="_blank"
                rel="noreferrer"
                href="https://suspicious-allen-ccd7c2.netlify.app/"
              >
                Preview
              </a>
              <a
                className="me-2"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Akash044/Dhaka-Metro"
              >
                client code
              </a>
              <h5>A platform of knowing details of renowned leagues</h5>
            </div>

            <div>
              {/* //description */}
              <ul>
                <li>
                  Adjustable to every device and at landing page by default
                  users can see some leagues.
                </li>
                <li>
                  The users can click any league to know about that league.
                </li>
                <li>
                  After clicking the details button users are able to see the
                  details.
                </li>
              </ul>
            </div>

            <div className="tech-sec text-center fw-bold">
              {/* <h5>Technologies that are used</h5> */}
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                React
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff9c35,#ffd019)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                React-Router
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                HTML
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#5a00dd,#684efb)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                CSS
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#2eb1ea,#2eb1ea)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Bootstrap
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#4289ff,#07f8c3)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Netlify
              </div>
            </div>

            <div></div>
          </div>

          <div className="screenshot-portion">
            {/* screenshot portion */}

            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img13}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img14}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img15}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img16}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 4th project end here */}

        {/* 5th project start here */}
        <div className="project-body shadow" data-aos="slide-up">
          <div className="project-info">
            {/* //project information */}
            <div>
              {/* //header */}
              <h1>Hungry Monster</h1>{" "}
              <a
                className="me-2"
                target="_blank"
                rel="noreferrer"
                href="https://akash044.github.io/Hungry-monstar/"
              >
                Preview
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Akash044/Hungry-monstar"
              >
                client code
              </a>
              <h5>Search and know the food details</h5>
            </div>

            <div>
              {/* //description */}
              <ul>
                <li>Device friendly and user can search any type of foods.</li>
                <li>Search results are displayed.</li>
                <li>
                  The client can select any food item and will be able to see
                  the details ingredients.
                </li>
              </ul>
            </div>

            <div className="tech-sec text-center fw-bold">
              {/* <h5>Technologies that are used</h5> */}
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                React
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff9c35,#ffd019)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                React-Router
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                HTML
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#5a00dd,#684efb)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                CSS
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#2eb1ea,#2eb1ea)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Bootstrap
              </div>
            </div>

            <div></div>
          </div>

          <div className="screenshot-portion">
            {/* screenshot portion */}

            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img05}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img06}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img07}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "18rem" }}
                className="shadow rounded p-2 m-1"
                src={img08}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 5th project end here */}

        {/* 6th project start here */}
        <div
          className="project-body shadow"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="project-info">
            {/* //project information */}
            <div>
              {/* //header */}
              <h1>Flight Booking</h1>{" "}
              <a
                className="me-2"
                target="_blank"
                rel="noreferrer"
                href="https://akash044.github.io/flight-booking/"
              >
                Preview
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Akash044/flight-booking"
              >
                client code
              </a>
              <h5>Flight ticket buying dashboard</h5>
            </div>

            <div>
              {/* //description */}
              <ul>
                <li>
                  The clients can buy flight tickets simply entering basic
                  information.
                </li>
                <li>
                  The clients have to choose the route as well as their flight
                  time and can book returning flight if they want.
                </li>
                <li>
                  There have two types of ticket first class and economy class
                  with different price point. The clients can easily specify how
                  many tickets they actually want to buy by selecting plus and
                  minus button.
                </li>
                <li>
                  After pressing book now button, the clients are able to see a
                  pop up window for confirming their bookings.
                </li>
              </ul>
            </div>

            <div className="tech-sec text-center fw-bold">
              {/* <h5>Technologies that are used</h5> */}
              <div
                style={{
                  background: "linear-gradient(45deg,#ff193f,#ff35b4)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                HTML
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#5a00dd,#684efb)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                CSS
              </div>
              <div
                style={{
                  background: "linear-gradient(45deg,#2eb1ea,#2eb1ea)",
                  padding: "3px",
                  borderRadius: "20px",
                }}
              >
                Bootstrap
              </div>
            </div>

            <div></div>
          </div>

          <div className="screenshot-portion">
            {/* screenshot portion */}

            <div>
              <img
                style={{ width: "15rem" }}
                className="shadow rounded p-2 m-1"
                src={img09}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "15rem" }}
                className="shadow rounded p-2 m-1"
                src={img10}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "15rem" }}
                className="shadow rounded p-2 m-1"
                src={img11}
                alt=""
              />
            </div>
            <div>
              <img
                style={{ width: "15rem" }}
                className="shadow rounded p-2 m-1"
                src={img12}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 6th project end here */}
      </div>
    </div>
  );
};

export default Projects;
