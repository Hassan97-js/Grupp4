<template>
  <div class="card w-50 mx-auto">
    <b-card>
      <b-card-body>
        <b-form @submit="onSubmit">
          <p class="h4 text-center">Sign in</p>
          <b-form-group
            id="input-group-1"
            label="Username:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              placeholder="Enter username"
              required
              v-model="username"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              type="password"
              placeholder="Enter password"
              v-model="password"
            ></b-form-input>
          </b-form-group>
          <div class="text-center">
            <b-button variant="info" type="submit">Sign in</b-button>
            <span class="mx-2">or</span>
            <b-button to="/register">Register</b-button>
          </div>
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      username: "",
      password: ""
    };
  },

  mounted() {
    if (
      localStorage.getItem("username") != "" &&
      localStorage.getItem("password") != ""
    ) {
      this.$router.push("/user");
    }
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.login();
    },
    login() {
      console.log(this.username);
      localStorage.setItem("username", this.username);
      localStorage.setItem("password", this.password);
      this.$router.push("/user");
    }
  }
};
</script>

<style lang="scss" scoped></style>
