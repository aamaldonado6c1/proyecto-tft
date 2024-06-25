<script setup>
defineProps({
  title: String,
  id: Number,
  body: {
    type: String,
    default: 'Sin desc'
  }
})
const emit =defineEmits(["cambiarFavorito2"])
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        {{ id }}- {{ title }}
      </h5>
      <p class="card-text">
        {{ body }}
      </p>
      <button @click="emit('cambiarFavorito2',title)"
              class="btn btn-danger">Favorito
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>