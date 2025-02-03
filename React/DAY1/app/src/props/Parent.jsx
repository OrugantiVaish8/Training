// import React from 'react'
// import Child from './Child'
// class Parent extends React.Component{
//     state={
//         username:"vaish"
//     }
//     render()
//     {
//         return(
//             <Child  name={this.state.username}/>
//         )
//     }
// }
// export default Parent;
import React from 'react'
import Child from './Child'

const Parent = () => {
    
    let fun = () => {
        window.alert("i am a function")
      }
  return (
    <div>
      {/* <Child name="vaish"/> */}
      {/* <Child age={20}/> */}
      {/* <Child arr={[10,20,30]}/> */}
      {/* <Child obj={obj1}/> */}
      <Child fun1={fun}/>
    </div>
  )
}
 
export default Parent
