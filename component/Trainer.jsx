import React from "react";

const Trainer = ({ id, children }) => {
  return (
    <div>
      {children} {/* Children used here */}

      <h2>Trainer Component</h2>
      <p><strong>Trainer ID:</strong> {id}</p>
    </div>
  );
};

export default Trainer;