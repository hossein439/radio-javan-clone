<script setup>
import { ref } from 'vue'

const width = ref('30px');
const height = ref('30px');
const border = ref('3px');
const borderColor = ref('#f3f3f3');
const borderTopColor = ref('#3498db');

</script>

<template>
    <div class="loader"></div>
</template>

<style scoped>
.loader {
    margin: 2em auto;
    border: v-bind(border) solid v-bind(borderColor);
    border-radius: 50%;
    border-top: v-bind(border) solid v-bind(borderTopColor);
    width: v-bind(width);
    height: v-bind(height);
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>