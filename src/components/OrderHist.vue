<template>
    <div>
        <b-container>
            <h1 v-if="currentUser">
                {{ currentUser.username }}'s order history
            </h1>
            <p v-if="orderHistory.length === 0">
                You haven't made any orders yet.
            </p>

            <b-row v-for="orderItem in orderHistory" :key="orderItem.id">
                <b-col class="text-left"> Order id: {{ orderItem.id }} </b-col>

                <div
                    class="product-list text-left"
                    v-for="item in orderItem.order"
                    :key="item.id"
                >
                    <b-col>
                        <b-list-group>
                            <b-list-group-item>
                                <b-img
                                    :src="require('../assets/' + item.img)"
                                    class="images"
                                    style="height: 40px"
                                ></b-img>
                                <p>
                                    {{ item.productType }} ({{
                                        item.productTarget
                                    }}) x {{item.counter}} 
                                </p>
                                <p>{{ item.counter * item.price }}:-</p>
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <hr />
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'OrderHist',

        created() {},
        data() {
            return {
                orderHistory: this.currentUser.orders
            }
        },

        props: {
            currentUser: {
                type: Object
            }
        }
    }
</script>
