//rafce
import { Link } from 'react-router-dom'
import React from 'react'

const History = () => {
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className="container my-5 table">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>youtube</td>
            <td><a target='_blank' href="https://www.youtube.com/">https://www.youtube.com/</a></td>
            <td>9/11/12 10.30PM GMT MUMBAI 5.30</td>
            <td><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History
