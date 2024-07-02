<template>
  <div class="product-card">
    <div class="product-card__img-wrapper">
      <img :src="product.img" alt="product img" class="product-card__img" />
      <img src="@/assets/img/heart.svg" class="product-card__like" alt="Лайк" />
      <div class="product-card__banner">
        <div v-if="product.newProduct" class="product-card__new">NEW</div>
        <div v-if="product.sale" class="product-card__sale">{{ product.sale + ' SALE' }}</div>
      </div>
      <div class="product-card__button-interaction">
        <base-button :buttonData="addCart" class="product-card__button" />
        <div class="product-card__ellipse" id="plus-product" @click="minusCount()">-</div>
        <div class="product-card__count">{{count}}</div>
        <div class="product-card__ellipse" id="minus-product" @click="plusCount()">+</div>
      </div>
    </div>
    <div class="product-card__info">
      <h3 class="product-card__name">{{ product.name }}</h3>
      <p class="product-card__description">{{ product.description }}</p>
      <div class="product-card__price">
        <span v-if="product.sale" class="product-card__price product-card__price-sale">{{ formattedPrice(product.salePrice) }}</span>
        <span v-if="product.sale" class="product-card__price product-card__price-original">{{ formattedPrice(product.price) }}</span>
        <span class="product-card__price" v-else>{{ formattedPrice(product.price) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'product-card',
  components: { BaseButton },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      addCart: {
        id: `add-cart ${this.product.id}`,
        img: '',
        text: 'В корзину',
      },
      count: 1,
    };
  },
  methods: {
    formattedPrice(value) {
      return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' })
        .format(value)
        .replace(/,/g, '.')
        .replace('₽', '₽')
        .replace(/\s/g, '\u00A0');
    },
    minusCount(){
      if(this.count > 0){
        this.count -= 1
      }
    },
    plusCount(){
      this.count += 1
    }
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  width: 100%;
  max-width: calc((var(--max-width-block-global) - var(--max-width-sidebar)) / 4);

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 15px;

  &:hover {
    .product-card__img {
      transform: scale(1.15);
    }

    .product-card__img-wrapper {
      box-shadow: 0 0 29px 0 rgba(106, 106, 106, 0.19);
      border-top: 1px solid var(--fifth-color);
      background-color: var(--first-color);
    }

    .product-card__button-interaction,
    .product-card__like {
      opacity: 1;
      visibility: visible;
    }
  }

  &__img-wrapper {
    position: relative;
    background-color: var(--eighth-color);
  }

  &__img {
    width: 100%;
    padding: 10px 0px;
    height: auto;
    transition: all 0.2s linear;
  }

  &__banner {
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__new,
  &__sale {
    width: max-content;
    height: max-content;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--fourth-color);

    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-small);
    line-height: 100%;
    color: var(--first-color);
  }

  &__like {
    position: absolute;
    top: 7px;
    right: 7px;

    opacity: 0;
    visibility: hidden;
    transition: all 0.3s linear;

    &:hover {
      transform: scale(1.2);
    }
  }

  &__sale {
    background-color: var(--fifth-color);
  }

  &__info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
  }

  &__name,
  &__description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-third);
    line-height: 116%;
    color: var(--font-third-color);
  }

  &__price {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-second);
    line-height: 89%;
    color: var(--fifth-color);

    &-original {
      text-decoration: line-through;
      color: var(--font-third-color);
    }

    &-sale {
      margin-right: 10px;
    }
  }

  &__button-interaction {
    width: 100%;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    color: var(--font-first-color);

    opacity: 0;
    visibility: hidden;
    transition: all 0.3s linear;
  }

  &__ellipse {
    cursor: pointer;
    width: 21px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 29px;
    background-color: var(--ninth-color);
  }

  &__button {
    width: 130px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: var(--fifth-color);
    color: var(--font-first-color);
  }

  &__count {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--font-third-color);
  }
}
</style>
