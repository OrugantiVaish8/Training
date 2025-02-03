import React from "react";

const UserDetailsFunctional = ({ name, age, email }) => {
  return (
    <div>
      <h2>User Details (Functional Component)</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserDetailsFunctional;