<template>
  <ul class="grid grid-cols-2 gap-2 p-4 max-w-md mx-auto" v-auto-animate>
    <div class="text-center col-span-2 text-primary" v-if="loading">
      <i class='bx bx-loader-alt bx-spin bx-lg' ></i>
    </div>
    <FigureWrapper
      v-else
      v-for="figure in list"
      :key="figure.id"
      :img_url="figure.img_url"
      :created_at="figure.created_at"
    />
  </ul>
</template>

<script setup>
import FigureWrapper from '../components/FigureWrapper.vue'
import { useGallery } from '../composable/useGallery'

const { loading, list, reload } = useGallery()
</script>