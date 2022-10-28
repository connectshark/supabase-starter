<script setup>
import { reactive, ref } from 'vue'
import { useProfile } from '../composable/useProfile'
import { useUserStore } from '../stores/user'
import supabase from '../supabase'

const store = useUserStore()

const { loading, result, reload } = useProfile({ id: store.id })

const formData = reactive({
  username: ''
})

const updateLoading = ref(false)

const updateProfile = async () => {
  updateLoading.value = true
  const { error } = await supabase
    .from('profiles')
    .update({ username: formData.username })
    .eq('id', store.id)
  formData.username = ''
  reload()
  updateLoading.value = false
}
</script>

<template>
  <h2 class=" bg-primary py-10 text-white text-center font-bold text-3xl mb-8 leading-loose">個人資訊</h2>
  <div class="max-w-lg mx-auto w-5/6">
    <form @submit.prevent="updateProfile">
      <ul class=" mb-10">
        <li>
          <label class="block text-lg" for="username">使用者名稱</label>
          <input minlength="1" maxlength="10" required :disabled="updateLoading" class="focus:ring-2 disabled:text-stone-400 block w-full text-xl text-stone-700 border-none py-6 px-10 rounded-full ring-primary bg-gray-100" type="text" id="username" v-model="formData.username" :placeholder="result?.username ? result.username : '(null)'">
        </li>
      </ul>
      <div class="text-right">
        <button class="text-md font-bold hover:opacity-80 text-white bg-primary py-4 w-24 rounded-full" type="submit">
          <span v-if="!updateLoading">修改</span>
          <span v-else><i class='bx bx-loader-alt bx-spin' ></i></span>
        </button>
      </div>
    </form>
  </div>
</template>
