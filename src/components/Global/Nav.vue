<template>
    <nav id="nav">
        <div class="logo">
            <router-link to="/">
                <img
                    class="logoImg"
                    src="../../assets/double-line-logo.png"
                    alt="Bootstrap logo"
                />
            </router-link>
        </div>
        <div class="navLinks d-md-flex flex-column flex-lg-row">
            <router-link class="link-item mt-sm-2 mt-lg-0" to="/barn"
                >Kids</router-link
            >
            <router-link class="link-item mt-sm-2 mt-lg-0" to="/dam"
                >Women</router-link
            >
            <router-link class="link-item mt-sm-2 mt-lg-0" to="/herr"
                >Men</router-link
            >
            <router-link class="link-item mt-sm-2 mt-lg-0" to="/about"
                >About</router-link
            >
        </div>
        <div
            class="userMenu d-flex align-items-start align-items-md-start align-items-lg-center"
        >
            <router-link class="link-item flex-link-item mx-2" to="/login">
                <b-icon class="" icon="person-circle" variant="info"></b-icon>
                Account
            </router-link>
            <a v-b-toggle.sidebar-right class="link-item mx-2 flex-link-item">
                <b-icon class="icon" icon="cart3" variant="info"></b-icon>
                Cart
            </a>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>

<style scoped lang="scss">
    nav#nav {
        display: flex;
        padding: 30px;
        div.logo {
            display: flex;
            justify-self: start;
            width: 175px;
            .logoImg {
                width: 70%;
            }
        }
        div.navLinks {
            display: flex;
            margin: 0 auto;
            align-items: center;
            font-weight: bold;
            a.link-item {
                margin: 0 1rem;
            }
        }
        a.link-item {
            color: black;
            cursor: pointer;
            text-decoration: none;
        }
        a.router-link-exact-active {
            color: #42b983;
        }
        .icon {
            cursor: pointer;
        }
    }
    @media (min-width: 375px) and (max-width: 768px) {
        nav#nav {
            div.navLinks {
                margin: 1rem auto;
                a.link-item {
                    font-size: 0.9rem;
                    margin: 0 0.5rem;
                }
            }
            padding: 15px;
            flex-direction: column;
            div.logo {
                justify-self: center;
                width: 100%;
                margin: 1rem 0;
                a {
                    margin: 0 auto 0.8rem auto;
                    .logoImg {
                        width: 35%;
                    }
                }
            }
            .userMenu {
                margin: 1rem 0;
                justify-content: center;
            }
        }
    }

    @media (min-width: 769px) and (max-width: 963px) {
        nav#nav {
            .navLinks {
                a.link-item {
                    font-size: 0.9rem;
                    margin: 0 0.5rem;
                }
            }
            a.flex-link-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 0.9rem;
            }
        }
    }
</style>
