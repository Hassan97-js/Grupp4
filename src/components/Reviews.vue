<template>
    <div class="reviewDeck">
        <b-row>
            <b-col class="review-card" cols="8" sm="4" md="4" lg="4">
                <b-card class="reviewCard">
                    <b-avatar style="margin-bottom: 1em" size="lg"></b-avatar>
                    <div class="rating-wrapper">
                        <b-form-rating
                            variant="warning"
                            v-model="value"
                            no-border
                            inline
                            readonly
                            size="sm"
                        ></b-form-rating>
                    </div>
                    <b-card-text>
                        Review text about the company and what customers and
                        others think about the website.
                    </b-card-text>
                    <b-card-text>Sveinn</b-card-text>
                </b-card>
            </b-col>
            <b-col class="review-card" cols="8" sm="4" md="4" lg="4">
                <b-card class="reviewCard">
                    <b-avatar style="margin-bottom: 1em" size="lg"></b-avatar>
                    <div class="rating-wrapper">
                        <b-form-rating
                            variant="warning"
                            v-model="value"
                            no-border
                            inline
                            readonly
                            size="sm"
                        ></b-form-rating>
                    </div>
                    <b-card-text>
                        Review text about the company and what customers and
                        others think about the website.
                    </b-card-text>
                    <b-card-text>Joe</b-card-text>
                </b-card>
            </b-col>
            <b-col class="review-card" cols="8" sm="4" md="4" lg="4">
                <b-card class="reviewCard">
                    <b-avatar style="margin-bottom: 1em" size="lg"></b-avatar>
                    <div class="rating-wrapper">
                        <b-form-rating
                            variant="warning"
                            v-model="value"
                            no-border
                            inline
                            readonly
                            size="sm"
                        ></b-form-rating>
                    </div>
                    <b-card-text>
                        Review text about the company and what customers and
                        others think about the website.
                    </b-card-text>
                    <b-card-text>Margaret</b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: 3
            }
        },
        name: 'Reviews'
    }
</script>

<style scoped>
    .reviewDeck {
        padding-bottom: 0px;
    }
    div.review-card.col-sm-4.col-md-4.col-lg-4.col-8 {
        max-width: 245px;
    }
    div.card-body {
        flex-direction: column;
        padding: 5px;
    }
    div.row {
        justify-content: space-around;
    }
    p.card-text {
        padding: 15px;
    }
    div.card.reviewCard {
        margin: 10px 10px;
        padding: 0px;
        max-width: 245px;
    }
    div.rating-wrapper {
        display: flex;
        justify-content: center;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        div.card-body {
            padding: 0px;
        }
        p.card-text {
            padding: 0px;
            font-size: 12px;
        }
        div.reviewCard {
            margin: 0px 5px;
            padding: 0px;
        }
        div.row {
            padding: 0px;
            flex-wrap: nowrap;
        }
        div.review-card.col-sm-4.col-md-4.col-lg-4.col-8 {
            padding: 5px;
        }
    }

    div.card-body {
        flex-direction: column;
    }
    div.row {
        justify-content: center;
        padding: 20px;
    }
    p.card-text {
        padding: 15px;
    }
    div.reviewCard {
        margin: 0px 10px;
        padding: 0px;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        div.card-body {
            padding: 10px;
        }
        p.card-text {
            padding: 0px;
            font-size: 12px;
        }
        div.reviewCard {
            margin: 0px 5px;
            padding: 0px;
        }
    }
</style>
