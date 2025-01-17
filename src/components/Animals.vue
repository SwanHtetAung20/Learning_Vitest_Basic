<template>
  <button @click="getAnimalsData">Get Animal Datas</button>

  <div v-for="(v, i) in animals" :key="i">
    <h2>{{ v.name }}</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
const animals = ref([]);

const getAnimalsData = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  const res = await data.json();
  console.log(res);
  animals.value = res.results;
};
</script>
