import React from 'react'
import Child from './Child'
class Parent extends React.Component{
    state={
        username:"vaish"
    }
    render()
    {
        return(
            <Child  name={this.state.username}/>
        )
    }
}
export default Parent;