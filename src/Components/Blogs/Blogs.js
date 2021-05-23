import React from "react";
import DiagonalShape from "../DiagonalShape/DiagonalShape";
import Navbar from "../Navbar/Navbar";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <DiagonalShape />
      <div className="blogs-page text-white">

        <div className="card" style={{width: "18rem"}}>
          <img src="https://miro.medium.com/max/750/1*1WU4GysLtqGaClWNI9urIA.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-dark">Some basic concept of JavaScript</h5>
            <p className="card-text text-dark">
            The term Truthy and Falsy value are broadly used in condition checking statements. If the value of something has ...
            </p>
            <a href="https://ruetakash.medium.com/some-basic-concept-of-javascript-35c1ffee682a" rel="noreferrer" className="btn btn-primary">
              Read Full
            </a>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9w35oo8Yvrbz3YJIrWoDJg52LPe52RIZmZQ&usqp=CAU" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-dark">A short review of some JavaScript Math and Array methods</h5>
            <p className="card-text text-dark">
            In our daily life, we have to perform many operations in our calculations. Some of them are done ...
            </p>
            <a href="https://ruetakash.medium.com/a-short-review-of-some-javascript-math-and-array-methods-c0c32eb9e239" target="_blank" rel="noreferrer" className="btn btn-primary">
              Read Full
            </a>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img src="https://frontendjournal.com/wp-content/uploads/2020/09/Javascript-ES6.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-dark">ES6 short overview: Block Bindings and Functions</h5>
            <p className="card-text text-dark">
            All the things are changeable for many causes. The causes are may be difficult to use the earlier version, errors occur easily, and ...
            </p>
            <a href="https://ruetakash.medium.com/es6-short-overview-block-bindings-and-functions-ab785e396bc2" target="_blank" rel="noreferrer" className="btn btn-primary">
              Read Full
            </a>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <img src="https://miro.medium.com/max/650/1*rJB4Tcz_ZZnliNxYmdfGqw.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-dark">JavaScript JSX, Element, Component, Virtual DOM</h5>
            <p className="card-text text-dark">
            JSX provides a facility that helps us to write JavaScript elements in a markup style. And babel turns it into...
            </p>
            <a href="https://ruetakash.medium.com/javascript-jsx-element-component-virtual-dom-5877a0628a90" rel="noreferrer" className="btn btn-primary">
              Read Full
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Blogs;
