import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div class='d-flex justify-content-center align-items-center'>
      <div className='footer d-flex justify-content-center align-items-center '>
        <div style={{ width: '400px' }}>
          <h5 className='textStyle'> <i class="fa-solid fa-video text-warning me-3" style={{ color: "orange" }}></i>Media Player</h5>
          <p style={{ textAlign: 'justify' }} className='textStyle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quo molestias minima animi amet, libero ipsam, quis unde ex minus consequatur rem corrupti beatae velit aliquid, doloribus totam quaerat distinctio?</p>
        </div>
      </div>
      <div className='d-flex flex-column ms-5'>
        <h4 className='textStyle'>Links</h4>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          Landing page
        </Link>
        <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>
          Home
        </Link>
        <Link to='/watchhistory' style={{ textDecoration: 'none', color: 'white' }}>
          Watch History
        </Link>
      </div>
      <div className='d-flex flex-column ms-5'>
        <h4 className='textStyle'>Guides</h4>
        <Link to='https://react.dev/' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
          React
        </Link>
        <Link to='https://react-bootstrap.netlify.app/' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
          React Bootstrap
        </Link>
        <Link to='https://www.npmjs.com/package/json-server' target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
          Json Server
        </Link>
      </div>
      <div className='ms-5'>
        <h4 className='textStyle'>Contact Us</h4>
        <div className='d-flex'>
          <input type="text" name="" id="" className='form-control' placeholder='Enter your email Id' />
          <button className='btn btn-warning ms-2'>SUBSCRIBE</button>
        </div>
        <div className='d-flex align-items-center justify-content-evenly mt-3'>
          <Link style={{ textDecoration: 'none', color: 'white' }}>
            <i class="fa-brands fa-instagram fa-2x"></i>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }}>
            <i class="fa-brands fa-facebook fa-2x"></i>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }}>
            <i class="fa-brands fa-twitter fa-2x"></i>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }}>
            <i class="fa-brands fa-reddit fa-2x"></i>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Footer