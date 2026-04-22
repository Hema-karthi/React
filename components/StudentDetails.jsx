import React from "react";
import API_Call from "./API_Call";

const StudentDetails = ({ id }) => {
  const students = API_Call(id);

  return (
    <div>
      <h2>Student Details</h2>

      {students.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <p><strong>ID:</strong> {student.id}</p>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>City:</strong> {student.address.city}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentDetails;