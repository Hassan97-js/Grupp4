<template>
  <div class="categoryDeck">
    <b-row>
      <b-card class="reviewCard">
        <b-img
          v-bind="mainProps"
          rounded="circle"
          alt="Circle image"
          fluid
        ></b-img>
        <b-form-rating
          variant="warning"
          v-model="value"
          no-border
          readonly
        ></b-form-rating>
        <b-card-text>
          Review text about the company and what customers and others think
          about the website.
        </b-card-text>
        <b-card-text>Name of reviewer.</b-card-text>
      </b-card>

      <b-card class="reviewCard">
        <b-img
          v-bind="mainProps"
          rounded="circle"
          alt="Circle image"
          fluid
        ></b-img>
        <b-form-rating
          variant="warning"
          v-model="value"
          no-border
          readonly
        ></b-form-rating>
        <b-card-text>
          Review text about the company and what customers and others think
          about the website.
        </b-card-text>
        <b-card-text>Name of reviewer.</b-card-text>
      </b-card>

      <b-card class="reviewCard">
        <b-img
          v-bind="mainProps"
          rounded="circle"
          alt="Circle image"
          fluid
        ></b-img>
        <b-form-rating
          variant="warning"
          v-model="value"
          no-border
          readonly
        ></b-form-rating>
        <b-card-text>
          Review text about the company and what customers and others think
          about the website.
        </b-card-text>
        <b-card-text>Name of reviewer.</b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 150,
        height: 150,
        class: "m1"
      },
      value: 3
    };
  },
  name: "Reviews"
};
</script>

<style scoped>
div.row {
  justify-content: center;
  padding: 10px 0px;
}
p.card-text {
  padding: 15px;
}
.reviewCard {
  max-width: 265px;
  margin: 0px 10px;
}
</style>
