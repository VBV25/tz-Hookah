<template>
  <div class="product-card">
    <div class="product-card__image-wrapper">
      <img :src="product.img" alt="product image" class="product-card__image" />
      <div v-if="product.sale" class="product-card__sale">{{ 'SALE ' + product.sale }}</div>
      <div v-if="product.newProduct" class="product-card__new">NEW</div>
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
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formattedPrice(value) {
      return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' })
        .format(value)
        .replace(/,/g, '.')
        .replace('₽', '₽')
        .replace(/\s/g, '\u00A0');
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  width: 100%;
  max-width: calc((var(--max-width-block-global) - var(--max-width-sidebar)) / 4);
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  background-color: var(--eighth-color);

  &:hover {
    box-shadow: 0 0 29px 0 rgba(106, 106, 106, 0.19);
    .product-card__image {
      transform: scale(1.15);
    }
  }

  &__image-wrapper {
    position: relative;
  }

  &__image {
    width: 100%;
    height: auto;
    transition: all 0.2s linear;
  }

  &__new,
  &__sale {
    position: absolute;
    top: -10px;
    right: -10px;
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

  &__sale {
    top: -10px;
    left: -10px;
    background-color: var(--fifth-color);
  }

  &__info {
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
}
</style>
