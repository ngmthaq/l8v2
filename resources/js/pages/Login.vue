<template>
  <guest-layout>
    <div class="container">
      <div class="row">
        <div class="col-4 mx-auto">
          <div class="login-container">
            <form autocomplete="off" class="mb-5" @submit.prevent="login">
              <div class="form-group mb-2">
                <h4 class="text-center my-4"> {{ $t('Welcome back!') }} </h4>
                <div class="login-logo my-5">
                  <img src="\image\logo_png_removebg.png" alt="Task Tracking Logo">
                </div>
              </div>
              <div class="form-group mb-3">
                <input type="text" class="form-control" :placeholder="$t('Enter your email or username')" v-model="credentials.username">
              </div>
              <div class="form-group mb-4">
                <input type="password" class="form-control" :placeholder="$t('What is your password?')" v-model="credentials.password">
              </div>
              <div class="form-group mb-5">
                <button type="submit" class="btn btn-primary w-100"> {{ $t('Login') }} </button>
              </div>
            </form>
            <p>
              {{ $t('Forgot your password?') }} {{ $t('Click') }}
              <router-link to="/">{{ $t('here') }}</router-link>
              {{ $t('to reset it.') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </guest-layout>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      console.log('login');
    }
  },
}
</script>

<style>

</style>
