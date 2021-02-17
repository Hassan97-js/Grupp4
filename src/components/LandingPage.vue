<template>
<div class="landingPage">
    <div class="categoryDeck">
        <!-- tre kategori-cards -->
        <b-row>
            <b-card title="Women" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            <b-link to="/Dam" class="stretched-link"></b-link>
            </b-card>

            <b-card title="Men" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            <b-link to="/Herr" class="stretched-link"></b-link>
            </b-card>

            <b-card title="Children" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            <b-link to="/Barn" class="stretched-link"></b-link>
            </b-card>
        </b-row>
    </div>

    <!-- jumbotron med rea -->
    <div class="saleJumbotron">
        <b-jumbotron header="Sale" lead="View all items on Sale">
            <b-button variant="primary" href="#">Shop Sale</b-button>
        </b-jumbotron>
    </div>
    
    <!-- tre kategori-cards -->
    <div class="categoryDeck">
        <b-row>
            <b-card title="Jackets" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            </b-card>

            <b-card title="T-shirts" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            </b-card>

            <b-card title="Accessories" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            </b-card>
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
div.landingPage{
    padding: 20px;
}
.saleJumbotron{
    padding: 20px;
}
.jumbotron{
    margin: 0px;
}
.categoryDeck{
    padding: 20px;
}
div.row{
    justify-content: space-evenly;
}
</style>