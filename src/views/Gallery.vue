<template>
  <div v-bind="containerProps" class=" h-header-full">
    <ul v-bind="wrapperProps" class="p-4 max-w-md mx-auto">
      <div class="text-center col-span-2 text-primary" v-if="loading">
        <i class='bx bx-loader-alt bx-spin bx-lg' ></i>
      </div>
      <FigureWrapper
        v-else
        v-for="{ data:figure } in list"
        :key="figure.id"
        :img_url="figure.img_url"
        :created_at="figure.created_at"
      />
    </ul>
  </div>
</template>

<script setup>
import FigureWrapper from '../components/FigureWrapper.vue'
import { useGallery } from '../composable/useGallery'
import { useVirtualList } from '@vueuse/core'

const { loading, list: galleryList, reload } = useGallery()

const {  list, containerProps, wrapperProps } = useVirtualList(
  galleryList,
  {
    itemHeight: 368
  }
)
</script>