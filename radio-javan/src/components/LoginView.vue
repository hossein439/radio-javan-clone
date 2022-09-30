<script setup>
    
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from '@/store/store';
import AuthenticationService from '@/services/AuthenticationService';

const router = useRouter();
const email = ref();
const password = ref();
const storeInfo = useStore();

let error = ref('');

async function login() {
    try {
        await AuthenticationService.login({
            email: email.value,
            password: password.value,
        }).then((res) => {
            if (res.status == 200 && res.statusText === "OK") {
                
                const userString = JSON.stringify({
                    token: res.data.token,
                    user: res.data.user,
                    isUserLogIn: true
                })
                localStorage.setItem('userInfo', userString);

                router.push('/');
                storeInfo.$patch({
                    token: res.data.token,
                    user: res.data.user
                });
                storeInfo.setToken()
            }
        });
    } catch (err) {
        error.value = err.response.data.error;
    }
}

</script>

    
<template>
    <div class="bg-image flex justify-center items-center absolute inset-0">
        <div class="flex items-center flex-col justify-center w-[30em] p-[2em] rounded-lg">
            <!-- <img src="../../public/images/logo.png" alt=""> -->

            <form @submit.prevent="login()" action="">

                <div class="text-red-600" v-html="error"></div>

                <div class="w-[20em] mx-auto">

                    <div
                        class="my-5 relative border-2 border-gray-700 rounded-md p-3 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                        <label for="name" class=""></label>
                        <input v-model="email" type="text" name="email" id="email"
                            class="bg-transparent block w-full border-0 p-0 text-white placeholder-white focus:ring-0 sm:text-sm"
                            placeholder="Email">
                    </div>

                    <div
                        class="my-5 relative border-2 border-gray-700 rounded-md p-3 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                        <label for="name" class=""></label>
                        <input v-model="password" type="password" name="password" id="password"
                            class="bg-transparent block w-full border-0 p-0 text-white placeholder-white focus:ring-0 sm:text-sm"
                            placeholder="Password">
                    </div>
                </div>

                <button type="submit"
                    class="flex justify-center items-center w-full text-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Login
                </button>


            </form>
        </div>
    </div>

</template>

<style scoped>
.bg-image {
    background-image: url('../../public/images/head.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>