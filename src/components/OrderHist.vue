<template>
    <div>
        <b-container>
            <h1 v-if="currentUser">{{currentUser.username}}'s order history</h1>
            

            <b-row v-for="orderItem in orderHistory" :key="orderItem.id">
                <b-col class="text-left">
                    Order id: {{ orderItem.id}}
                </b-col>
                <div class="product-list text-left" v-for="item in orderItem.order" :key="item.id" >
                <b-col >
                    <b-list-group>
                        <b-list-group-item>{{ item.productType }} ({{item.productTarget}})</b-list-group-item>
                    </b-list-group>
                </b-col>
                </div>
            </b-row>
            
            
        </b-container>
    </div>
</template>

<script>
export default {
    name: "OrderHist",

    created() {
         
            
        
    },
    data () {
        return {
            orderHistory: this.currentUser.orders,
            
            
            
        }
    },
    

    props: {
        currentUser: {
            type: Object
        }
    }
}
</script>