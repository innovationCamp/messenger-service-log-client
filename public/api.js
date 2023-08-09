const baseUrl = "http://localhost:8080/api"

const Api = {
    signUp: async (formdata) => {
        const response = await fetch(`${baseUrl}/user/signup`, {
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
}

export default Api;