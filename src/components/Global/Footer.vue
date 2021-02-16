<template>
  <footer id="footer" class="bg-info text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-12">
          <h4 class="font-rubik font-size-20">THIS.STORE</h4>
          <p class="font-size-14 font-rale text-white-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, deserunt.
          </p>
        </div>
        <div class="col-lg-4 col-12">
          <h4 class="font-rubik font-size-20">Newsletter</h4>
          <form class="form-row">
            <div class="text-center py-3">
              <ul class="list-unstyled list-inline mb-0">
                <li class="list-inline-item">
                  <h5 class="mb-1">Register for free</h5>
                </li>
                <li class="list-inline-item">
                  <router-link
                    to="/register"
                    class="btn btn-primary btn-rounded"
                    >Sign up!</router-link
                  >
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div class="col-lg-2 col-12">
          <h4 class="font-rubik font-size-20">Information</h4>
          <div class="d-flex flex-column flex-wrap">
            <router-link
              to="/about"
              class="font-rale font-size-14 text-white-50 pb-1"
              >About Us</router-link
            >
            <a href="#" class="font-rale font-size-14 text-white-50 pb-1"
              >Delivery Information</a
            >
            <a href="#" class="font-rale font-size-14 text-white-50 pb-1"
              >Privacy Policy</a
            >
            <a href="#" class="font-rale font-size-14 text-white-50 pb-1"
              >Terms &amp; Conditions</a
            >
          </div>
        </div>
        <div class="col-lg-2 col-12">
          <h4 class="font-rubik font-size-20">Account</h4>
          <div class="d-flex flex-column flex-wrap">
            <router-link
              to="/login"
              class="font-rale font-size-14 text-white-50 pb-1"
              >My Account</router-link
            >
            <a href="#" class="font-rale font-size-14 text-white-50 pb-1"
              >Order History</a
            >
            <a href="#" class="font-rale font-size-14 text-white-50 pb-1"
              >Wish List</a
            >
            <a href="#" class="font-rale font-size-14 text-white-50 pb-1"
              >Newsletters</a
            >
          </div>
          <div class="social-icons">
            <b-icon class="mx-1" icon="facebook"></b-icon>
            <b-icon class="mx-1" icon="twitter"></b-icon>
            <b-icon class="mx-1" icon="linkedin"></b-icon>
            <b-icon class="mx-1" icon="google"></b-icon>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss"></style>
