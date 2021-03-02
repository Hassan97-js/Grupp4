<template>
    <div>
        <b-avatar
            variant="primary"
            :text="firstLetter"
            size="4em"
            class="mb-4"
        ></b-avatar>
        <h1 v-if="currentUser">Hello {{ currentUser.username }}!</h1>
        <b-button class="mx-2" variant="danger" @click="logout"
            >Log out</b-button
        >
        <hr class="mt-3" />
        <b-container>
            <b-row class="mt-5">
                <b-col>
                    <h4>Username:</h4>
                </b-col>
                <b-col>
                    <p>{{ currentUser.username }}</p>
                </b-col>
                <b-col>
                    <b-button v-b-modal.username-modal size="sm" variant="light"
                        >Edit<b-icon class="ml-2" icon="pencil"></b-icon
                    ></b-button>
                    <b-modal
                        button-size="sm"
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
                    <h4>Password:</h4>
                </b-col>
                <b-col>
                    <p>&bull;&bull;&bull;&bull;&bull;&bull;</p>
                </b-col>
                <b-col>
                    <b-button v-b-modal.password-modal size="sm" variant="light"
                        >Edit<b-icon class="ml-2" icon="pencil"></b-icon
                    ></b-button>
                    <b-modal
                        button-size="sm"
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
                    <h4>Email:</h4>
                </b-col>
                <b-col>{{ email }}</b-col>
                <b-col>
                    <b-button v-b-modal.email-modal size="sm" variant="light"
                        >Edit<b-icon class="ml-2" icon="pencil"></b-icon
                    ></b-button>
                    <b-modal
                        button-size="sm"
                        id="email-modal"
                        title="Change email"
                        @ok="handleOkEmail"
                    >
                        <form ref="form">
                            <b-form-group label="Email" label-for="email-input">
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
        <order-hist :currentUser="currentUser"></order-hist>
        <hr class="mt-5" />
        <favourites :currentUser="currentUser"></favourites>

        <b-modal id="confirm-username" hide-header hide-footer size="sm">
            <p class="my-4">
                Username changed!
                <b-icon
                    icon="hand-thumbs-up"
                    animation="cylon-vertical"
                    font-scale="1.5"
                ></b-icon>
            </p>
        </b-modal>
        <b-modal id="confirm-password" hide-header hide-footer size="sm">
            <p class="my-4">
                Password changed!
                <b-icon
                    icon="hand-thumbs-up"
                    animation="cylon-vertical"
                    font-scale="1.5"
                ></b-icon>
            </p>
        </b-modal>
        <b-modal id="confirm-email" hide-header hide-footer size="sm">
            <p class="my-4">
                Email changed!
                <b-icon
                    icon="hand-thumbs-up"
                    animation="cylon-vertical"
                    font-scale="1.5"
                ></b-icon>
            </p>
        </b-modal>
    </div>
</template>

<script>
    import OrderHist from '@/components/OrderHist.vue'
    import Favourites from '@/components/Favourites.vue'

    export default {
        components: { OrderHist, Favourites },

        name: 'User',

        data() {
            return {
                currentUser: null,
                username: localStorage.getItem('username'),
                password: localStorage.getItem('password'),
                email: null
            }
        },
        created() {
            for (let i = 0; i < this.$store.state.users.length; i++) {
                if (this.username === this.$store.state.users[i].username) {
                    this.currentUser = this.$store.state.users[i]
                    this.email = this.currentUser.email
                }
            }
        },

        computed: {
            firstLetter() {
                return this.username.charAt(0)
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
                localStorage.setItem('username', this.username)
                this.$bvModal.show('confirm-username')
                setTimeout(() => this.$bvModal.hide('confirm-username'), 1500)
                this.$store.commit('editUsername', {
                    id: this.currentUser.id,
                    username: this.username
                })
            },
            handleOkPassword() {
                localStorage.setItem('password', this.password)
                this.$bvModal.show('confirm-password')
                setTimeout(() => this.$bvModal.hide('confirm-password'), 1500)
                this.$store.commit('editPassword', {
                    id: this.currentUser.id,
                    password: this.password
                })
            },
            handleOkEmail() {
                localStorage.setItem('email', this.email)
                this.$bvModal.show('confirm-email')
                setTimeout(() => this.$bvModal.hide('confirm-email'), 1500)
                this.$store.commit('editEmail', {
                    id: this.currentUser.id,
                    email: this.email
                })
            }
        }
    }
</script>
