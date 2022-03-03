import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": process.env.REACT_APP_SAMURAI_API_KEY
    },
});

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data);
    }
}

export const authApi = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    logIn( email, password, rememberMe, captcha = true) {
      return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
    },
    logOut() {
        return instance.delete(`auth/login`).then(response => response.data);
    },
}
