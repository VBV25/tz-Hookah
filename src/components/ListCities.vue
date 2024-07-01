<template>
    <div class="list-cities" :class="{ 'list-cities_visible': getStartSelectCity === true }">
        <p class="list-cities__title">Укажите ваш город</p>
        <div class="list-cities__columns-group">
            <ul v-for="(column, index) in columns" :key="index" class="list-cities__column">
                <li v-for="city in column" :key="city" class="list-cities__city" @click="getCurrentCity($event)">{{ city
                    }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'list-cities',
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters({
            getCityList: 'dataStore/getCityList',
            getStartSelectCity: 'dataStore/getStartSelectCity'
        }),
        columns() {
            const cityList = this.getCityList;
            const columnCount = Math.ceil(cityList.length / 8);
            const columns = [];
            for (let i = 0; i < columnCount; i++) {
                columns.push(cityList.slice(i * 8, (i + 1) * 8));
            }
            return columns;
        }
    },
    methods: {
        ...mapActions({
            setCurrentCity: 'dataStore/setCurrentCity',
            changeStartSelectCity: 'dataStore/changeStartSelectCity'
        }),

        getCurrentCity(event) {
            const currentCity = event.target.textContent
            this.setCurrentCity(currentCity);
            this.changeStartSelectCity(false)
            document.body.classList.remove('body-scroll-lock')
        }
    },
};
</script>

<style lang="scss" scoped>
.list-cities {
    z-index: 100;
    position: absolute;
    left: 0px;
    top: 0px;
    width: max-content;
    height: max-content;
    min-width: 671px;
    min-height: 358px; 
    padding: 40px 56px;

    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    background-color: var(--first-color);

    &_visible {
        display: flex;
    }

    &__title {
        width: 100%;
        font-family: var(--font-family);
        font-weight: 700;
        font-size: var(--font-size-h2);
        line-height: 117%;
        color: var(--font-second-color);
    }

    &__columns-group {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        gap: 40px;
    }

    &__column{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    &__city {
        cursor: pointer;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: var(--font-size-third);
        line-height: 172%;
        color: var(--font-second-color);

        &:hover {
            color: var(--fifth-color)
        }
    }
}
</style>