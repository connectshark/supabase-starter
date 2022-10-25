<template>
  <ul class=" grid grid-cols-2 gap-2">
    <div class=" col-span-2">
      <figure v-if="upload_img">
        <img :src="upload_img" alt="">
      </figure>
      <p class="mb-2">
        <input @change="readImg" id="upload" required class=" hidden" type="file" accept=".png, .jpg, .jpeg">
        <label for="upload" class="block hover:bg-slate-100 cursor-pointer text-center bg-slate-50 py-10">上傳一張圖</label>
      </p>
      <p class=" text-right">
        <button class=" bg-stone-700 text-white p-3 rounded-lg mr-3" type="reset">取消</button>
        <button class=" bg-stone-700 text-white p-3 rounded-lg" @click="uploadImg">送出</button>
      </p>
    </div>
    <li v-for="photo in list" :key="photo.id">
      <p>照片編號: {{ photo.id }}</p>
      <figure>
        <img :src="photo.img_url">
      </figure>
      <p>上傳日期{{ useDateFormat(photo.created_at, 'MM/DD') }}</p>
      <p>更改日期{{ useDateFormat(photo.updated_at, 'MM/DD') }}</p>
      <p>{{ photo.description ? photo.description : '無描述' }}</p>
      <p>
        <button class=" bg-stone-700 text-white p-3 rounded-lg" @click="deleteImg(photo.id)">刪除照片</button>
      </p>
    </li>
  </ul>
</template>

<script setup>
import { useGallery } from '../composable/useGallery'
import { useDateFormat } from '@vueuse/core'
import { ref } from 'vue'
import imgur from 'imgur'
import supabase from '../supabase';
import { useUserStore } from '../stores/user';

const client = new imgur({ clientId: '3466d7179394743' })

const store = useUserStore()


const upload_img = ref('')

const { loading, list, reload } = useGallery()
const readImg = event => {
  const fileData = event.target.files[0]
  const reader = new FileReader()
  reader.addEventListener('load', evt => {
    upload_img.value = evt.target.result
  })
  reader.readAsDataURL(fileData)
}

const uploadImg = async () => {
  const base64 = upload_img.value.slice(22)
  console.log(base64)
  const { data: { link } } = await client.upload({
    type: 'base64',
    image: base64
  })
  const { data, error } = await supabase
    .from('gallery')
    .insert([
      {
        img_url: link,
        owner_id: store.id
      },
    ])
  reload()
}

const deleteImg = async id => {
  const { data, error } = await supabase
    .from('gallery')
    .update({ active: false })
    .eq('id', id)
  if (error) {
    console.error(error)
  }
  reload()
}
</script>