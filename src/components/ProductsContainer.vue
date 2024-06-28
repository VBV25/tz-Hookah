<template>
    <section class="products-container">

        <div class="products-container__header">
            <navigation-list :navList="$store.state.textStore.productsNavigation" />
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import NavigationList from '@/components/UI/NavigationList.vue';

export default {
    name: 'products-container',
    components: {
    NavigationList,
  },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.products-container {
    width: 100%;
    height: max-content;

    display: flex;
    flex-wrap: wrap;

    column-gap: 10px;
    row-gap: 20px;
}
</style>