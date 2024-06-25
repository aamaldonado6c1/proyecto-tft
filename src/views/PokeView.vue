<script setup>
import axios from "axios";
import {useRoute, useRouter} from 'vue-router'
import {ref} from "vue";
import {useGetData} from "@/composable/getData.js";

const {data,getData,loading,error} = useGetData()
const route = useRoute();
const router = useRouter();
const poke = ref([]);
const back = () => {
  router.push('/pokemon')
}
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <p v-if="loading">Cargando...</p>
  <p class="alert alert-danger" v-if="error">{{error}}</p>
  <div v-if="data">
    <img :src="data.sprites?.front_default">
    <h1>Poke name:{{ $route.params.name }}</h1>
    <button @click="back">back</button>
  </div>
  <div v-else>
    <h1>No existe el poke</h1>
    <button @click="back">back</button>
  </div>

</template>

<style scoped>

</style>