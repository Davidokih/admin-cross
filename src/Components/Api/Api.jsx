import axios from "axios";
// const baseURL = "http://localhost:5000";
const baseURL = "https://crossbackend.onrender.com";

export const createAdmin = async(value) => {
    await axios.post(`${baseURL}/api/user/register`, value).then(res => {
        localStorage.setItem("user", JSON.stringify(res.data.data))
        alert(res.data.token)
    })
}
export const loginAdmin = async({email, password}) => {
    await axios.post(`${baseURL}/api/user/login`, {email, password }).then(res => {
        localStorage.setItem("user", JSON.stringify(res.data.data))
    })
}

export const verifyUser2 = async ({id, otp}) => {
    await axios.patch(`${baseURL}/api/user/${id}/verify2`, {otp} ).then(res => {
        console.log(res.data)
    })
};
export const getUser = async () => {
    const response = await axios.get(`${baseURL}/api/user`).then(res => {
        return res.data.data
    })

    return response
}
export const getCoustomers = async () => {
    const response = await axios.get(`${baseURL}/api/user/custormers`).then(res => {
        // console.log(res.data)
        return res.data.data
    })

    return response
}
export const getOneUser = async (id) => {
    const response = await axios.get(`${baseURL}/api/user/${id}`).then(res => {
        // console.log(res.data)
        return res.data.data
    })

    return response
}