import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistory } from '../services/allAPI'


function WatchHistory() {
  const [history,setHistory]=useState([])
  const handleHistory =async()=>{
    //make api call
    const {data} =await getAllHistory()
    setHistory(data);
  }
  console.log(history)
  useEffect(()=>{
    handleHistory()
  
  },[])

  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:'blueviolet'}} >
      <i class="fa-solid fa-circle-arrow-left fa-beat-fade me-2"></i>Back to Home</Link>
    </div>

    <table className='table mt-5 mb-5 container'>
      <thead>
        <th>#</th>
        <th>Name</th>
        <th>URL</th>
        <th>TimeStamp</th>
        <th>Action</th>
      </thead>
      <tbody>
        {
          history?history?.map((item,index)=>(
            <tr key={item?.id}>
        <td>{index+1}</td>
        <td>{item?.caption}</td>
        <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
        <td>{item.timeStamb}</td>
        <td><button className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
          )):<p className='fw-bolder text-danger fs-5'>Nothing to Dipaly</p>
}
      </tbody>
    </table>
    </>
  )
}

export default WatchHistory