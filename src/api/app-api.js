import {instance} from "./api";

export const appApi = {
    getLogin (email, pass) {
        return instance.get(`/users?email=${email}&pass=${pass}`).then(res=>res.data)
    },
    postRegUser (email, pass) {
        return instance.post('/users', {email,pass}).then(res=>res.data)
    },
    putNewPass(id, pass){
        return instance.put(`/users/${id}`, {pass}).then(res=>res.data)
    }
}