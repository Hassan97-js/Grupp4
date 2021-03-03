<template>
    <div>
        <b-container>
            <h1 class="text-capitalize" v-if="currentUser">
                {{ currentUser.username }}'s order history
            </h1>
            <p v-if="orderHistory.length === 0">
                You haven't made any orders yet.
            </p>

            <b-row v-for="orderItem in orderHistory" :key="orderItem.id">
                <div class="mx-auto mt-3">
                    <b-col
                        cols="12"
                        class="product-list text-left "
                        v-for="item in orderItem.order"
                        :key="item.id"
                    >
                        <b-list-group>
                            <b-list-group-item class="my-1">
                                <b-img
                                    :src="require('../assets/' + item.img)"
                                    class="images"
                                    style="height: 40px"
                                ></b-img>

                                <span class="text-capitalize">
                                    {{ item.productType }}
                                    <span class="font-weight-bold">{{
                                        item.size
                                    }}</span>
                                    ({{ item.productTarget }}) x
                                    {{ item.counter }}
                                </span>
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <hr />
                </div>
                <b-col cols="12">
                    <span
                        class="bg-secondary p-2 rounded text-light font-weight-bold"
                    >
                        Basket total: {{ orderItem.price }}:-</span
                    >
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'OrderHist',

        created() {
            console.log(this.orderHistory)
            for (const order of this.orderHistory) {
                for (const OrderItem of order.order) {
                    OrderItem.id = this.$uuid.v1()
                }
            }
        },
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
