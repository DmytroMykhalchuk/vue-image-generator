<script lang="ts">
export default {
    name: 'SideBar',
    components: {},
    data() {
        return {
            menuList: [
                {
                    title: 'Cat',
                    url: '/cat',
                    icon: 'mdi-cat',
                },
                {
                    title: 'Waifu',
                    url: '/waifu',
                    icon: 'mdi-account-cowboy-hat-outline',
                }
            ]
        }
    },
    methods: {
        onRedirect(path: string) {
            this.$router.push(path);
        },
        isActive(path: string) {
            return this.$router.currentRoute.value.fullPath.includes(path);
        },
    },

}
</script>

<template>
    <div class="side-menu pa-3">
        <template v-for="item in menuList">
            <div class="side-menu__item mb-3">
                <v-btn class="side-menu__btn" variant="text" :color="isActive(item.url) ? 'brown' : ''"
                    @click="onRedirect(item.url)">
                    <div class="d-flex flex-column">
                        <p class="text-h4">
                            <v-icon :icon="item.icon"></v-icon>
                        </p>
                        <p class="text-body1">
                            {{ item.title }}
                        </p>
                    </div>
                </v-btn>
            </div>
        </template>
    </div>
</template>


<style lang="scss" scoped>
@import './../../assets/styles/global.scss';

.side-menu {
    width: 120px;
    background-color: rgb(252, 244, 82);
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: sticky;
    overflow-y: auto;
    top: 0;

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__btn {
        height: auto !important;
    }
}
</style>