import React from 'react'
import List from './List'

const Comp3 = () => {
    let demo=[{
        name:"vaish",
        id:1
    },
    {
        name:"vais",
        id:2
    },
    {
        name:"vai",
        id:3
    },
    ]
  return (
    <div>
      <List main={demo}/>
    </div>
  )
}

export default Comp3
