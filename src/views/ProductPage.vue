<template>
  <div class="product-flex-container">
    <section class="product">
      <div class="product__photo">
        <div class="photo-container">
          <div class="photo-main">
            <img
              src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png"
              alt="green apple slice"
            />
          </div>
          <div class="photo-album">
            <ul>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                  alt="green apple"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png"
                  alt="half apple"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="product__info">
        <div class="title">
          <h1>Delicious Apples</h1>
        </div>
        <div class="price"><span>7.93$</span></div>
        <div class="variant">
          <h3>Select a color</h3>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                alt="green apple"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
                alt="yellow apple"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
                alt="orange apple"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
                alt="red apple"
              />
            </li>
          </ul>
        </div>
        <div class="description">
          <h3>BENEFITS</h3>
          <ul>
            <li>Apples are nutricious</li>
            <li>Apples may be good for weight loss</li>
            <li>Apples may be good for bone health</li>
            <li>They're linked to a lowest risk of diabetes</li>
          </ul>
        </div>
        <button class="buy--btn">ADD TO CART</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$color-primary: #4c4c4c;
$color-secondary: #a6a6a6;
$color-highlight: #ff3f40;

li {
  list-style: none;
}

.product-flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

section.product {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  padding: 1.5rem 0;
  /* min-width: 600px; */
  width: 70%;
  border-radius: 5px;
  background-color: #01e37f;
  .product__photo {
    margin-left: 1rem;
  }
  /*   .product__photo {
    width: 80%;
  } */
}

h3 {
  font-size: 0.9rem;
  letter-spacing: 1.2px;
  color: #fff;
}

img {
  max-width: 100%;
}

.photo-container {
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
}

.photo-main {
  border-radius: 6px 6px 0 0;
  background: orange;
  img {
    max-width: 100%;
  }
}

.photo-album {
  border-radius: 0 0 6px 6px;
  background-color: #fff;

  ul {
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin: 0;
  }

  li {
    width: 20%;
    height: 50%;
    margin-right: 1rem;
    border: 1px solid $color-secondary;
    border-radius: 3px;
  }
}

.product__info {
  padding: 1rem 0;
  text-align: left;
  margin-left: 1.9rem;
}

.title {
  h1 {
    margin-bottom: 0.5rem;
    color: $color-primary;
    font-size: 1.8rem;
    font-weight: 900;
  }
}

.price {
  color: $color-highlight;
  font-size: 3rem;
}

.variant {
  padding: 1rem 0;

  h3 {
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    padding-left: 0;
    li {
      width: 35px;
      height: 35px;
      border: 1px solid transparent;
      border-radius: 3px;
      cursor: pointer;
      &:first-child,
      &:hover {
        border: 1px solid $color-secondary;
      }
    }
  }
}

.description {
  margin: 1.4rem 0;

  h3 {
    margin-bottom: 1em;
  }

  ul {
    font-size: 0.8rem;
    padding-left: 0;
  }

  li {
    text-align: left;
    margin-bottom: 0.5em;
  }
}

.buy--btn {
  padding: 1.5em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: $color-highlight;
  box-shadow: 2px 2px 25px -7px $color-primary;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }
}
</style>
