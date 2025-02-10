import React from 'react'
import { user ,id} from './CompA'

const CompC = () => {
  return (
    <div>
      {
        <user.Consumer>
            {
                (name)=>{
                    return(
                        <>
                            <id.Consumer>
                               {
                                (number)=>{
                                    return(
                                        <>
                                        <h1>MY NAME IS: {name}</h1>
                                        <h1>MY ROLL NUMBER IS: {number}</h1>
                                        </>
                                    )
                                }
                               }
                            </id.Consumer>
                        </>
                    )
                }
            }
        </user.Consumer>
      }
    </div>
  )
}

export default CompC
