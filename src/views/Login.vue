<template>
    <div>
        <b-card class="sign-in mx-auto">
            <b-card-body>
                <b-form @submit="onSubmit">
                    <p class="h4 text-center ">Sign in</p>
                    <p class="text-center">Have an account? Login here!</p>
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
                            placeholder="Enter password"
                            required
                            type="password"
                            v-model="password"
                        ></b-form-input>
                    </b-form-group>
                    <div class="text-center">
                        <b-button variant="success" type="submit"
                            >Sign in</b-button
                        >
                        <span class="mx-2">or</span>
                        <b-button variant="light" to="/register"
                            >Register</b-button
                        >
                    </div>
                </b-form>
            </b-card-body>
        </b-card>
        <b-modal id="incorrect" hide-header ok-only button-size="sm" size="sm"
            >Wrong username and/or password. Please try again.</b-modal
        >
    </div>
</template>

<script>
    export default {
        name: 'Login',

        data() {
            return {
                username: '',
                password: ''
            }
        },

        mounted() {
            if (
                localStorage.getItem('username') &&
                localStorage.getItem('password')
            ) {
                this.$router.push({name: 'User'})
            }
            return this.$store.state.users
        },

        methods: {
            onSubmit(e) {
                e.preventDefault()
                this.login()
            },
            login() {
                //validation
                for (let i = 0; i < this.$store.state.users.length; i++) {
                    if (
                        this.username === this.$store.state.users[i].username &&
                        this.password === this.$store.state.users[i].password
                    ) {
                        localStorage.setItem('username', this.username)
                        localStorage.setItem('password', this.password)

                        this.$router.push('/user')
                    } else {
                        this.$bvModal.show('incorrect')
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~bootstrap/scss/functions';
    @import '~bootstrap/scss/variables';
    @import '~bootstrap/scss/mixins';

    @include media-breakpoint-up(sm) {
        .sign-in {
            width: 480px;
        }
    }
</style>
