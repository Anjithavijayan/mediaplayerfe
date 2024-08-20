import React, { useState } from 'react'
import Add from '../Add'
import View from '../View'
import { Link } from 'react-router-dom'
import Category from '../Category'

function Home() {
  const [uploadVideoStatus,setUploadVideoStatus]=useState({})
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
        <div className='add_video'>
          <Add setUploadVideoStatus={setUploadVideoStatus} />
        </div>
        <Link to='/watchhistory' style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }}>Watch Histroy</Link>
      </div>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <div className='all-videos col-md-9 mt-5'>
          <h4 className='textStyle mb-3'>All Videos</h4>
          <View uploadVideoStatus={uploadVideoStatus}/>
        </div>
        <div className='category col-md-3'>
          <Category/>

        </div>
      </div>
    </>
  )
}

export default Home
