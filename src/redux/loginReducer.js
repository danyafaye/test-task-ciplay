import {appApi} from "../api/app-api";

const USERS_DATA = 'USERS/DATA'
const USERS_PASS = 'USERS/PASS'

let initialState = {
    id: 0,
    isAuth: false,
    email: "",
    pass: ""
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case USERS_DATA:
        case USERS_PASS:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state;
    }}

export const actions = {
    setUserData: (id, isAuth, email, pass) => ({type: 'USERS/DATA', payload:{id,isAuth,email,pass}}),
    setPass: (pass) => ({type: 'USERS/PASS', payload:{pass}}),
    getLogin: (mail,password) => async(dispatch)=>{
        let data = await appApi.getLogin(mail,password);
        let {id, email, pass} = data //.data
        dispatch(actions.setUserData(id, true, email, pass)); //по-хорошему здесь везде должна быть проверка на результирующие коды, но из-за того, что используется мок вместо нормальной бд, проверки нет
    },
    addUser: (mail, password) => async(dispatch)=>{
            await appApi.postRegUser(mail, password);
            dispatch(actions.getLogin(mail, password));
    },
    updatePass: (id, password) => async(dispatch)=>{
        let data = await appApi.putNewPass(id, password);
        dispatch(actions.setPass(data.pass));
    },
}

export default appReducer;