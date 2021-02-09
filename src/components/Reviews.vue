<template>
    <div class="categoryDeck">
        <b-card-group deck>
            <b-card class="reviewCard">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image" fluid></b-img>
                <b-card-text>
                Some review text to show how the company is.
                </b-card-text>

                <b-card-text>Name or something of the customer.</b-card-text>
                </b-card>

            <b-card class="reviewCard">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image" fluid></b-img>
                <b-card-text>
                Some review text to show how the company is.
                </b-card-text>

                <b-card-text>Name or something of the customer.</b-card-text>
            </b-card>
        
            <b-card class="reviewCard">
                <b-img v-bind="mainProps" rounded="circle" alt="Circle image" fluid></b-img>
                <b-card-text>
                Some review text to show how the company is.
                </b-card-text>

                <b-card-text>Name or something of the customer.</b-card-text>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
export default {
    data() {
      return {
        mainProps: { blank: true, blankColor: '#777', width: 150, height: 150, class: 'm1' }
      }
    },
     name: 'Reviews'
}
</script>

<style scoped>
.categoryDeck{
padding: 0px 100px
}
p.card-text{
    padding: 15px;
}
</style>