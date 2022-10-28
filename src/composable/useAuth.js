import { ref } from 'vue'
import supabase from '../supabase'

export const useLogin = () => {
  const error = ref(false)
  const loading = ref(false)
  const success = ref(null)

  const doLogin = ({ email, password }) => {
    loading.value = true
    error.value = false
    success.value = null
    supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    .then(res => {
      loading.value = false
      if (res.data.user) {
        success.value = res.data.user
      } else {
        error.value = true
      }
    })
    .catch(err => {
      loading.value = false
      error.value = true
    })
  }
  return {
    loading,
    error,
    login: doLogin,
    success
  }
}

export const useSignUp = () => {
  const error = ref(false)
  const loading = ref(false)
  const success = ref(null)
  const doSignUp = ({ email, password }) => {
    loading.value = true
    error.value = false
    success.value = null
    supabase.auth.signUp({
      email: email,
      password: password
    })
    .then(res => {
      loading.value = false
      if (res.data.user) {
        success.value = res.data.user
      } else {
        error.value = true
      }
    })
    .catch(err => {
      loading.value = false
      error.value = true
    })
  }
  return {
    loading,
    error,
    signup: doSignUp,
    success
  }
}
