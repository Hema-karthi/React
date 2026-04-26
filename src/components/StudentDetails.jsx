import React from "react";

const StudentDetails = ({ student }) => {
  return (
    <div>
      <h2>Student Details</h2>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
    </div>
  );
};

export default StudentDetails;