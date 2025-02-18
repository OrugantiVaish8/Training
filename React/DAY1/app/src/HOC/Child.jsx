import React from 'react'
import Hoc from './Hoc'

const child = ({arr1}) => {
  return (
    <div>
        <table border="2px solid">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Roll</th>
                </tr>
            </thead>
            <tbody>
                {
                    arr1.map((x) => {
                        return(
                            <tr>
                                <td>{x.name}</td>
                                <td>{x.id}</td>
                                <td>{x.role}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Hoc(child)