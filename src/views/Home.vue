<template>
  <div class="home">
    <ResetPassword msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ResetPassword from '@/components/ResetPassword.vue'

export default {
  name: 'Home',
  components: {
    ResetPassword
  }
}
</script>
