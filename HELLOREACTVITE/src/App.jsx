// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// src/App.jsx
import "./App.css";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import settingsLines from "./assets/menu-top-xs.png";
import toolLogo from "./assets/toolimg.png";
import componentsLaptop from "./assets/laptopimg.png";
import singleWayImac from "./assets/imacimg.png";
import jsxLaptop from "./assets/lastimg.png";

function App() {
  return (
    <div className="App">
      
      <div className="hello">
      

      <header>
      <nav className="containternav">
        <img src={ironhackLogo} alt="logo" />
        <img src={settingsLines} alt="menu" />
      </nav>
      <div className="container">
        <h1 className="text-white ">Say hello to ReactJS</h1>
        <p className="text-white ">
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </p>

        <button type="button" className="btn btn-light">Awesome!</button>
        </div>
        </header>
      </div>

      <footer>
      <div className="container text-center">
      <div className="row">
      
      <div >
      <div className="col">
        <img src={toolLogo} alt="tool"  /> 
        <div>Declarative</div>
        <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="col">
        <img src={componentsLaptop} alt="components" />
        <div>Components</div>
        <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="col">
        <img src={singleWayImac} alt="laptop" />
        <div>Single Way</div>
        <p>A set of immutable values are passed to the components</p>
        </div>

        <div className="col">
        <img src={jsxLaptop} alt="laptopbrowser" />
        <div>JSX</div>
        <p>Statically-tiped, designed to run on modern browsers</p>
        </div>
      </div>
      </div>
      </div>
      </footer>
    </div>
  );
}

export default App;
