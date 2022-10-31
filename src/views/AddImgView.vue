<template>
  <div class="max-w-lg mx-auto p-10">
    <h2 class=" text-xl leading-loose">已上傳圖片區</h2>
    <ul class="border-b border-stone-600 pb-5 mb-5 grid grid-cols-2 gap-4" v-auto-animate>
      <li v-for="img in list" :key="img.id" class="shadow-md rounded-br-3xl">
        <figure class="pt-[100%] relative">
          <img class="w-full object-contain absolute top-0 left-0 h-full" :src="img.img_url" alt="">
        </figure>
        <div class="p-4">
          <button @click="removeImg(img.id)" class="font-bold hover:opacity-80 text-white bg-primary leading-loose rounded-xl w-10"
            type="button">刪除</button>
        </div>
      </li>
    </ul>
    <label class="block bg-stone-300 py-10 mb-10 rounded cursor-pointer hover:opacity-80">
      <div class=" text-center text-lg">上傳圖片</div>
      <input type="file" class="hidden" accept=".jpg, .jpeg, .png" multiple @input.prevent="readPreviewImg">
    </label>
    <ul class="grid grid-cols-2 gap-4" v-auto-animate>
      <li class="shadow-md rounded-br-3xl" v-for="(img, index) in upload_img">
        <figure class="pt-[100%] relative">
          <img class="w-full object-contain absolute top-0 left-0 h-full" :src="img" alt="">
        </figure>
        <div class="p-4">
          <button @click="removePreview(index)"
            class="font-bold hover:opacity-80 text-white bg-primary leading-loose rounded-xl w-10"
            type="button">取消</button>
        </div>
      </li>
    </ul>
    <div class="p-8 text-right" v-if="upload_img.length > 0">
      <button @click="uploadImg" class="text-md font-bold hover:opacity-80 text-white bg-primary py-4 w-24 rounded-full"
        type="button">上傳圖片</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIDGallery } from '../composable/useGallery'
import { useUserStore } from '../stores/user'
import imgur from 'imgur'
import supabase from '../supabase'


const store = useUserStore()

const { loading, list, reload } = useIDGallery({ id: store.id })

const client = new imgur({ clientId: '3466d7179394743' })
const uploadImg = async () => {
  const insertData = []
  for (let i = 0; i < upload_img.value.length; i++) {
    const img = upload_img.value[i]
    const base64 = img.slice(22)
    const { data: { link } } = await client.upload({
      type: 'base64',
      image: base64
    })
    insertData.push({
      img_url: link,
      owner_id: store.id
    })
  }
  const { data, error } = await supabase
    .from('gallery')
    .insert(insertData)
  upload_img.value = []
  reload()
}

const removeImg = async imgId => {
  await supabase
    .from('gallery')
    .update({ isActive: false })
    .eq('id', imgId)
  reload()
}

const removePreview = index => {
  upload_img.value.splice(index, 1)
}

const upload_img = ref([])

const readPreviewImg = async event => {
  const files = event.target.files
  Object.values(files).forEach(file => {
    const reader = new FileReader()
    reader.addEventListener('load', evt => {
      upload_img.value.push(evt.target.result)
    })
    reader.readAsDataURL(file)
  })
}

</script>