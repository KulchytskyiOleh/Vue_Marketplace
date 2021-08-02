<template>
  <div class="savedItemsWrapper">
    <h1>SAVED ITEMS ({{ likedProducts.length }})</h1>
    <div class="productsWrapper">
      <div class="productWrapper" v-for="product in likedProducts" :key="product.id">
        <img :src="product.image" alt="image" />
        <div class="productInfo">
          <span class="likedPlace" @click="likedToggle(product.id)" v-if="product.liked">
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.4836 1.48538C13.5751 -0.386848 10.5328 -0.489899 8.5 1.18016C6.46802 -0.489112 3.42566 -0.386848 1.51637 1.48538C0.538066 2.44509 0 3.72024 0 5.078C0 6.43576 0.538066 7.7117 1.51637 8.67062L7.59307 14.6318C7.84326 14.8773 8.17203 15 8.5 15C8.82797 15 9.15674 14.8773 9.40693 14.6318L15.4836 8.67062C16.4619 7.7117 17 6.43654 17 5.078C17 3.72024 16.4619 2.4443 15.4836 1.48538Z"
                fill="#349A89"
              />
            </svg>
          </span>
          <span class="likedPlace" @click="likedToggle(product.id)" v-else-if="!product.liked">
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.5 1.18016C10.5328 -0.489899 13.5751 -0.386848 15.4836 1.48538C16.4619 2.4443 17 3.72024 17 5.078C17 6.43654 16.4619 7.7117 15.4836 8.67062L9.40693 14.6318C9.15674 14.8773 8.82797 15 8.5 15C8.17203 15 7.84326 14.8773 7.59307 14.6318L1.51637 8.67062C0.538066 7.7117 0 6.43576 0 5.078C0 3.72024 0.538066 2.44509 1.51637 1.48538C3.42566 -0.386848 6.46802 -0.489112 8.5 1.18016ZM8.72613 13.964L14.8036 8.00276C15.5999 7.2224 16.0377 6.18403 16.0377 5.078C16.0377 3.97276 15.5999 2.9336 14.8036 2.15324C13.159 0.540611 10.4839 0.540611 8.84 2.15324C8.65156 2.33732 8.34684 2.33732 8.1592 2.15324C7.33726 1.34614 6.25712 0.943375 5.17778 0.943375C4.09844 0.943375 3.0183 1.34693 2.19637 2.15324C1.40009 2.93438 0.962264 3.97276 0.962264 5.078C0.962264 6.18324 1.40009 7.22162 2.19637 8.00276L8.27307 13.964C8.39816 14.0867 8.60104 14.0867 8.72613 13.964Z"
                fill="#B7B7B7"
              />
            </svg>
          </span>
          <span class="itemName">{{ product.title }}</span>
          <span class="itemPrice">{{ '$ ' + product.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Liked',
  components: {},
  props: {
    // likedCounter: Number,
    likedProducts: Array,
  },
};
</script>

<style lang="scss" scoped>
.savedItemsWrapper {
  grid-area: mainContent;
  margin-bottom: 92px;
  padding: 20px;
  grid-template-areas: 'likedCounter' 'productsWrapper';
  //   border: 2px solid black;
  box-shadow: 0px 5px 15px 0px #7979790d;
  background: #ffffff;
  & h1 {
    display: grid;
    grid-area: likedCounter;
    justify-content: start;
  }
}
.productsWrapper {
  display: grid;
  grid-area: productsWrapper;
  border-radius: 4px;
  height: 656px;
  gap: 10px 7px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.productWrapper {
  position: relative;
  border-radius: 4px;
  padding: 3px 3.5px 10px 3.5px;
  border: 1px solid #e4e4e4;
  background: #ffffff;
  & img {
    margin-bottom: 6px;
    width: 100%;
  }
}
.productInfo {
  display: grid;
  width: 90%;
  grid-template-areas: 'itemName' 'itemPrice';
  gap: 7px;
  justify-items: start;
  margin-left: 12px;
}
.itemPrice {
  font-weight: bold;
}
.likedPlace {
  position: absolute;
  height: 30px;
  width: 30px;
  top: 136px;
  right: 7px;
  border-radius: 100%;
  box-shadow: 0px 2px 4px 0px #0000002a;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
