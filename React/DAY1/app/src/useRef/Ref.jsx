// import React, { useRef } from 'react'

// const Ref = () => {
//     let demo=useRef()
//     console.log(demo);
//     console.log(demo.current);
//     demo.current.style.backgroundColor='pink'
//   return (
//     <div>
//       <h1 ref={demo}>VAISHNAVI</h1>
//       <h2></h2>
//       <button></button>
//     </div>
//   )
// }

// export default Ref

// import React, { useRef } from 'react'

// const Ref = () => {
//     let demo1=useRef()
//     console.log(demo1);
//     let eventHander=()=>{
//         demo1.current.style.backgroundColor="pink"
//     }
//   return (
//     <div>
//       <h1 ref={demo1}>VAISHNAVI</h1>
//       <button onClick={eventHander}>CLICK</button>
//     </div>
//   )
// }

// export default Ref

import React, { useRef } from 'react'

const Ref = () => {
    let name=useRef('')
    let password=useRef('')

    let demo=(e)=>{
        e.preventDefault()
        console.log({name:name.current.target.value});
        console.log({password:password.current.target.value});
    }
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" ref={name} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" ref={password} />
        <br />
        <button onClick={demo}>submit</button>
      </form>
    </div>
  )
}

export default Ref
