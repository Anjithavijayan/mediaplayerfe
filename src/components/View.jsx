import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getAllVideos } from '../services/AllApi'
import { Col ,Row} from 'react-bootstrap'


function View({uploadVideoStatus}) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]= useState(false)
  const getVideos = async () => {
    const response = await getAllVideos();
    console.log("=====all videos=====");
    console.log(response);
    const { data } = response;
    setAllVideos(data)

  }
  useEffect(() => {
    getVideos()
    setDeleteVideoStatus(false)
  }, [uploadVideoStatus,deleteVideoStatus])

  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos?.map((videos) => (
              <Col sm={12} md={2} lg={2} xl={4} className='mt-2'>
                <Videocard displayVideo={videos} setDeleteVideoStatus={setDeleteVideoStatus}/>
              </Col>
            )) :
            <p style={{fontSize:'30px'}} className='text-warning m-4'>Nothing To Display</p>
        }

      </Row>

    </>
  )
}

export default View