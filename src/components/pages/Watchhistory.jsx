import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../../services/AllApi'

function Watchhistory() {
  const [allHistory, setAllHistory] = useState([])
  const getWatchHistory = async () => {
    const { data } = await getAllHistory()
    setAllHistory(data)
    console.log(data);
  }
  useEffect(() => {
    getWatchHistory()
  }, [])

  const handleDelete = async (historyId) => {
    await deleteHistory(historyId)
    getWatchHistory()
  }

  return (
    <>
      <div className='container mt-5 d-flex justify-content-between mb-5'>
        <h3 className='textStyle' > Watch History</h3>
        <Link to='/home' style={{ textDecoration: 'none', color: 'white', fontWeight: '700', fontSize: '18px' }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back To Home
        </Link>
      </div>
      <table className='table container mb-5 mt-5' data-bs-theme='dark'>
        <thead>
          <tr >
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allHistory.length > 0 ?
              allHistory.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.caption}</td>
                  <td>{item.url}</td>
                  <td>{item.timeStamp}</td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(item?.id)}><i className="fa-solid fa-trash"></i></button></td>
                </tr>
              )) :
              <p>No History Found</p>
          }

        </tbody>
      </table>
    </>
  )
}

export default Watchhistory