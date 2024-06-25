<script setup>
import axios from "axios";
import {ref} from "vue";
import {useGetData} from "@/composable/getData.js";

const pokemon = ref([]);
const {data,getData,loading} = useGetData()
getData('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
  <h1>Pokemons</h1>
  <p v-if="loading">Cargando...</p>
  <div v-if="data">
    <ul>
      <li v-for="poke in data.results" :key="poke.name">
        <router-link :to="`/poke/${poke.name}`">
          {{ poke.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>