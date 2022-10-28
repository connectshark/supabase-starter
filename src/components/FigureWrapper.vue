<template>
  <li>
    <figure class="mb-4 rounded-xl overflow-hidden shadow-lg">
      <img class="block w-full h-80 object-contain" :src="props.img_url" loading="lazy">
    </figure>
    <figcaption>{{ props.description ? props.description : '無描述' }}</figcaption>
    <p>上傳日期: {{ formatted }}</p>
    <p>
      <button class=" bg-stone-700 text-white p-3 rounded-lg" @click="deleteImg(props.id)">刪除照片</button>
    </p>
  </li>
</template>

<script setup>
import { useDateFormat } from '@vueuse/core'

const props = defineProps({
  img_url: String,
  created_at: String,
  description: String,
  id: Number,
  deleteImg: Function
})

const formatted = useDateFormat(props.created_at, 'MM/DD')

</script>