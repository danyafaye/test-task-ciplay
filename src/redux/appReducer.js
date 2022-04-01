import {appApi} from "../api/app-api";

const USERS_DATA = 'USERS/DATA'
const USERS_PASS = 'USERS/PASS'
let initialState = {
    id: 0,
    isAuth: false,
    email: "",
    pass: "",
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_DATA:
        case USERS_PASS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    setUserData: (id, isAuth, email, pass, message) => ({
        type: 'USERS/DATA',
        payload: {id, isAuth, email, pass, message}
    }),
    setPass: (pass) => ({type: 'USERS/PASS', payload: {pass}}),
    getLogin: (mail, password) => async (dispatch) => {
        let data = await appApi.getLogin(mail, password);
        if (mail === data[0].email && password === data[0].pass) {
            dispatch(actions.setUserData(data[0].id, true, data[0].email, data[0].pass))
            alert("Login successful!")
        } else {
            alert('Email or password is incorrect. Try again')
        }
    },
    addUser: (mail, password) => async (dispatch) => {
        await appApi.postRegUser(mail, password);
        dispatch(actions.getLogin(mail, password));
        alert('Successful registration!')
    },
    updatePass: (oldpass, newpass) => async (dispatch, getState) => {
        let {id, pass, email} = getState().app
        if(oldpass === pass) {
            await appApi.putNewPass(id, email, newpass);
            dispatch(actions.setPass(newpass));
            alert('Password has been successfully changed!')
        } else {
            alert('The old password is incorrect!')
        }
    },
}

export default appReducer;