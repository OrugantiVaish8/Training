import React, { Fragment } from 'react'

const List = (props) => {
   console.log(props.main);
   
   return (
     <Fragment>
        <ol>
        {
            props.main.map((x, index) => {
                return (
                    <li key={x.id || index}>{x.name}</li> // Ensuring unique key
                ) 
            })
        }
        </ol>
     </Fragment>
   )
}

export default List;
