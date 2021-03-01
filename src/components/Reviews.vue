<template>
    <div class="reviewDeck">
        <b-row>
            <b-col class="review-card" cols="8" sm="4" md="4" lg="4">
                <b-card class="reviewCard">
                    <b-img
                        v-bind="mainProps"
                        rounded="circle"
                        alt="Circle image"
                        fluid
                    ></b-img>
                    <div class="review-wrapper">
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
                    <b-card-text>Name of reviewer.</b-card-text>
                </b-card>
            </b-col>
            <b-col class="review-card" cols="8" sm="4" md="4" lg="4">
                <b-card class="reviewCard">
                    <b-img
                        v-bind="mainProps"
                        rounded="circle"
                        alt="Circle image"
                        fluid
                    ></b-img>
                    <div class="review-wrapper">
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
                    <b-card-text>Name of reviewer.</b-card-text>
                </b-card>
            </b-col>
            <b-col class="review-card" cols="8" sm="4" md="4" lg="4">
                <b-card class="reviewCard">
                    <b-img
                        v-bind="mainProps"
                        rounded="circle"
                        alt="Circle image"
                        fluid
                    ></b-img>
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
                    <b-card-text>Name of reviewer.</b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mainProps: {
                    blank: true,
                    blankColor: '#777',
                    width: 150,
                    height: 150,
                    class: 'm1'
                },
                value: 3
            }
        },
        name: 'Reviews'
    }
</script>

<style scoped>
    .reviewDeck {
        padding-bottom: 50px;
    }
    div.card-body {
        flex-direction: column;
    }
    div.row {
        justify-content: center;
        /* padding: 10px; */
    }
    p.card-text {
        padding: 15px;
    }
    div.reviewCard {
        margin: 10px 10px;
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
        div.rating-wrapper {
            align-items: center;
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
        div.rating-wrapper {
            align-items: center;
        }
    }
</style>
