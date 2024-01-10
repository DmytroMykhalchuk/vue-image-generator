<script lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue';

export default {
    name: 'SideBar',
    components: { ThemeSwitcher },
    data() {
        return {
            menuList: [
                {
                    title: 'Home',
                    url: '/',
                    icon: 'mdi-home',
                },
                {
                    title: 'Cat',
                    url: '/cat',
                    icon: 'mdi-cat',
                },
                {
                    title: 'Waifu',
                    url: '/waifu',
                    icon: 'mdi-account-cowboy-hat-outline',
                },

            ]
        }
    },
    methods: {
        onRedirect(path: string) {
            this.$router.push(path);
        },
        isActive(path: string) {
            return this.$router.currentRoute.value.fullPath === path;
        },
    },

}
</script>

<template>
    <div class="mobile-element">
        <v-app-bar :elevation="1" title="Generate photo" class="app-bar" color="#efab70">
            <template v-slot:prepend>
                <v-app-bar-nav-icon id="menu-activator"></v-app-bar-nav-icon>
                <v-menu activator="#menu-activator">
                    <v-list>
                        <v-list-item v-for="(item, index) in menuList" :key="index" :value="index"
                            @click="onRedirect(item.url)" :disabled="isActive(item.url)">
                            <v-list-item-title>
                                <div class="d-flex flex-row menu-item--mobile">
                                    <p class="text-body1">
                                        <v-icon :icon="item.icon"></v-icon>
                                    </p>
                                    <p class="text-body1">
                                        {{ item.title }}
                                    </p>
                                </div>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-app-bar>
    </div>

    <div class="side-menu desktop-element pa-3">
        <template v-for="item in menuList">
            <div class="side-menu__item mb-3">
                <v-btn class="side-menu__btn" variant="text" :color="isActive(item.url) ? 'white' : '#a52a2a'"
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
        <div style="flex:1;"></div>
        <ThemeSwitcher />
    </div>
</template>


<style lang="scss" scoped>
@import './../../assets/styles/global.scss';

.side-menu {
    width: 80px;
    min-width: 80px;
    background-color: $color-2;
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

.app-bar {
    background-color: $color-2;
}

.menu-item--mobile {
    gap: 8px;
    align-items: center;

    a {
        text-decoration: none;
        color: black;
    }
}
</style>