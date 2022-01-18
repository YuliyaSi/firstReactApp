import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "b8e21a22-d896-4a37-83b9-6901589c197a"
    },
});

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    authMe() {
        return instance.get(`auth/me`).then(response => response.data);
    }
}
