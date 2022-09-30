<script setup>
import SongsServise from '@/services/SongsServices';
import Swal from 'sweetalert2';

// import RadioJavan from '@/services/RadioJavan';
import { ref } from 'vue';
import LoaderVeiw from '../components/LoaderVeiw.vue';

let loading = ref(false);
let newSongs = ref(undefined);
let hasDataExsit = ref(false);
// let newSongsRadioJavan = ref(undefined);


function read(){
    try {
        SongsServise.index()
            .then((res) => {
                newSongs.value = res.data;
                loading.value = true;
                newSongs.value.length === 0 ? hasDataExsit.value = false : hasDataExsit.value = true;
            })
            .catch(() => {
                throw 'hello'
            });
    } catch (err) {
        Swal.fire({
            title: err,
            icon: 'error'
        })
    }
}
read()

function deleteSong(id) {
    console.log(id)
    try {
        SongsServise.delete(id)
            .then((res) => {
                console.log(res);
                Swal.fire({
                    title: res.data.message,
                    icon: 'success'
                });
                read();
            }).catch((err)=>{
                throw err
            })
    } catch (err) {
        Swal.fire({
            title: err,
            icon: 'error'
        })
    }
}

</script>

<template>
    <div v-if="loading" class="mt-4 m-5">
        <div>
            <input type="text" class="rounded-md">
        </div>
        <div class="flex justify-between items-center my-6 p-2 bg-indigo-600 text-white rounded-md">
            <i class="text-2xl fa-solid fa-headphones"></i>
            <router-link to="/song/create" class="bg-white text-indigo-600 p-2 rounded-sm ">Song Create</router-link>
        </div>
        <ul v-if="hasDataExsit" class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <li v-for="song in newSongs" :key="song" :style="[`backgroundImage: url(${song.ablumImageUrl})`]"
                class="bg-cover relative bg-indigo-300 bg-blend-multiply rounded-lg">
                <div class="text-white p-4">
                    <div class="text-sm leading-8">
                        <p> Title: {{ song.title }} </p>
                        <p> Artist: {{ song.artist }}</p>
                        <p> Genre: {{ song.genre}}</p>
                        <p> Album: {{ song.album}}</p>
                    </div>
                    <div class="flex justify-between mt-6">
                        <router-link class="px-5 py-1 text-sm capitalize bg-gray-900 rounded"
                            :to=" `/song/${song._id}` ">View</router-link>
                        <button @click="deleteSong(song._id)"
                            class="px-5 py-1 text-sm capitalize bg-red-600 rounded">delete</button>
                        <router-link class="px-5 py-1 text-sm capitalize bg-gray-900 rounded"
                            :to=" `/song/${song._id}/edit` ">edit</router-link>
                    </div>
                </div>
            </li>
        </ul>
        <div v-else class="text-center">
            No exist Songs
        </div>
    </div>
    <div v-else>
        <LoaderVeiw></LoaderVeiw>
    </div>

    <!-- <ul class="grid grid-cols-4">
        <li v-for="item in newSongsRadioJavan" :key="item">
            <img :src="item.thumbnail" alt="">
        </li>
    </ul> -->

</template>

<style scope>

</style>