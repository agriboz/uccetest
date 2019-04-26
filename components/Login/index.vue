<template>
  <div class="account-pages mt-5 mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card">
            <!-- Logo -->
            <div
              v-if="company.logo"
              class="card-header pt-4 pb-4 text-center bg-primary"
            >
              <img
                class="img-fluid"
                :src="company.logo"
                :alt="company.name"
                :title="company.name"
              />
            </div>

            <div class="card-body p-4">
              <div class="text-center w-75 m-auto">
                <h4 class="text-dark-50 text-center mt-0 mb-4 font-weight-bold">
                  Quartz Analytics
                </h4>
              </div>

              <form form @submit.prevent="handleSubmit">
                <div v-if="alert.message" :class="`alert ${alert.type}`">
                  {{ alert.message }}
                </div>
                <div class="form-group">
                  <label for="emailaddress">Username</label>
                  <input
                    v-model="user.username"
                    v-validate="'required'"
                    name="username"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && errors.has('username')
                    }"
                    type="text"
                    placeholder="Enter your username"
                  />
                  <div
                    v-if="submitted && errors.has('username')"
                    class="invalid-feedback"
                  >
                    {{ errors.first('username') }}
                  </div>
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    v-model="user.password"
                    v-validate="{ required: true, min: 3 }"
                    class="form-control"
                    name="password"
                    :class="{
                      'is-invalid': submitted && errors.has('password')
                    }"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <div
                    v-if="submitted && errors.has('password')"
                    class="invalid-feedback"
                  >
                    {{ errors.first('password') }}
                  </div>
                </div>

                <div class="form-group mb-0 text-center">
                  <button class="btn btn-primary" type="submit">
                    Log In
                  </button>
                </div>
              </form>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->

          <!-- end row -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
    <div class="comstice-logo" :class="{ dark: isDark }">
      <a href="http://comstice.com">
        <span :style="{ color: setTextColor.loginTextColor }">Powered By</span>
        <img :src="logo" class="ml-1" alt="Comstice" height="30px" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    company: {
      logo: process.env.companyLogo,
      name: process.env.name,
      loginColor: process.env.loginBgColor
    },
    submitted: false,
    user: {
      username: '',
      password: ''
    }
  }),

  computed: {
    ...mapState({
      alert: state => state.alert
    }),
    setTextColor() {
      return {
        loginTextColor: process.env.loginTextColor
      }
    },
    isDark() {
      return process.env.bgDark
    },
    logo() {
      return require(`@/assets/images/comstice-logo-${
        this.isDark ? 'light' : 'dark'
      }.png`)
    }
  },

  watch: {
    $route() {
      this.clearAlert()
    }
  },

  methods: {
    ...mapActions({
      login: 'login',
      clearAlert: 'alert/clear'
    }),

    handleSubmit() {
      this.submitted = true
      this.$validator.validate().then(valid => {
        if (valid) {
          this.login(this.user)
        }
      })
    }
  }
}
</script>

<style scoped>
.comstice-logo {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

.comstice-logo.dark span {
  color: #eeeeee;
}
</style>
