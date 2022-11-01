import { onBeforeMount, ref } from 'vue'
import { useUserStore } from '../stores/user'
import supabase from '../supabase'

const useLogin = () => {
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

const useSignUp = () => {
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

const useFBLogin = () => {
  const path = import.meta.env.VITE_CALLBACK_URL + '/callback/'

  const doFetch = () => {
    supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: {
        redirectTo: path
      }
    })
  }

  return {
    loginFB: doFetch
  }
}

const useForgotPsd = () => {
  const loading = ref(false)
  const success = ref(false)
  const error = ref(null)
  const path = import.meta.env.VITE_CALLBACK_URL + '/reset/'
  const doFetch = email => {
    loading.value = true
    success.value = false
    supabase.auth.resetPasswordForEmail(email, {
      redirectTo: path
    }).then(res => {
      loading.value = false
      success.value = true
      error.value = res.error
    })
  }
  
  return {
    forgotPsd: doFetch,
    loading,
    success,
    error
  }
}

const useUpdateUser = () => {
  const loading = ref(false)
  const success = ref(false)
  const doFetch = ({ password, email }) => {
    loading.value = true
    success.value = false
    supabase.auth.updateUser({
      email: email,
      password: password
    }).then(res => {
      loading.value = false
      if (res.error) {
        success.value = false
      } else {
        success.value = true
      }
    })
  }
  return {
    updateUser: doFetch,
    loading,
    success
  }
}

const useGetUser = () => {
  const user = ref({})
  const loading = ref(false)
  const store = useUserStore()

  const doFetch = () => {
    loading.value = true
    supabase.auth.getUser()
      .then(res => {
        user.value = res.data.user
        store.id = res.data.user.id
        store.email = res.data.user.email
        loading.value = false
      })
  }

  onBeforeMount(doFetch)
  return {
    user,
    reload: doFetch,
    loading
  }
}

export {
  useFBLogin,
  useLogin,
  useSignUp,
  useForgotPsd,
  useUpdateUser,
  useGetUser
}