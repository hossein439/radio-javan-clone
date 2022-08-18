<template>
    <h1 class="text-4xl mt-8">register</h1>

    <form @submit.prevent="register" action="">

        <div class="w-[20em] mx-auto">
            <div
                class="m-5 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label for="name"
                    class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Email</label>
                <input v-model="email" type="email" name="email" id="email"
                    class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm">
            </div>

            <div
                class="m-5 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label for="name"
                    class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Password</label>
                <input type="password" name="password" id="password"
                    class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm">
            </div>
        </div>

        <button type="submit"
            class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register
            <!-- Heroicon name: solid/mail -->
            <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
        </button>


    </form>

</template>

<script setup>
import { ref } from 'vue';
import AuthenticationService from '@/services/AuthenticationService';

const email = ref();
const password = ref();

async function register(){
    const response = await AuthenticationService.register({
        email: email.value,
        password: password.value
    });

    console.log(response.data)
}

console.log(email, password)

</script>

<style>
</style>