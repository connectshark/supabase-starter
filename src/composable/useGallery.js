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
      .eq('isActive', true)
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

const useIDGallery = ({ id }) => {
  const loading = ref(false)
  const list = ref([])
  const err = ref(null)

  const doFetch = () => {
    loading.value = true
    err.value = null
    supabase
      .from('gallery')
      .select('*')
      .eq('owner_id', id)
      .eq('isActive', true)
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
  useGallery,
  useIDGallery
}