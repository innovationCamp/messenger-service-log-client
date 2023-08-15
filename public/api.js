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
    channelList: async () => {
        const response = await fetch(`${baseUrl}/channel`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response.json();
    },
    channelSearch: async (queryObject) => {
        let query = Object.keys(queryObject)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(queryObject[k]))
            .join('&');
        let url = `${baseUrl}/channel/search?${query}`;
        const response = await fetch(url, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response.json();
    },
    channelParticipant: async (formdata) => {
        const channelId = formdata.get("channelId")
        const response = await fetch(`${baseUrl}/channel/${channelId}/user`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response.json();
    },
    personalWalletCreate: async (formdata) => {
        const response = await fetch(`${baseUrl}/wallet/user`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: formdata.get("password"),
            }),
        })
        return response.json();
    },
    personalWalletGet: async (formdata) => {
        const response = await fetch(`${baseUrl}/wallet/user`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response.json();
    },
    groupWalletCreate: async (formdata) => {
        const response = await fetch(`${baseUrl}/wallet/group`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                channelId: formdata.get("channelId"),
                walletName: formdata.get("walletName"),
                description: formdata.get("description"),
                password: formdata.get("password"),
            }),
        })
        return response.json();
    },
    groupWalletGetAll: async (formdata) => {
        const channelId = formdata.get("channelId")
        const response = await fetch(`${baseUrl}/wallet/group/all/channel/${channelId}`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response.json();
    },
    groupWalletParticipant: async (formdata) => {
        const groupWalletId = formdata.get("groupWalletId")
        const response = await fetch(`${baseUrl}/wallet/group/${groupWalletId}`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response.json();
    },
    groupWalletParticipantGet: async (formdata) => {
        const response = await fetch(`${baseUrl}/wallet/user/group/all`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response.json();
    },
    groupWalletGet: async (formdata) => {
        const groupWalletId = formdata.get("groupWalletId")
        const response = await fetch(`${baseUrl}/wallet/group/${groupWalletId}`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response.json();
    },
    transaction: async (formdata) => {
        const response = await fetch(`${baseUrl}/wallet/transaction`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: formdata.get("password"),
                walletId: formdata.get("walletId"),
                targetWalletId: formdata.get("targetWalletId"),
                amount: formdata.get("amount"),
            }),
        })
        return response.json();
    },
    transactionPersonalWalletGet: async (formdata) => {
        const response = await fetch(`${baseUrl}/wallet/user/transaction/all`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response.json();
    },
    transactionGroupWalletGet: async (formdata) => {
        const groupWalletId = formdata.get("groupWalletId")
        const response = await fetch(`${baseUrl}/wallet/group/${groupWalletId}/transaction/all`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response.json();
    },
}
export default Api;