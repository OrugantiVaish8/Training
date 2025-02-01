import React from 'react'
class Child extends React.Component{
    render()
    {
        return(
            <>
            <h1>ny name is {this.props.name}</h1>
            </>
        )
    }
}
export default Child;