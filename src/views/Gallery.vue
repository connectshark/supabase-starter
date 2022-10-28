<template>
  <ul class="grid gap-2 w-72 mx-auto">
    <div class="text-center text-primary" v-if="loading">
      <i class='bx bx-loader-alt bx-spin bx-lg' ></i>
    </div>
    <FigureWrapper
      v-else
      v-for="figure in list"
      :key="figure.id"
      :img_url="figure.img_url"
      :created_at="figure.created_at"
      :description="figure.description"
      :id="figure.id"
      :deleteImg="deleteImg"
    />
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import imgur from 'imgur'
import supabase from '../supabase'
import FigureWrapper from '../components/FigureWrapper.vue'
import { useGallery } from '../composable/useGallery'
import { useUserStore } from '../stores/user'

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