import React from 'react'
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";

import About from "./view/About";
import Home from "./view/Home";
import UserProfile from "./view/UserProfile";
import "./assets/CSS/style.css"

const App = () =>{
  return(
    <>
    <header style= {{ textAlign:"left"}}>Header component </header>
    <Router>
      <div class= "navStyle">
      <div>My React App</div>
      <nav>
        <ul style ={{display:"flex", gap:"1rem" }}>
          <li>
            <Link to="/">ABOUT </Link>
          </li>
          <li>
            <Link to ="/Home">Home</Link>
          </li>
          <li>
            <Link to ="/UserProfile">UserProfile </Link>
          </li>

        </ul>
      </nav>

      </div>
    
       <Routes>
        <Route path ="/" element={<About/>} />
        <Route path ="/Home" element={<Home/>}/>
        <Route path ="/UserProfile" element={<UserProfile/>}/>
       </Routes> 
       <br />
       <br />
       <main style= {{ textAlign:"left"}}>Main Component </main>
       <br />
       <br />
       <footer style= {{ textAlign:"left"}}>
        Footer component
       </footer>

    </Router>
    </>
  );
};
export default App;