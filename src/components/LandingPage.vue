<template>
<div class="landingPage">
    <div class="categoryDeck">
        <!-- tre kategori-cards -->
        <b-card-group deck>
            <b-card title="Dam" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            <b-link to="../views/Dam" class="stretched-link"></b-link>
            </b-card>

            <b-card title="Herr" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            <b-link to="../views/Herr" class="stretched-link"></b-link>
            </b-card>

            <b-card title="Barn" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            <b-link to="../views/Barn" class="stretched-link"></b-link>
            </b-card>
        </b-card-group>
    </div>

    <!-- jumbotron med rea -->
    <div class="saleJumbotron">
        <b-jumbotron header="Sale" lead="View all items on Sale">
            <b-button variant="primary" href="#">Shop Sale</b-button>
        </b-jumbotron>
    </div>
    
    <!-- tre kategori-cards -->
    <div class="categoryDeck">
        <b-card-group deck>
            <b-card title="Jackor" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            </b-card>

            <b-card title="T-shirts" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            </b-card>

            <b-card title="Accessoarer" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
            </b-card>
        </b-card-group>
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
</style>