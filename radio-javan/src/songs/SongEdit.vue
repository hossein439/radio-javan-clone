<script setup>
import { ref } from 'vue';
import SongsServices from '@/services/SongsServices';
import Swal from 'sweetalert2';
import { useRoute } from 'vue-router';
import LoaderVeiw from '../components/LoaderVeiw.vue';

const route = useRoute();
const id = route.params.id;
let song = ref(undefined);
let loading = ref(false);
let showError = ref(false);

SongsServices.view(id)
.then((res)=>{
    loading.value = true;
    song.value = {...res.data};
})
.catch((err)=>{
    console.log(err)
});

async function editSong() {
    delete song.value.__v;
    const allFieldisFull = Object.keys(song.value).every((key) => {
        if (song.value[key] === null || song.value[key].trim().length === 0 || !song.value[key]) {
            return false;
        }
        return true;
    });
    if (!allFieldisFull) {
        showError.value = true;
        return
    }

    try {
        await SongsServices.edit(song.value);
        showError.value = false;
        Swal.fire({
            title: 'Your song was edited',
            icon: 'success'
        });
    } catch (err) {
        Swal.fire({
            title: 'Your song was edited',
            icon: 'error'
        });
    }
}


</script>

<template>
    <div v-if="loading">
        <div class="flex justify-between items-center m-10 p-2 bg-indigo-600 text-white rounded-md">
            <h1 class="xs:text-xl lg:text-3xl text-left">Song Edit</h1>
            <i class="text-2xl fa-solid fa-headphones"></i>
        </div>
        <form action="" @submit.prevent="editSong()" class="xs:mx-0 xl:mx-[20em] my-5">
    
            <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-5 xs:p-5 xl:p-0">
                <div class="flex flex-col text-left">
                    <span class="font-bold">Title :</span>
                    <input class="p-2 rounded border" type="text" v-model="song.title">
                </div>
                <div class="flex flex-col text-left">
                    <span class="font-bold">Genre :</span>
                    <input class="p-2 rounded border" type="text" v-model="song.genre">
                </div>
                <div class="flex flex-col text-left">
                    <span class="font-bold">Artist :</span>
                    <input class="p-2 rounded border" type="text" v-model="song.artist">
                </div>
                <div class="flex flex-col text-left">
                    <span class="font-bold">Album :</span>
                    <input class="p-2 rounded border" type="text" v-model="song.album">
                </div>
                <div class="flex flex-col text-left">
                    <span class="font-bold">Album Image Url :</span>
                    <input class="p-2 rounded border" type="text" v-model="song.ablumImageUrl">
                </div>
                <div class="flex flex-col text-left">
                    <span class="font-bold">Youtube Id :</span>
                    <input class="p-2 rounded border" type="text" v-model="song.youtubeId">
                </div>
                <div class="flex flex-col text-left">
                    <span class="font-bold">Lyrics :</span>
                    <input class="p-2 rounded border" type="text" v-model="song.lyrics">
                </div>
                <div class="flex flex-col text-left">
                    <span class="font-bold">Tab :</span>
                    <input class="p-2 rounded border" type="text" v-model="song.tab">
                </div>
            </div>
    
            <div v-if="showError" class="py-2 capitalize text-red-600">
                All field is Required
            </div>
    
            <div class="flex justify-between flex-wrap xs:p-5 xl:p-0">
                <router-link :to="{name: 'songs'}"
                    class="w-1/5 mt-5 text-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Cancel
                </router-link>
                <button 
                    class="w-1/5 mt-5 text-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Edit
                </button>
            </div>
    
        </form>
    </div>
    <div v-else>
        <LoaderVeiw></LoaderVeiw>
    </div>
</template>
    
<style scoped>

</style>