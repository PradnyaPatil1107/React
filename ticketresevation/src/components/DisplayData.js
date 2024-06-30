import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayData() {
    const resevationlst=useSelector(state=>state.resevationList)
    const concellationlst=useSelector(state=>state.cancellationList)
    const totalamt=useSelector(state=>state.amt)
  return (
    <div>
        <h1>Resevation List</h1>
        <table border='2'>
            <thead>
                <tr>
                    <th>Id </th>
                    <th>Name</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {resevationlst.map(ob=><tr key={ob.id}>
                     <td>{ob.id}</td>
                     <td>{ob.name}</td>
                     <td>{ob.amount}</td>
                </tr>)}
            </tbody>
        </table>
        <br></br>
        <h1>Cancellation List </h1>
        <table border='2'>
            <thead>
                <tr >
                    <th>Id</th>
                    <th>Name</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {concellationlst.map(ob=><tr key={ob.id}>
                    <td>{ob.id}</td>
                    <td>{ob.name}</td>
                    <td>{ob.amount}</td>
                </tr>)}
            </tbody>
        </table>
        <h3>Total amount: {totalamt}</h3>
    </div>
  )
}
