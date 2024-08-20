import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form}  from 'react-bootstrap';
import { uploadVideo } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

    // state to store all form field values
    const [videoDetails, setVideoDetails] = useState({
        caption: '',
        imageUrl: '',
        youtubeLink: ''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addVideoDetails =async () => {
        const { caption, imageUrl, youtubeLink } = videoDetails
        if ( !caption || !imageUrl || !youtubeLink) {
            // alert('Please fill the form completely');
            toast.warning('Please fill the form completely')

        }
        else {
            console.log("final data");
            console.log(videoDetails);
            const response = await uploadVideo(videoDetails);
            console.log(response);
            if(response.status===201){
                setUploadVideoStatus(response.data)
                // alert(`${response.data.caption} successfully uploaded`)
                toast.success(`${response.data.caption} successfully uploaded`)
                handleClose();
                setVideoDetails({
                    caption: '',
                    imageUrl: '',
                    youtubeLink: ''
                })  

            }
            else{
                // alert("Something went wrong")
                toast.error("Something went wrong")
            }

        }

    }
    const getEmbededLink = (data) => {
        console.log("===inside getEmbededLink method===");
        const link = `https://www.youtube.com/embed/${data.slice(-11)}`
        console.log(link);
        // let image_url = `https://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`
        // setVideoDetails({ ...videoDetails, youtubeLink: link,imageUrl:image_url })
        setVideoDetails({ ...videoDetails, youtubeLink: link})

    }
    return (
        <>
            <div className='d-flex align-items-center'>
                <h5 className='textStyle me-3'>Upload A New Video</h5>
                <button className='btn' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fs-5" style={{ color: 'white' }}></i></button>

            </div>
            <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
                <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title><i class="fa-solid fa-film text-warning me-3"></i><span className='textStyle'>Upload Video</span></Modal.Title>
                </Modal.Header>

                <Modal.Body className='bg-dark'>
                    <p className='textStyle' style={{ fontWeight: '700' }}>Please fill the form </p>
                    <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="text" placeholder="Enter Video Caption"
                                onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="text" placeholder="Enter Video Thumbnail URL"
                                onChange={(e) => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="text" placeholder="Enter Youtube Video Link "
                                // onChange={(e) => setVideoDetails({ ...videoDetails, youtubeLink: e.target.value })} 
                                onChange={(e) => getEmbededLink(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="warning" onClick={addVideoDetails}>Upload</Button>
                </Modal.Footer>

            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
        </>
    )
}

export default Add




{/* <iframe width="974" height="514" src="https://www.youtube.com/embed/VAdGW7QDJiU" 
    title="JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | 
    Arijit S, Shilpa R | Kumaar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
     allowfullscreen></iframe> */}