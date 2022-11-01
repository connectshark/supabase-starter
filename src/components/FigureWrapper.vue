<template>
  <li class="shadow-lg rounded-br-3xl mb-10">
    <figure class="mb-4">
      <img class="block w-full h-64 object-contain" :src="props.img_url" loading="lazy">
    </figure>
    <p class=" p-4">上傳日期: {{ formatted }}</p>
  </li>
</template>

<script setup>
import { useDateFormat } from '@vueuse/core'

const props = defineProps({
  img_url: String,
  created_at: String
})

const formatted = useDateFormat(props.created_at, 'MM/DD')

</script>