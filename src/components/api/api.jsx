import * as axios from 'axios'

const instance = axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      withCredentials: true,
      headers: {
            "api-key": "1c752f50-90bf-450a-b5e6-41bca2622c7c"
      }
})

export const usersAPI = {
      getUsers(currentPage, pageSize) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                  .then(response => response.data)
      },
      getFollow(user) {
            return instance.post(`follow/${user.id}`)
      },
      getUnfollow(user) {
            return instance.delete(`follow/${user.id}`)
      },
      getAuth() {
            return instance.get(`auth/me`)
      },
      getProfile(userId) {
            return instance.get(`profile/${userId}`)
      },
      getStatus(userId) {
            return instance.get(`profile/status/${userId}`)
      },
      updateStatus(status) {
            return instance.put('profile/status', { status })
      }
}

