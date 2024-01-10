<script lang="ts">
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { useTheme } from 'vuetify'

export default {
    name: 'ThemeSwitcher',
    components: {},
    data() {
        return {
            isDarkMode: false,
            theme: useTheme(),
        };
    },
    methods: {
        onChangeTheme() {
            this.isDarkMode = !this.isDarkMode;
            //@ts-ignore
            this.theme.global.name = this.theme.global.current.dark ? "lightTheme" : "darkTheme";
        },
    }

}
</script>

<template>
    <div class="wrapper">
        <v-btn :class="`btn ${isDarkMode && 'active'}`" @click="onChangeTheme" rounded="full">
            <v-icon class="dark" size="x-large" icon="mdi-weather-night"></v-icon>
            <v-icon class="light" size="x-large" icon="mdi-weather-sunny"></v-icon>
        </v-btn>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn {
    display: flex;
    flex-direction: column;
    height: 40px !important;
    width: 40px !important;
    overflow: hidden;
    position: relative;
    transition: all 0.5s;
    border-radius: 50%;
    aspect-ratio: 1;
    min-width: auto;


    .dark,
    .light {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0%);
    }

    .dark {
        bottom: 50px;
    }

    .light {
        bottom: 50%;
        transform: translate(-50%, 50%);
    }

    &.active {
        transition: all 0.5s;

        .dark {
            bottom: 50%;
            transform: translate(-50%, 50%);
        }

        .light {
            bottom: -50px;
        }
    }
}
</style>