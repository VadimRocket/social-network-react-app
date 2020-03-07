import * as axios from 'axios';

// create axios instance
const instance = axios.create({
    baseURL:  'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {"API-KEY":"baeb9645-b348-47e4-802d-8e049b7d9f2b"},
});

/*
===================
 Query Parameters
===================
 count: (integer - default: 10 - maximum: 100) - totalCount
 page size (how many items will be returned in response)
 page: (integer - default: 1) number of portion of items
*/

export const usersAPI  = {
    // get parameter /users?page
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
}

export const profileAPI  = {
   
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    // userId - uri parameter {userId}
    getStatus(userId) { 
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) { 
        // request: body, media type: application/json, type: object, properties: status(string - maxLength: 300)
        // 2 param - json object with prop: status
        return instance.put(`profile/status/`, {status: status});
    }
}

export const authAPI  = {
    authMe() { // second param: setting request - cookie
        return instance.get(`auth/me`);        
    },
    // {email, password, rememberMe} - data object
    login(email, password, rememberMe = false) {  //, captcha = null
        
        return instance.post(`auth/login`, {email,password,rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);  
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
   


