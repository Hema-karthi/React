import React, { useState } from "react";
import {useNavigate} from "react-router-dom";



const Courses = () => {
  const [course, setCourse] = useState("");  

       /* MULTIPLE COMPONENTS IN A PAGE */
      const JavaCourse = () => {
        return <h3>Java Course: OOP, Spring Boot</h3>;
      }

      const ReactCourse = () => {
        return <h3>React Course: Hooks, Routing</h3>;
      }

      const DotNetCourse = () => {
        return <h3>.NET Course: C#, ASP.NET</h3>;
      }

  return (
    <>
    <div className="outerCls">
                      
       <h1>Courses Offered</h1>   
         <h2>Select a Course</h2>

      <ul style={{ listStyle: "circle", lineHeight : 2 }}>
        <li onClick={() => setCourse("java")}>Java</li>
        <li onClick={() => setCourse("react")}>React</li>
        <li onClick={() => setCourse("dotnet")}>.NET</li>
      </ul>

      <div style={{ marginTop: "20px", backgroundColor:"yellowgreen" }}>
        {/* && Conditional Rendering */}
        {course === "java" && <JavaCourse />}
        {course === "react" && <ReactCourse />}
        {course === "dotnet" && <DotNetCourse />}
      </div>
     </div>

</>
    )
}
export default Courses;


