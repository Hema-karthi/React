import React, { useRef } from "react";``

const Feedback = ({setFeedbackId,children}) => {

  const userRef = useRef();
  const passRef = useRef();
  const displayRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
     let getDiv = `Username: ${userRef.current.value} \n Password: ${passRef.current.value}`;
     displayRef.current.innerText = getDiv;
     setFeedbackId(displayRef)
  };

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      {children}
      <input type="text" ref={userRef} placeholder="Username" />
      <br></br>
      <input type="password" ref={passRef} placeholder="Password" />
        <br></br>
      <button type="submit">Login</button>
    </form>
    </div>

    <br></br>

    <div ref={displayRef}></div>
    </>
  );
}

export default Feedback;

