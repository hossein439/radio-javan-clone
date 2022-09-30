<script setup>

import { useStore } from '@/store/store';
const storeInfo = useStore();

function resetUserInfo() {
    storeInfo.$reset();
    const userInfo = {
        token: null,
        user: null,
        isUserLogIn: false
    }
    const userInfoString = JSON.stringify(userInfo);
    localStorage.setItem('userInfo',userInfoString);
}

</script>

<template>

    <div
        class="flex justify-between h-[3em] items-center text-white bg-indigo-500 px-[2em] sticky w-full shadow-2xl z-10">
        <div>
            <router-link class="mx-2" to="/">
                <button class="capitalize text-white">
                    radio javan
                </button>
            </router-link>
            <router-link class="mx-2" to="/song">my song</router-link>
            <router-link class="mx-2" to="/song/radio-javan">radio javan</router-link>

        </div>

        <div class="flex">
            <router-link v-if="!storeInfo.isUserLogIn" to="/register">
                <button class="capitalize p-2 transition-all hover:opacity-60">register</button>
            </router-link>
            <router-link v-if="!storeInfo.isUserLogIn" to="/login">
                <button class="capitalize p-2 transition-all hover:opacity-60">log In</button>
            </router-link>
            <router-link v-if="storeInfo.isUserLogIn" to="/register" @click="resetUserInfo()">
                <button class="capitalize p-2 transition-all hover:opacity-60">log out</button>
            </router-link>
        </div>
    </div>

</template>

<style scoped>
a {
    text-transform: capitalize;
}
</style>