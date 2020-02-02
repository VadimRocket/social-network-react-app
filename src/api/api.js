import * as axios from 'axios';


// create axios instance
const instance = axios.create({
    baseURL:  'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {"API-KEY":"baeb9645-b348-47e4-802d-8e049b7d9f2b"},

});

export const usersAPI  = {
    getUsers (currentPage = 1, pageSize = 90) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data); 
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
}


export const authAPI  = {
    authMe() { // second param: setting request - cookie
        return instance.get(`auth/me`);        
    },
    login(email, password, rememberMe = false, captcha = null) { 
        return instance.post(`auth/login`, {email,password,rememberMe}).then( response => response.data) 
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}


   /**
     * Properties
        data: required(object)
        if user is authenticated then data contains all this properties

        id: required(number)
        logged user id

        email: required(string)
        logged user email

        login: required(string)
        user login

        resultCode: required(number)
        (0 if operation completed successfullt, other numbers - some error occured)
        * 
    */


