const initState = {
    loginError: null,
    regError: null,
    user: null,
}

export const authReducer = (state=initState, action:{type:string, payload:object}) => {
    switch(action.type) {
        case 'REGISTER':
            console.log('reg')
            return {
                ...state,
                user:action.payload,
                loginError:null,
                regError: null
            }
        case 'REGISTER_ERROR':
            return {
                ...state,
                regError: action.payload
            }
        default: 
            return state;
    }
}

// export default authReducer;