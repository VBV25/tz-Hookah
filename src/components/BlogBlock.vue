<template>
    <div class="blog-block__wrapper">
        <h2 class="blog-block__title">{{ $store.state.textStore.blogBlock.title }}</h2>
        <p class="blog-block__subtitle">{{ $store.state.textStore.blogBlock.subtitle }}</p>
        <div class="blog-block__card-container" >
            <blog-card v-for="dataCard in getBlogCardsContent" :key="dataCard.id" :dataCardBlog="dataCard" :id="dataCard.id"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import BlogCard from '@/components/BlogCard.vue';

export default {
    name: 'blog-block',
    components:{BlogCard},

    data() {
        return {};
    },
    computed: {
    ...mapGetters({
        getBlogCardsContent: 'dataStore/getBlogCardsContent',
    }),
  },
};
</script>

<style lang="scss" scoped>
.blog-block {

    &__wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    &__title {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: var(--font-size-h2);
        line-height: 123%;
        text-align: center;
        color: var(--font-third-color);
    }

    &__subtitle {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: var(--font-size-text);
        line-height: 171%;
        text-align: center;
        color: var(--font-fourth-color);
    }

    &__card-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}
</style>