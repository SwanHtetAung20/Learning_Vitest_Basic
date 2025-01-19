<template>
  <div>
    <h1>Hello World.!</h1>
    <button @click="handleClick">Click</button>
    <View element="div">This is View Component.!</View>
    <br />
    <Animals />
    <CustomInput />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import View from "./components/View.vue";
import Animals from "./components/Animals.vue";
import CustomInput from "./components/CustomInput.vue";
const handleClick = () => {
  window.alert("hello click mal");
};
</script>
