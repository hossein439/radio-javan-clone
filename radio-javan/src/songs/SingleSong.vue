<script setup>
import SongsServices from '../services/SongsServices';
import LoaderVeiw from '../components/LoaderVeiw.vue';
import { useRoute } from 'vue-router';
import { YoutubeVue3 } from 'youtube-vue3'
import { ref } from 'vue';

const route = useRoute();
const songData = ref(undefined);

try {
    const id = ref(route.params.id);
    SongsServices.view(id.value)
        .then((res) => {
            console.log(res.data)
            songData.value = res.data
        })
        .catch((err) => {
            console.log(err);
        })
} catch (err) {
    console.log(err)
}
</script>

<template>

    <div class="flex justify-between items-center m-10 p-2 bg-indigo-600 text-white rounded-md">
        <h1 class="xs:text-xl lg:text-3xl text-left">Song View</h1>
        <i class="text-2xl fa-solid fa-headphones"></i>
    </div>
    <div v-if="songData" class="xs:mx-0 my-5">

        <div class="mx-auto flex w-[50em]">
            <img :src="songData.ablumImageUrl" width="300" class="rounded-lg mx-auto block object-contain" alt="" />
            <youtube-vue3 :videoid="songData.youtubeId" :autoplay="0" controls="1" :width="300" height="200"></youtube-vue3>
        </div>


        <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-5 xs:p-5 xl:p-5 xl:mx-[20em]">
            <div class="flex flex-col text-left ">
                <span class="font-bold">Title :</span>
                <div class="p-2 rounded border bg-indigo-600 text-white"> {{ songData.title }} </div>
            </div>
            <div class="flex flex-col text-left ">
                <span class="font-bold">Genre :</span>
                <div class="p-2 rounded border bg-indigo-600 text-white"> {{ songData.genre }} </div>
            </div>
            <div class="flex flex-col text-left ">
                <span class="font-bold">Artist :</span>
                <div class="p-2 rounded border bg-indigo-600 text-white"> {{ songData.artist }} </div>
            </div>
            <div class="flex flex-col text-left ">
                <span class="font-bold">Album :</span>
                <div class="p-2 rounded border bg-indigo-600 text-white"> {{ songData.album }} </div>
            </div>
            <div class="flex flex-col text-left ">
                <span class="font-bold">Youtube Id :</span>
                <div class="p-2 rounded border bg-indigo-600 text-white"> {{ songData.youtubeId }} </div>
            </div>
            <div class="flex flex-col text-left ">
                <span class="font-bold">Lyrics :</span>
                <div class="p-2 rounded border bg-indigo-600 text-white"> {{ songData.lyrics }} </div>
            </div>
            <div class="flex flex-col text-left ">
                <span class="font-bold">Tab :</span>
                <div class="p-2 rounded border bg-indigo-600 text-white"> {{ songData.tab }} </div>
            </div>
        </div>
        <div class="flex justify-center">
            <router-link :to="{name: 'songs'}"
                class="w-1/5 mt-5 text-center px-8 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Back
            </router-link>
        </div>


    </div>
    <div v-else>
        <LoaderVeiw></LoaderVeiw>
        <router-link :to="{name: 'songs'}"
            class="w-1/6 mx-auto flex justify-center mt-5 text-center px-8 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            Back
        </router-link>
    </div>
</template>

<style scoped>

</style>