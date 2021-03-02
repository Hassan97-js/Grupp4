<template>
    <div class="about">
        <img src="../assets/about-img.jpg" alt="" class="header-img" />
        <div class="about-us">
            <div class="about-us-main">
                <h1>About us</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div class="our-team">
                <h1>Our team</h1>
                <b-container align="left" class="bv-example-row">
                    <b-row>
                        <b-col>
                            <b-card
                                class="card"
                                style="max-width: 15rem; margin-bottom: 2em"
                            >
                                <b-avatar
                                    style="margin-bottom: 1em"
                                    size="lg"
                                ></b-avatar>
                                <b-card-title>Niclas</b-card-title>
                                <b-card-text>
                                    Former excavator operator that change his
                                    life to the deep web.
                                </b-card-text>

                                <b-link
                                    target="#"
                                    href="https://www.linkedin.com/in/niclas-lundstr%C3%B6m-62b9891b5/"
                                    >LinkedIn </b-link
                                >|<b-link
                                    target="#"
                                    href="https://github.com/niclaslundstrom"
                                >
                                    Github</b-link
                                >
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card
                                class="card"
                                style="max-width: 15rem; margin-bottom: 2em"
                            >
                                <b-avatar
                                    style="margin-bottom: 1em"
                                    size="lg"
                                ></b-avatar>
                                <b-card-title>Cathy</b-card-title>
                                <b-card-text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </b-card-text>

                                <b-link
                                    href="http://linkedin.com/in/cathy-van-heijst-87472b15a"
                                    >LinkedIn </b-link
                                >|<b-link href="https://github.com/Cathyvh">
                                    Github</b-link
                                >
                            </b-card></b-col
                        >
                        <b-col>
                            <b-card
                                class="card"
                                style="max-width: 15rem; margin-bottom: 2em"
                            >
                                <b-avatar
                                    style="margin-bottom: 1em"
                                    size="lg"
                                ></b-avatar>
                                <b-card-title>Hassan</b-card-title>
                                <b-card-text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </b-card-text>
                                <b-link
                                    target="#"
                                    href="https://www.linkedin.com/in/hassan-se-a81317190/"
                                    >LinkedIn </b-link
                                >|<b-link
                                    target="#"
                                    href="https://github.com/Hassan97-js"
                                >
                                    Github</b-link
                                >
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-card
                                class="card"
                                style="max-width: 15rem; margin-bottom: 2em"
                            >
                                <b-avatar
                                    style="margin-bottom: 1em"
                                    size="lg"
                                    src="http://placekitten.com/250/250"
                                ></b-avatar>
                                <b-card-title>Noel</b-card-title>
                                <b-card-text>
                                    I love cats and this is text to build on the
                                    card title and make up the bulk of the
                                    card's content.
                                </b-card-text>

                                <b-link
                                    href="https://www.linkedin.com/in/noel-andersson-k%C3%B6hler/"
                                    >LinkedIn </b-link
                                >|<b-link
                                    href="https://github.com/kycklingenrut"
                                >
                                    Github</b-link
                                >
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card
                                class="card"
                                style="max-width: 15rem; margin-bottom: 2em"
                            >
                                <b-avatar
                                    style="margin-bottom: 1em"
                                    size="lg"
                                ></b-avatar>
                                <b-card-title>Ann</b-card-title>
                                <b-card-text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </b-card-text>

                                <b-link href="#">LinkedIn </b-link>|<b-link
                                    href="#"
                                >
                                    Github</b-link
                                >
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card
                                class="card"
                                style="max-width: 15rem; margin-bottom: 2em"
                            >
                                <b-avatar
                                    style="margin-bottom: 1em"
                                    size="lg"
                                ></b-avatar>
                                <b-card-title>Mirac</b-card-title>
                                <b-card-text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </b-card-text>

                                <b-link href="#">LinkedIn </b-link>|<b-link
                                    href="#"
                                >
                                    Github</b-link
                                >
                            </b-card>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .about {
        text-align: left;
        img {
            width: 100%;
            height: 40vh; /* height of container */
            object-fit: cover;
        }
        .about-us {
            margin: 3em 0;
        }
        .about-us-main,
        .our-team {
            max-width: 70vw;
            min-width: 260px;
            margin: 0 auto 10em auto;
            h1 {
                letter-spacing: 2px;
                font-size: 60px;
                margin: 0.5em 0;
            }
            .card {
                border: none;
                min-width: 250px;
            }
        }
    }
</style>
