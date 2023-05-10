type LoginArg = {
    username: string | undefined,
    password: string | undefined,
}
export const loginUser = (user: LoginArg): Promise<any> => {
    return fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}

export default {}