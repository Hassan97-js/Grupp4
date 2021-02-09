<template>
    <div>
        <h1>Hej {{ name }}!</h1>
        <b-button @click="logout">Logout</b-button>
        
    </div>
    
</template>

<script>

export default {
    name: "User",

    data () {
        return {
            name: localStorage.getItem("username")
        }
    },

    methods: {
        logout () {
            localStorage.setItem("username","")
            localStorage.setItem("password","")
            this.$router.push("/login")

        }
    }
    
}
</script>