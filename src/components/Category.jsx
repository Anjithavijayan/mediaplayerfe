import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { addCategory, deleteCategory, getAllCategory, getAllVideosById, updateCategory } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Videocard from './Videocard';



function Category() {
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState()
    const [allCategory, setAllCategory] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddCategory = async () => {
        if (!categoryName) {
            alert("Please fill the form completetly")
        }
        else {
            let body = {
                categoryName: categoryName,
                allVideos: []
            }
            const response = await addCategory(body);
            if (response.status === 201) {
                toast.success(`${categoryName} Successfully inserted`);
                handleClose()
                setCategoryName('')
            }
            else {
                toast.error("Something went wrong")
            }

        }

    }
    //after allapi do below 
    const getCategory = async () => {
        const response = await getAllCategory();
        const { data } = response;
        console.log("===category details===");
        console.log(data);
        setAllCategory(data)


    }
    useEffect(() => {
        getCategory();
    }, [])

    const handleDelete = async (categoryId) => {
        const result = await deleteCategory(categoryId);
        console.log("===delete response===");
        console.log(result);
        if (result.status === 200) {
            getCategory()
        }
        else {
            toast.error("Something went wrong")
        }

    }
    const videoDrop = async (e, id) => {
        // console.log("====On drop====");
        // console.log("Category Id:",id);
        //get video id that we passed from video card
        const videoid = e.dataTransfer.getData("videoID")
        // console.log("====video id====",videoid);
        console.log(`video with id ${videoid} need to put inside category with id ${id}`);
        const { data } = await getAllVideosById(videoid);
        console.log("video details:====");
        console.log(data);
        const selectedCategory = allCategory?.find(item => item.id === id);
        selectedCategory.allVideos.push(data)
        console.log("===Selected category====");
        console.log(selectedCategory);
        const response =await updateCategory(selectedCategory,id)
        getCategory()
        

    }
    const dragOver = (e) => {
        //onDragOver method will trigger page refresh, so the videoID we are passing may lost
        e.preventDefault();
        console.log("====Inside Drag Over====");


    }
    return (
        <>
            <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
            {
                allCategory?.length > 0 ?

                    allCategory.map((item) => (
                        <div className='m-3 border border-secondary rounded p-3'
                            droppable onDragOver={(e) => dragOver(e)}
                            onDrop={(e) => videoDrop(e, item.id)}
                        >
                            <div className='d-flex justify-content-between align-items-center '>
                                <h6 style={{ color: 'white' }}>{item.categoryName}</h6>
                                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button>
                                
                            </div>
                            {
                                item.allVideos?.length>0?
                                item.allVideos?.map(card=>(
                                    <Videocard displayVideo={card}/>
                                ))
                             
                                :<p>Nothing to display</p>
                            }

                        </div>
                    )) :
                    <p>No Category Found</p>
            }
            <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
                <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title><i class="fa-solid fa-list text-warning me-3"></i><span className='textStyle'>Add Category</span></Modal.Title>
                </Modal.Header>

                <Modal.Body className='bg-dark'>
                    <p className='textStyle' style={{ fontWeight: '700' }}>Please fill the form </p>
                    <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Category Name"
                                onChange={(e) => setCategoryName(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="warning" onClick={handleAddCategory}>Add</Button>

                </Modal.Footer>

            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />


        </>
    )
}

export default Category