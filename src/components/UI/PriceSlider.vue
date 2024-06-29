<template>
  <div>
    <div class="slider">
      <div class="slider__track" :style="{ left: leftTrackStyle, right: rightTrackStyle }"></div>
      <div class="slider__thumb left-thumb" @mousedown="onDragStart('left')" :style="{ left: thumbLeftStyle }"></div>
      <div class="slider__thumb right-thumb" @mousedown="onDragStart('right')" :style="{ right: thumbRightStyle }"></div>
    </div>
    <div class="slider__price-range-label">
      <strong>{{ formattedPrice(leftValue) }}₽ - {{ formattedPrice(rightValue) }}₽</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'price-slider',
  props: {
    initialPriceRange: {
      type: Array,
      required: true,
    },
    initialMaxPrice: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      leftValue: this.initialPriceRange[0],
      rightValue: this.initialPriceRange[1],
      maxPrice: this.initialMaxPrice,
    };
  },
  computed: {
    leftTrackStyle() {
      return `${(this.leftValue / this.maxPrice) * 100}%`;
    },
    rightTrackStyle() {
      return `${(1 - this.rightValue / this.maxPrice) * 100}%`;
    },
    thumbLeftStyle() {
      return `${(this.leftValue / this.maxPrice - 0.09) * 100}%`;
    },
    thumbRightStyle() {
      return `${(1 - this.rightValue / this.maxPrice - 0.09) * 100}%`;
    },
  },
  watch: {
    initialPriceRange(newRange) {
      this.leftValue = newRange[0];
      this.rightValue = newRange[1];
    },
    initialMaxPrice(newMaxPrice) {
      this.maxPrice = newMaxPrice;
    },
  },
  methods: {
    onDragStart(side) {
      const onMouseMove = (e) => {
        const slider = this.$el.querySelector('.slider');
        const rect = slider.getBoundingClientRect();
        const sliderWidth = slider.offsetWidth;
        const newValue = Math.round(((e.clientX - rect.left) / sliderWidth) * this.maxPrice);

        if (side === 'left') {
          let newLeftValue = Math.min(newValue, this.rightValue);
          newLeftValue = Math.max(newLeftValue, 0);
          this.leftValue = newLeftValue;
        } else if (side === 'right') {
          let newRightValue = Math.max(newValue, this.leftValue);
          newRightValue = Math.min(newRightValue, this.maxPrice);
          this.rightValue = newRightValue;
        }
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        this.$emit('updatePriceRange', [this.leftValue, this.rightValue]);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    },
    formattedPrice(value) {
      const formatter = new Intl.NumberFormat('ru-RU');
      return formatter.format(value).replace(/\s/g, '\u00A0');
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  $widthSlider: 170px;
  $sizeThumb: 15px;

  position: relative;
  left: $sizeThumb;
  width: $widthSlider;
  height: 4px;

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: -$sizeThumb;
    width: calc($sizeThumb * 2 + $widthSlider);
    height: 100%;
    background: var(--fifth-color-opacity);
  }

  &__track {
    position: absolute;
    height: 100%;
    background: var(--fifth-color);
  }

  &__thumb {
    cursor: pointer;
    position: absolute;
    width: $sizeThumb;
    height: $sizeThumb;
    background: var(--fifth-color);
    outline: 2px solid var(--first-color);
    border-radius: 100%;
    top: -5px;
  }

  .left-thumb {
    left: 0;
  }

  .right-thumb {
    right: 0;
  }

  &__price-range-label {
    margin-top: 20px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-navigation);
    line-height: 100%;
    color: var(--fifth-color);
  }
}
</style>
