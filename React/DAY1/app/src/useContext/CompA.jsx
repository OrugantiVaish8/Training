import React from 'react'
import CompB from './CompB.JSX'

export let user=React.createContext()
export let id=React.createContext()

const CompA = () => {
  return (
    <div>
      <user.Provider value={"VAISH"}>
            <id.Provider value={675}>
            <CompB/>
            </id.Provider>
      </user.Provider>
    </div>
  )
}

export default CompA
