import firebase, {firebaseAuth, provider} from '../../../../consts/fbConfig';

export const register = (newUser: {email: string, password:string}) => {
    return (dispatch: Function) => {
        firebaseAuth.createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(user => {
            dispatch({type:'REGISTER', payload: user})
        }).catch(error => {
            dispatch({type:'REGISTER_ERROR', payload: error})
        })
    }
}