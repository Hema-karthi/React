import React from "react";

const Student = ({ id, children }) => {
  return (
    <div>
      {children} {/* Children used here */}

      <h2>Student Component</h2>
      <p><strong>Student ID:</strong> {id}</p>
    </div>
  );
};

export default Student;