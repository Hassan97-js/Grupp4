<template>
    <div class="landingPage">
        <b-container class="categoryDeck">
            <!-- tre kategori-cards -->
            <b-row>
                <b-col class="card-container" cols="8" sm="4" md="4">
                    <b-card
                        title="Women"
                        img-src="https://picsum.photos/300/300/?image=41"
                        img-alt="Image"
                        img-top
                        class="category-card"
                    >
                        <b-link
                            to="/Dam"
                            class="stretched-link"
                        ></b-link>
                    </b-card>
                </b-col>
                <b-col class="card-container" cols="8" sm="4" md="4">
                    <b-card
                        title="Men"
                        img-src="https://picsum.photos/300/300/?image=41"
                        img-alt="Image"
                        img-top
                        class="category-card"
                    >
                        <b-link
                            to="/Herr"
                            class="stretched-link"
                        ></b-link>
                    </b-card>
                </b-col>
                <b-col class="card-container" cols="8" sm="4" md="4">
                    <b-card
                        title="Children"
                        img-src="https://picsum.photos/300/300/?image=41"
                        img-alt="Image"
                        img-top
                        class="category-card"
                    >
                        <b-link
                            to="/Barn"
                            class="stretched-link"
                        ></b-link>
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
                <b-button variant="primary" href="#">Shop Sale</b-button>
            </b-jumbotron>
        </div>

        <!-- tre kategori-cards -->
        <div class="categoryDeck">
            <b-row>
                <b-col cols="8" sm="4" md="4">
                    <b-card
                        title="Hoodies"
                        img-src="https://picsum.photos/300/300/?image=41"
                        img-alt="Image"
                        img-top
                        class="category-card"
                    >
                    </b-card>
                </b-col>
                <b-col cols="8" sm="4" md="4">
                    <b-card
                        title="T-shirts"
                        img-src="https://picsum.photos/300/300/?image=41"
                        img-alt="Image"
                        img-top
                        class="category-card"
                    >
                    </b-card>
                </b-col>
                <b-col cols="8" sm="4" md="4">
                    <b-card
                        title="Accessories"
                        img-src="https://picsum.photos/300/300/?image=41"
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
    .jumbotron-info {
        margin: 0px;
        background-color: #3988ff;
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
        div.card-body {
            padding: 15px;
        }
    }
</style>
