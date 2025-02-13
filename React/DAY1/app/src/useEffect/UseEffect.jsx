
// // //no dependency
// // import React, { useEffect ,useState} from 'react'

// // const UseEffect = () => {
// //     let [state,setState]=useState(0)
// //     useEffect(()=>{
// //         setTimeout(()=>{
// //             setState(()=>state+1)
// //         },2000)
// //     })
// //   return (
// //     <div>
// //       <h1>{state}</h1>
// //     </div>
// //   )
// // }

// // export default UseEffect



// //empty dependency
// // import React, { useEffect ,useState} from 'react'

// // const UseEffect = () => {
// //     let [state,setState]=useState(0)
// //     useEffect(()=>{
// //         setTimeout(()=>{
// //             setState(()=>state+1)
// //         },2000)
// //     },[])
// //   return (
// //     <div>
// //       <h1>{state}</h1>
// //     </div>
// //   )
// // }

// // export default UseEffect

// //dependency with value
// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     let [incr,setIncr]=useState(0)
// useEffect(()=>{
//     setIncr(()=>state*2)
// },[state])
//   return (
//     <div>{state}
//     <br />
//     <button onClick={()=>setState((e)=>e+1)}>*</button>
//     <br />
//     {incr}
//     </div>
//   )
// }

// export default UseEffect

//fetch api using useEffect use
import React, { useEffect, useState } from "react";
import "./UseEffect.css"; // Import CSS file

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="container">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={user.picture.thumbnail} alt="User" />
              </td>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.location.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;



