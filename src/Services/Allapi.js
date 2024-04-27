import CommonApi from "./CommonApi";
import { BASE_URL } from "./BASE_URL";


export const getuserdata = async (data)=>{

  return await CommonApi('POST',`${BASE_URL}/Userdata`,data)

}

export const showuserdata = async ()=>{

  return await CommonApi('GET',`${BASE_URL}/Userdata`,"")

}

export const addstudentdata = async (data)=>{


  return await CommonApi('POST',`${BASE_URL}/data`,data)

}

export const showdata = async ()=>{

  return await CommonApi("GET",`${BASE_URL}/data`,"")

}

export const deletedata  = async (id)=>{

  return await CommonApi("DELETE",`${BASE_URL}/data/${id}`,{})

}

export const updatedata = async (id,data)=>{

  return await CommonApi("PUT",`${BASE_URL}/data/${id}`,data)

}