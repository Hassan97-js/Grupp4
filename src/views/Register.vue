<template>
  <div class="card w-50 mx-auto">
    <b-card>
      <b-card-body>
        <b-form>
          <p class="h4 text-center ">Register</p>
          <b-form-group id="input-group-1" label="Email:" label-for="input-1">
            <b-form-input
              id="input-1"
              placeholder="Enter email"
              required
              v-model="email"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label="Username:" label-for="input-1">
            <b-form-input
              id="input-1"
              placeholder="Enter username"
              required
              v-model="username"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-form-input id="input-2" type="password" placeholder="Enter password" v-model="password"></b-form-input>
          </b-form-group>
          <div class="text-center">
              <b-button variant="info" type="submit">Register</b-button>
              <span class="mx-2">or</span>
              <b-button to="/login">Sign in</b-button>
          </div>
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
    name: "Register",

    data () {
        return {
            email: "",
            username: "",
            password: ""
        }
    },

    methods: {
      //if username = localStorage.username then "you already have an account. Please sign in"
    }
}
</script>
