<template>
  <div class="container">
    <input
      type="text"
      placeholder="something"
      class="inputColor"
      v-model="text"
    />
    <!-- Bind the `disabled` prop to the `disabled` attribute -->
    <button :disabled="isDisabled" class="btnColor" @click="handleClear">
      Clear
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Text input state
const text = ref<string>("");

const handleClear = async () => {
  text.value = "";
};
const isDisabled = computed(() => !text.value);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 10px;
  width: 200px;
  margin-top: 5px;
}

.btnColor {
  padding: 5px;
  background-color: green;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.inputColor {
  padding: 10px;
  border-radius: 5px;
}

/* Style for the disabled button */
.btnColor:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
