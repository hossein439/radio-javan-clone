<script setup>
// import Swal from 'sweetalert2';

import RadioJavan from '@/services/RadioJavan';
import { ref } from 'vue';
import LoaderVeiw from '../components/LoaderVeiw.vue';

let loading = ref(false);
let newSongsRadioJavan = ref(undefined);

try {
    RadioJavan.newSongs()
    .then((res)=>{
        newSongsRadioJavan.value = res.data.result;

        console.log(newSongsRadioJavan.value)
        loading.value = true
    })
    .catch((err)=>{
        console.log(err)
    })
} catch(err){
    console.log(err);
}


</script>
    
<template>
    <div v-if="loading" class="mt-4 m-5">
        <div class="flex justify-between items-center my-6 p-2 bg-indigo-600 text-white rounded-md">
            <i class="text-2xl fa-solid fa-headphones"></i>
            <router-link to="/song/create" class="bg-white text-indigo-600 p-2 rounded-sm ">Song Create</router-link>
        </div>
        <ul v-if="true" class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <li v-for="song in newSongsRadioJavan" :key="song" :style="[`backgroundImage: url(${song.photo_240})`]"
                :class=" `bg-[${song.bg_colors[0]}]` " class="bg-cover relative bg-blend-multiply rounded-lg">
                <div class="text-white p-4">
                    <div class="text-sm leading-8">
                        <p> Title: {{ song.title }} </p>
                        <p> Artist: {{ song.artist }}</p>
                        <p> Genre: {{ song.genre}}</p>
                        <p> Album: {{ song.album}}</p>
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