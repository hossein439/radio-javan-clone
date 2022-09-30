<script setup>

import HeaderVeiw from './components/HeaderVeiw.vue';

</script>

<template>

    <div>
        <HeaderVeiw />
        <router-view />
    </div>

</template>

<style>
#app {
    font-family: "Montserrat";
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    box-sizing: border-box;
    color: #2c3e50;
    /* margin-top: 4em; */
}
</style>
