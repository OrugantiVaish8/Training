import React, { Component } from "react";

class UserDetailsClass extends Component {
  render() {
    // Destructure props to get user details
    const { name, age, email } = this.props;
    return (
      <div>
        <h2>User Details (Class Component)</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
}

export default UserDetailsClass;