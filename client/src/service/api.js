import axios from 'axios';

const url = "http://localhost:5000/api"


const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const addUser = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        await axios.post(`${url}/user/add`, data, config)
    } catch (e) {
        console.log("Error while add User Api ", e.message)
    }
}
export const getUsers = async () => {
    try {
        const {data} = await axios.get(`${url}/user/users`);
        return data;
    } catch (e) {
        console.log("Error while Getting Users Api ", e.message)
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data, config)
    } catch (e) {
        console.log("Error while Conversation Api ", e.message)
    }
}
export const getConversation = async (data) => {
    try {
        const res = await axios.post(`${url}/conversation/get`, data, config)
        return res.data
    } catch (e) {
        console.log("Error while Conversation Api ", e.message)
    }
}


export const newMessage = async (msg) => {
    try {
        const res = await axios.post(`${url}/message/add`, msg, config)
        return res.data
    } catch (e) {
        console.log("Error while sending message  ", e.message)
    }
}
export const getMessages = async (id) => {
    try {
        const res = await axios.get(`${url}/message/get/${id}`)
        return res.data
    } catch (e) {
        console.log("Error while Getting Message Api ", e.message)
    }
}

export const uploadFile = async(data)=>{
        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    try {
            console.log("upload")
        return await axios.post(`${url}/message/file/upload`, data, config)
    }   catch (e){
        console.log("Error while uploading file", e.message)
    }

}