<script setup>
import { reactive, ref } from 'vue';
import SongsServices from '@/services/SongsServices';
import Swal from 'sweetalert2';

const song = reactive({
    title: null,
    artist: null,
    genre: null,
    album: null,
    ablumImageUrl: null,
    youtubeId: null,
    lyrics: null,
    tab: null,
});

let showError = ref(false);

async function createSong() {
    // const one = Object.keys(song).every(key => !!song[key]);
    const allFieldisFull = Object.keys(song).every((key) => {
        if (song[key] === null || song[key].trim().length === 0 || !song[key]) {
            return false;
        }
        return true;
    });
    if (!allFieldisFull) {
        showError.value = true;
        return
    }

    try {
        await SongsServices.post(song);
        showError.value = false;
        Swal.fire({
            title: 'Your song was created',
            icon: 'success'
        });
        for (const key in song) {
            song[key] = null;
        }
    } catch (err) {
        Swal.fire({
            title: 'Your song was created',
            icon: 'error'
        });
    }
}


</script>

<template>
    <div class="flex justify-between items-center m-10 p-2 bg-indigo-600 text-white rounded-md">
        <h1 class="xs:text-xl lg:text-3xl text-left">Song Create</h1>
        <i class="text-2xl fa-solid fa-headphones"></i>
    </div>
    <form action="" @submit.prevent="createSong()" class="xs:mx-0 xl:mx-[20em] my-5">

        <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-5 xs:p-5 xl:p-0">
            <label class="flex flex-col text-left">
                <span>Title :</span>
                <input class="p-2 rounded border" type="text" v-model="song.title">
            </label>
            <label class="flex flex-col text-left">
                <span>Genre :</span>
                <input class="p-2 rounded border" type="text" v-model="song.genre">
            </label>
            <label class="flex flex-col text-left">
                <span>Artist :</span>
                <input class="p-2 rounded border" type="text" v-model="song.artist">
            </label>
            <label class="flex flex-col text-left">
                <span>Album :</span>
                <input class="p-2 rounded border" type="text" v-model="song.album">
            </label>
            <label class="flex flex-col text-left">
                <span>Album Image Url :</span>
                <input class="p-2 rounded border" type="text" v-model="song.ablumImageUrl">
            </label>
            <label class="flex flex-col text-left">
                <span>Youtube Id :</span>
                <input class="p-2 rounded border" type="text" v-model="song.youtubeId">
            </label>
            <label class="flex flex-col text-left">
                <span>Lyrics :</span>
                <input class="p-2 rounded border" type="text" v-model="song.lyrics">
            </label>
            <label class="flex flex-col text-left">
                <span>Tab :</span>
                <input class="p-2 rounded border" type="text" v-model="song.tab">
            </label>
        </div>

        <div v-if="showError" class="py-2 capitalize text-red-600">
            All field is Required
        </div>

        <div class="flex justify-between flex-wrap xs:p-5 xl:p-0">
            <router-link :to="{name: 'songs'}"
                class="w-1/5 mt-5 text-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Cancel
            </router-link>
            <button href="/song"
                class="w-1/5 mt-5 text-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create
            </button>
        </div>

    </form>
</template>

<style scoped>

</style>