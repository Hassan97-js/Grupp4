<template>
  <section class="product row my-5">
    <div class="product-photo col-12 col-lg-6 w-100 px-0">
      <div class="photo-container w-100 h-100">
        <div class="photo-main mb-5">
          <img
            class="w-100"
            src="https://static.bhphoto.com/images/images2500x2500/1596715570_1582549.jpg"
            alt="Over-ear headphones"
          />
        </div>
        <div class="photo-album row-cols-12 text-left p-2">
          <img
            class="mx-2 w-25 rounded"
            src="https://static.bhphoto.com/images/images2500x2500/1596715570_1582549.jpg"
            alt="Over-ear headphones"
          />

          <img
            class="w-25 rounded"
            src="https://static.bhphoto.com/images/images2500x2500/1596715570_1582549.jpg"
            alt="Over-ear headphones"
          />
        </div>
      </div>
    </div>
    <div class="product-info col-12 col-lg-6 text-left p-4">
      <div class="title mb-3">
        <h1 class="product-info-title">Sony Over-ear Headphones</h1>
      </div>
      <div class="price font-weight-bold h1 mb-3"><span>7.93$</span></div>
      <div class="variant mb-3">
        <h3 class="select-color">Select a color</h3>
        <ul class="row mx-0 mb-0 py-3 pl-0 pr-3">
          <li class="col-3">
            <img
              class="w-100 rounded"
              src="https://static.bhphoto.com/images/images2500x2500/1596715570_1582549.jpg"
              alt="Over-ear headphones"
            />
          </li>
          <li class="col-3">
            <img
              class="w-100 rounded"
              src="https://static.bhphoto.com/images/images2500x2500/1596715570_1582549.jpg"
              alt="Over-ear headphones"
            />
          </li>
          <li class="col-3">
            <img
              class="w-100 rounded"
              src="https://static.bhphoto.com/images/images2500x2500/1596715570_1582549.jpg"
              alt="Over-ear headphones"
            />
          </li>
          <li class="col-3">
            <img
              class="w-100 rounded"
              src="https://static.bhphoto.com/images/images2500x2500/1596715570_1582549.jpg"
              alt="Over-ear headphones"
            />
          </li>
        </ul>
      </div>
      <div class="product-size mb-3">
        <h3 class="select-size">Select a size</h3>
        <ul class="row mx-0 mb-0 py-3 pl-0 pr-3">
          <li class="col-4 px-1 px-lg-0">
            <span class="border border-dark px-3">S</span>
          </li>
          <li class="col-4 px-0">
            <span class="border border-dark px-3">M</span>
          </li>
          <li class="col-4 px-0">
            <span class="border border-dark px-3">L</span>
          </li>
        </ul>
      </div>
      <div class="description mb-4">
        <h3>Benefits</h3>
        <ul class="text-left p-0">
          <li>The best Sony Over-ear Headphones</li>
          <li>The best Sony Over-ear Headphones</li>
          <li>The best Sony Over-ear Headphones</li>
          <li>The best Sony Over-ear Headphones</li>
        </ul>
      </div>
      <div
        class="row favourit w-100 mx-auto justify-content-between align-items-center"
      >
        <button class="buy--btn">ADD TO CART</button>
        <b-icon
          class="ml-5"
          icon="heart-fill"
          variant="danger"
          style="width: 2rem; height: 2rem"
        ></b-icon>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
li {
  list-style: none;
}

.buy--btn {
  padding: 1.2rem 2.2rem;
  border: none;
  border-radius: 7px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #ff3f40;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
}

@media (min-width: 0px) and (max-width: 576px) {
  .product-info-title {
    font-size: 1.5rem;
  }
  .price {
    font-size: 1.4rem;
  }
  .variant {
    h3 {
      font-size: 1.5rem;
    }
  }
  .product-size {
    h3 {
      font-size: 1.5rem;
    }
    ul {
      width: 80%;
    }
  }
  .description {
    h3 {
      font-size: 1.5rem;
    }
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .product-info-title {
    font-size: 2rem;
  }
  .price {
    font-size: 1.9rem;
  }
  .variant {
    h3 {
      font-size: 2rem;
    }
  }
  .product-size {
    h3 {
      font-size: 2rem;
    }
    ul {
      width: 50%;
      li {
        font-size: 1.2rem;
      }
    }
  }
  .description {
    h3 {
      font-size: 2rem;
    }
    ul {
      li {
        font-size: 1.2rem;
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .product-info-title {
    font-size: 2.8rem;
  }
  .price {
    font-size: 2.4rem;
  }
  .variant {
    h3 {
      font-size: 2.5rem;
    }
  }
  .product-size {
    h3 {
      font-size: 2.5rem;
    }
    ul {
      width: 50%;
      li {
        font-size: 1.4rem;
      }
    }
  }
  .description {
    h3 {
      font-size: 2.5rem;
    }
    ul {
      li {
        font-size: 1.4rem;
      }
    }
  }
}

@media (min-width: 993px) {
  .product-info-title {
    font-size: 3.6rem;
  }
  .price {
    font-size: 3rem;
  }
  .variant {
    h3 {
      font-size: 3.1rem;
    }
  }
  .product-size {
    h3 {
      font-size: 3.1rem;
    }
    ul {
      width: 50%;
      li {
        font-size: 1.6rem;
      }
    }
  }
  .description {
    h3 {
      font-size: 3.1rem;
    }
    ul {
      li {
        font-size: 1.6rem;
      }
    }
  }
}
</style>
