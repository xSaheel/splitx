export const getUser = (email: string) => {
    return {
        type: actions.GET_USER,
        email
    }
}

export const setUser = (email: string) => {
    return {
        type: actions.SET_USER,
        email
    }
}


export const actions = {
    GET_USER: "GET_USER",
    SET_USER: "SET_USER"
}
