
import React , {useState} from 'react'
const State = () => {
    let [state, setState] = useState("batch-5")
    console.log(state);
    console.log(setState);
    
    let demo=() =>{
        setState("batch-6")
    }  
return (
    <div>
      <h1>{state}</h1>
      <button onClick={demo}>click</button>
    </div>
  )
}

export default State
