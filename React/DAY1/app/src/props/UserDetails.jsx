import React from "react";

const UserDetails = (props) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default UserDetails;