<template>
  <section class="slider-block">
    <div class="slider-block__wrapper" ref="wrapper" @wheel.prevent="handleWheel">
      <div class="slider-block__container">
        <slide-card v-for="slide in sliderContent" :key="slide.id" :slideData="slide" class="slider-block__slide-card" />
      </div>
    </div>
    <div class="slider-block__pagination-wrapper">
      <button
        v-for="(slide, index) in sliderContent"
        :key="slide.id"
        @click="scrollToSlide(index)"
        class="slider-block__pagination-btn"
        :class="{ 'slider-block__pagination-btn_active': index === activeSlideIndex }"
      ></button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import SlideCard from '@/components/SlideCard.vue';

export default {
  name: 'slider-block',
  components: { SlideCard },

  data() {
    return {
      activeSlideIndex: 0,
      slideWidth: 0,
    };
  },

  computed: {
    ...mapGetters({
      sliderContent: 'dataStore/sliderContent',
    }),
  },

  methods: {
    addScrollListener() {
      const wrapper = this.$refs.wrapper;
      wrapper.addEventListener('scroll', this.handleScroll);
      this.updateSlideWidth();
    },

    updateSlideWidth() {
      const firstSlide = this.$el.querySelector('.slider-block__slide-card');
      if (firstSlide) {
        this.slideWidth = firstSlide.offsetWidth;
      }
    },

    handleScroll() {
      const wrapper = this.$refs.wrapper;
      const scrollLeft = wrapper.scrollLeft;
      const activeIndex = Math.round(scrollLeft / this.slideWidth);
      this.activeSlideIndex = activeIndex;
    },

    scrollToSlide(index) {
      const wrapper = this.$refs.wrapper;
      wrapper.scrollLeft = index * this.slideWidth;
    },

    handleWheel(event) {
      event.preventDefault();
      const wrapper = this.$refs.wrapper;
      const delta = Math.sign(event.deltaY);
      wrapper.scrollLeft += delta * this.slideWidth;
    },
  },

  mounted() {
    this.addScrollListener();
  },

  beforeDestroy() {
    const wrapper = this.$refs.wrapper;
    if (wrapper) {
      wrapper.removeEventListener('scroll', this.handleScroll);
    }
  },
};
</script>

<style lang="scss" scoped>
.slider-block {
  position: relative;
  width: var(--slider-width);
  max-width: var(--max-width-block-global);
  height: 450px;
  background-color: var(--slider-bg-color);

  &__wrapper {
    width: var(--slider-width);
    max-width: var(--max-width-block-global);
    height: 100%;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    overflow: -webkit-scrollbar;
  }
  &__container {
    width: max-content;
    height: 100%;
    display: flex;
  }

  &__pagination-wrapper {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  &__pagination-btn {
    cursor: pointer;
    width: 10px;
    height: 10px;

    opacity: 0.4;
    border-radius: 50%;
    background: var(--fifth-color);

    &_active {
      opacity: 1;
    }

    &:hover {
      background: #eee;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
