<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
const Button = ref({
  text: "Button",
  color: "primary" as ColorType,
  show: false,
  disabled: false,
  class: "class ",
  clicked: () => {},
});
</script>
