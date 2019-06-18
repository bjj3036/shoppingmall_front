import {observable, action} from "mobx"
import axios from "axios"

class ProfileStore {
    static _instance = null;

    static getInstance() {
        if (ProfileStore._instance === null)
            ProfileStore._instance = new ProfileStore();
        return ProfileStore._instance;
    }

    constructor() {
        ProfileStore._instance = this;
    }

    @observable loginUser = null;
    @action login = async (user) => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/user/login',
                method: 'post',
                header: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                data: user,
                timeout: 3000
            });
            if (response.data) {
                this.loginUser = response.data
                return true
            }
            return response.data
        } catch (e) {
            alert(e.toLocaleString())
        }
    }

    @action logout = () => {
        this.loginUser = null;
    }

    @action updateUser = async (user) => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/user/modify',
                method: 'put',
                header: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                data: user,
                timeout: 3000
            });
            if (response.status === 200) {
                return true
            }
            return response.data
        } catch (e) {
            alert(e.toLocaleString())
        }
    }

    @action fetchUser = async (userId) => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/user/findById/' + userId,
                method: 'get',
                header: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                timeout: 3000
            });
            if (response.status === 200 && response.data) {
                this.loginUser = response.data
            }
            return response.data
        } catch (e) {
            alert(e.toLocaleString())
        }
    }
}


export default ProfileStore.getInstance();