import { defineStore } from "pinia";
const userInfo = JSON.parse(localStorage.getItem('userInfo'));

console.log(userInfo);

export const useStore = defineStore('store', {
    state: () => {
        return {
            token: userInfo.token ? userInfo.token : null,
            user: userInfo.user ? userInfo.user : null,
            isUserLogIn: userInfo.isUserLogIn ? userInfo.isUserLogIn : false,
        }
    },
    getters: {},
    actions: {
        setToken() {
            if (this.token) {
                this.isUserLogIn = true;

            } else {
                this.isUserLogIn = false;
            }
        },
    }
});