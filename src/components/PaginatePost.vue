<script setup>
defineProps(["inicio","fin","maxLength"])
 const emit = defineEmits(['next','prev'])
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
        :disabled = "inicio <= 0"
        type="button" @click="emit('prev')" class="btn btn-secondary">revius{{inicio}}</button>
    <button
        :disabled ="fin >= maxLength"
        type="button" @click="emit('next')" class="btn btn-secondary">NEXT{{fin}}</button>
  </div>
</template>

<style scoped>

</style>