// const axios = require('/node_modules/axios/dist/node/axios.cjs');
const baseUrl = "http://localhost:8080/api"

const Api = {
    signUp: async (formdata) => {
        const response = await fetch(`${baseUrl}/user/signup`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formdata.get("email"),
                username: formdata.get("username"),
                password: formdata.get("password"),
            }),
        })
        return response.json();
    },
    login: async (formdata) => {
        const response = await fetch(`${baseUrl}/user/login`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formdata.get("email"),
                password: formdata.get("password"),
            }),
        })
        return response.json();
    },
    channelCreate: async (formdata) => {
        const response = await fetch(`${baseUrl}/channel`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                channelName: formdata.get("channelName"),
                channelDescription: formdata.get("channelDescription"),
                channelPassword: formdata.get("channelPassword"),
            }),
        })
        return response.json();
    },
}
export default Api;