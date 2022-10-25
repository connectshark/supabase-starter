import { ref } from 'vue'
import supabase from '../supabase'


const useGallery = () => {
  const loading = ref(false)
  const list = ref([])
  const err = ref(null)

  const doFetch = () => {
    loading.value = true
    list.value = []
    err.value = null
    supabase
      .from('gallery')
      .select('*')
      .eq('active', true)
      .then(({ data, error }) => {
        loading.value = false
        list.value = data
        err.value = error
      })
  }
  
  doFetch()

  return {
    loading,
    list,
    err,
    reload: doFetch
  }
}

export {
  useGallery
}