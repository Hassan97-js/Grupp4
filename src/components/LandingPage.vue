<template>
    <div class="landingPage">
        <b-container class="categoryDeck">
            <!-- tre kategori-cards -->
            <b-row>
                <b-col class="card-container" cols="8" sm="4" md="4">
                    <b-card
                        title="Women"
                        :img-src="require('../assets/women.svg')"
                        img-alt="women-img"
                        img-top
                        class="category-card"
                    >
                        <b-link to="/Dam" class="stretched-link"></b-link>
                    </b-card>
                </b-col>
                <b-col class="card-container" cols="8" sm="4" md="4">
                    <b-card
                        title="Men"
                        :img-src="require('../assets/men.svg')"
                        img-alt="Image"
                        img-top
                        class="category-card"
                    >
                        <b-link to="/Herr" class="stretched-link"></b-link>
                    </b-card>
                </b-col>
                <b-col class="card-container" cols="8" sm="4" md="4">
                    <b-card
                        title="Kids"
                        :img-src="require('../assets/Kids.svg')"
                        img-alt="Image"
                        img-top
                        class="category-card"
                    >
                        <b-link to="/Barn" class="stretched-link"></b-link>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>

        <!-- jumbotron med rea -->
        <div class="saleJumbotron">
            <b-jumbotron
                class="jumbotron-info"
                header="Sale"
                lead="View all items on Sale"
            >
                <b-button variant="primary" size="md" to="/sale"
                    >Shop Sale</b-button
                >
            </b-jumbotron>
        </div>

        <!-- tre kategori-cards -->
        <div class="categoryDeck">
            <b-row>
                <b-col cols="8" sm="4" md="4">
                    <b-card
                        title="Hoodies"
                        :img-src="require('../assets/hoodie-purple.png')"
                        img-alt="Image"
                        img-top
                        class="category-card"
                    >
                    </b-card>
                </b-col>
                <b-col cols="8" sm="4" md="4">
                    <b-card
                        title="Accessories"
                        :img-src="require('../assets/assec-orange.png')"
                        img-alt="Image"
                        img-top
                        class="category-card"
                    >
                    </b-card>
                </b-col>
                <b-col cols="8" sm="4" md="4">
                    <b-card
                        title="T-shirts"
                        :img-src="require('../assets/tshirt-white.png')"
                        img-alt="Image"
                        img-top
                        class="category-card"
                    >
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'LandingPage'
    }
</script>

<style scoped>
    b-container.landingPage {
        padding: 20px;
    }
    .saleJumbotron {
        padding: 20px;
    }
    div.jumbotron.jumbotron-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .jumbotron-info {
        margin: 0px;
        background-color: #3988ff;
    }
    a.btn.btn-primary.btn-md {
        width: 150px;
        align-self: center;
    }
    img.card-img-top {
        object-fit: contain;
    }
    .categoryDeck {
        padding: 20px;
    }
    div.card.category-card {
        margin: 10px;
    }
    div.row {
        justify-content: space-evenly;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        a.stetched-link,
        h4.card-title {
            font-size: 14px;
            margin-bottom: 0;
        }
        img.card-img-top {
            height: 111px;
        }
        div.card-body {
            padding: 15px;
        }
        div.jumbotron.jumbotron-info {
            height: 250px;
        }
    }
    /* Media query for fitted images */
    @media (min-width: 993px) {
        /* fixed height of img:es */
        img.card-img-top {
            height: 300px;
        }
    }
</style>
