<template>
    <div>
        <b-avatar size="4em" class="mb-4"></b-avatar>
        <h1>Hello {{ username }}!</h1>
        <hr class="mt-5" />
        <b-container>
            <b-row class="mt-5">
                <b-col>
                    <h3>Username:</h3>
                </b-col>
                <b-col>
                    <p>{{ username }}</p>
                </b-col>
                <b-col>
                    <b-button v-b-modal.username-modal
                        >Edit<b-icon class="ml-2" icon="pencil"></b-icon
                    ></b-button>
                    <b-modal
                        id="username-modal"
                        title="Change username"
                        @ok="handleOkUsername"
                    >
                        <form ref="form">
                            <b-form-group
                                label="Username"
                                label-for="username-input"
                            >
                                <b-form-input
                                    id="username-input"
                                    v-model="username"
                                ></b-form-input>
                            </b-form-group>
                        </form>
                    </b-modal>
                </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col>
                    <h3>Password:</h3>
                </b-col>
                <b-col>
                    <p>&bull;&bull;&bull;&bull;&bull;&bull;</p>
                </b-col>
                <b-col>
                    <b-button v-b-modal.password-modal
                        >Edit<b-icon class="ml-2" icon="pencil"></b-icon
                    ></b-button>
                    <b-modal
                        id="password-modal"
                        title="Change password"
                        @ok="handleOkPassword"
                    >
                        <form ref="form">
                            <b-form-group
                                label="Password"
                                label-for="password-input"
                            >
                                <b-form-input
                                    type="password"
                                    id="password-input"
                                    v-model="password"
                                ></b-form-input>
                            </b-form-group>
                        </form>
                    </b-modal>
                </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col>
                    <h3>Email:</h3>
                </b-col>
                <b-col>{{email}}</b-col>
                <b-col>
                    <b-button v-b-modal.email-modal
                        >Edit<b-icon class="ml-2" icon="pencil"></b-icon
                    ></b-button>
                    <b-modal
                        id="email-modal"
                        title="Change email"
                        @ok="handleOkEmail"
                    >
                        <form ref="form">
                            <b-form-group
                                label="Email"
                                label-for="email-input"
                            >
                                <b-form-input
                                    type="email"
                                    id="email-input"
                                    v-model="email"
                                ></b-form-input>
                            </b-form-group>
                        </form>
                    </b-modal>
                </b-col>
            </b-row>
            <hr class="mt-5" />
        </b-container>
        <b-button class="mt-5" variant="danger" @click="logout"
            >Log out</b-button
        >
        <b-modal id="confirm-username">
            <p class="my-4">Username changed!</p>
        </b-modal>
        <b-modal id="confirm-password">
            <p class="my-4">Password changed!</p>
        </b-modal>
        <b-modal id="confirm-email">
            <p class="my-4">Email changed!</p>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'User',

        data() {
            return {
                username: localStorage.getItem('username'),
                password: localStorage.getItem('password'),
                email: localStorage.getItem('email')
            }
        },

        methods: {
            logout() {
                localStorage.setItem('username', '')
                localStorage.setItem('password', '')
                localStorage.setItem('email', '')
                this.$router.push('/login')

                //TODO make avatar text first initial
            },
            handleOkUsername() {
                console.log('submit')
                console.log(this.username)
                localStorage.setItem('username', this.username)
                this.$bvModal.show('confirm-username')
            },
            handleOkPassword() {
                console.log(this.password)
                localStorage.setItem('password', this.password)
                this.$bvModal.show('confirm-password')
            },
            handleOkEmail() {
                localStorage.setItem('email', this.email)
                this.$bvModal.show('confirm-email')
            }
        }
    }
</script>
