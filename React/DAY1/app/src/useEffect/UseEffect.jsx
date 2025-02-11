
// //no dependency
// import React, { useEffect ,useState} from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(()=>state+1)
//         },2000)
//     })
//   return (
//     <div>
//       <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect



//empty dependency
// import React, { useEffect ,useState} from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(()=>state+1)
//         },2000)
//     },[])
//   return (
//     <div>
//       <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect

//dependency with value
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    let [state,setState]=useState(0)
    let [incr,setIncr]=useState(0)
useEffect(()=>{
    setIncr(()=>state*2)
},[state])
  return (
    <div>{state}
    <br />
    <button onClick={()=>setState((e)=>e+1)}>*</button>
    <br />
    {incr}
    </div>
  )
}

export default UseEffect