import { serverURL } from "./serverURL";
import { commonApi } from "./commonApi";

//upload video

export const uploadVideo = async (reqBody) => {
   return await commonApi('POST', `${serverURL}/videos`, reqBody)

}

//get all videos

export const getAllVideos = async () => {
   return await commonApi('GET', `${serverURL}/videos`, "")
}

//delete videos

export const deleteVideo = async(id)=>{
   return await commonApi('DELETE',`${serverURL}/videos/${id}`,{})
   // "http://localhost:4000"/videos/1
}

//add to watch history

export const addToHistory =async (reqBody) => { 
   return await commonApi('POST',`${serverURL}/history`,reqBody)
}

//get all watch history

export const getAllHistory = async()=>{
   return await commonApi('GET',`${serverURL}/history`,"")
}

//delete history by id

export const deleteHistory=async(id)=>{
   return await commonApi('DELETE',`${serverURL}/history/${id}`,{})
}

//add category

export const addCategory=async(reqBody)=>{
   return await commonApi('POST',`${serverURL}/category`,reqBody)
}

//get all category

export const getAllCategory=async()=>{
   return await commonApi('GET',`${serverURL}/category`,"")
}

//delete category by id

export const deleteCategory=async(id)=>{
   return await commonApi('DELETE',`${serverURL}/category/${id}`,{})
}

//get video details by id

export const getAllVideosById = async (id) => {
   return await commonApi('GET', `${serverURL}/videos/${id}`, "")
}

//update category with video details

export const updateCategory=async(data,id)=>{
   return await commonApi('PUT',`${serverURL}/category/${id}`,data)
}