import {combineReducers} from 'redux';
import {authReducer} from '../modules/auth/index'

const rootReducer = combineReducers({
    auth:authReducer,
})

export type RootStore = ReturnType<typeof rootReducer>

export default rootReducer;