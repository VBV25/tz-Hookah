<template>
    <nav class="navigation-list">
        <li class="navigation-list__link" v-for="element in navList" :key="element.id" @click="changeRoute(element)"
            :id="element.id" :class="{ 'navigation-list__link_active': element.id === currentHeaderMenuElement }">
            {{ element.name }}
        </li>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'navigation-list',
    props: {
        navList: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
        };
    },

    computed: {
        ...mapGetters({
            currentHeaderMenuElement: 'dataStore/currentHeaderMenuElement',
        }),
    },

    methods: {
        ...mapActions({
            changeCurrentHeaderMenuElement: 'dataStore/changeCurrentHeaderMenuElement',
        }),

        changeRoute(element) {
            if (element.routerLink) {
                this.$router.push(`${element.routerLink}`)
                this.changeCurrentHeaderMenuElement(element.id)
            }
        }
    },
    mounted() {
        if (this.$route.name.toLowerCase()) {
            this.changeCurrentHeaderMenuElement(this.$route.name.toLowerCase())
        }
    }
};
</script>

<style lang="scss" scoped>
.navigation-list {
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__link {
        cursor: pointer;
        padding: 40px 0px;
        opacity: 0.5;

        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        line-height: 116%;
        color: var(--sixth-color);

        &_active {
            opacity: 1;
            border-bottom: 3px solid var(--fifth-color);
        }
    }
}
</style>