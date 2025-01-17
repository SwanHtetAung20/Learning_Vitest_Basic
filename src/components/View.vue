<template>
  <component :is="element" :aria-label="ariaLabel" :disabled="disabled">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  element: string;
  ariaLabel: string;
  disabled: boolean;
}>();
</script>
