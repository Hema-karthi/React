import React from "react";
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Student from "./component/Student";
import Trainer from "./component/Trainer";
import Home from "./views/Home";
import About from "./views/About";
import UserProfile from "./views/UserProfile";
import "./assets/CSS/NavCss.css";


const App = () => {
   return(
    <>
    <header>Header Component</header>
    <Router>
        <div className="navbarCls">
            <div>My React App</div>
            <nav>
                <ul style={{display: "flex",gap:"2rem"}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/userprofile">UserProfile</Link></li>

                </ul>
            </nav>
        </div>
        <br />
        <br />
       <nav>
        <ul>
        <li><Link to="/student">Student</Link> |{" "}</li>
        <li><Link to="/trainer">Trainer</Link></li>
        </ul>
      </nav>
      <br /> <br />


        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/userprofile" element={<UserProfile/>}/>

            <Route path="/student"  element={<Student id="S101">
                        <h3>This is Student Section </h3>
                         </Student>
                         }/>
            <Route path="/trainer" element={<Trainer id="T201">
                        <h3>This is Trainer Section </h3>
                        </Trainer>} />        
            </Routes>

           </Router> <br /> <br />

<main>Main Component</main>
<br />
<br />
<footer>Footer Component</footer>
    
</>
);
};
export default App;