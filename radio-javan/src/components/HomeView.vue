<script setup>
import { ref } from 'vue';
import axios from 'axios';



const token = '270225:62aca214f3aaf2.81298829';
const data = ref(undefined);
    
async function fetchData() {
    await axios.get(`https://one-api.ir/corona/?token=${token}`)
    .then((res)=>{
        console.log(res);
        data.value = res.data;
    
    }).catch((err)=>{
        console.log(err);
    });
}

fetchData();

console.log(data.value)

</script>

<template>

    <section>


        <div class="text-black">home</div>
    </section>

</template>