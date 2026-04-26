
import React, { useState } from "react";

const UserRegistration = () => {

  // Single state object for all fields
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", user);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
        />
        <br /><br />

        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        /> Female
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <h3>Preview:</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
};

export default UserRegistration;