<template>
    <div>
        <b-card class="register mx-auto">
            <b-card-body>
                <b-form @submit="onSubmit">
                    <p class="h4 text-center ">Register</p>
                    <b-form-group
                        id="input-group-1"
                        label="Email:"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            placeholder="Enter email"
                            required
                            v-model="email"
                        ></b-form-input>
                    </b-form-group>
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
                        <b-button variant="success" type="submit"
                            >Register</b-button
                        >
                        <span class="mx-2">or</span>
                        <b-button variant="light" to="/login">Sign in</b-button>
                    </div>
                </b-form>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Register',

        data() {
            return {
                email: '',
                username: '',
                password: ''
            }
        },

        methods: {
            onSubmit(e) {
                e.preventDefault()
                this.login()
            },

            login() {
                localStorage.setItem('username', this.username)
                localStorage.setItem('password', this.password)
                localStorage.setItem('email', this.email)
                this.$store.commit('addUser', {id: this.$store.state.users.length +1, username: this.username, password: this.password, email: this.email})
                this.$router.push('/user')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/variables';
    @import '~bootstrap/scss/mixins';

    @include media-breakpoint-up(sm) {
        .register {
            width: 480px;
        }
    }
</style>
