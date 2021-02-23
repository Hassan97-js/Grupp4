<template>
    <div>
        <b-container>
            <h1 v-if="currentUser">{{currentUser.username}}'s order history</h1>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "OrderHist",

    props: {
        currentUser: {
            type: Object
        }
    }
}
</script>