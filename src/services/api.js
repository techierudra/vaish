import axios from "axios";

const userUrl='http://localhost:8080';

export const getLogin=async(email)=>{
    email=email || '';
    try{
        return await axios.get(`${userUrl}/admin/${email}`);
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}

export const getUserLogin=async(email)=>{
    email=email || '';
    try{
        return await axios.get(`${userUrl}/user/${email}`);
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}