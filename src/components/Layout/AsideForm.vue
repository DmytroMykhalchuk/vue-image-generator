<script lang="ts">
export type StorySavedType = {
    type: string,
    category: string,
    url: string,
};

export default {
    name: 'AsideForm',
    components: {},
    props: ['history', 'onRedirect'],
    data() {
        return {
            isFetching: false,
            isOpenedPreviewStory: false,
        };
    },
    methods: {
        onRedirect(item: StorySavedType) {
            //@ts-ignore
            this.$store.dispatch('onStoryOpen', item);
        }
    },
    computed: {
    },
    watch: {
    },


}
</script>

<template>
    <v-sheet class="form-wrapper" elevation="2">
        <slot name="form"></slot>
    </v-sheet>
    <v-sheet class="form-wrapper elevation-2">
        <p>History</p>
        <v-switch :label="`Turn ${isOpenedPreviewStory ? 'off' : 'on'} preview`" v-model="isOpenedPreviewStory"
            color="brown"></v-switch>
        <div class="story">
            <template v-for="item in history">
                <v-btn class="story__item d-flex direction-column" variant="text" width="100%" @click="onRedirect(item)">
                    <div style="width: 100%;">
                        <div class="secondary text-caption d-flex justify-space-between" style="gap:1em;">
                            <p>Type: <strong>{{ item.type }}</strong></p>
                            <p>Category: <strong>{{ item.category }}</strong></p>
                        </div>
                        <div class="d-flex">
                            <template v-if="isOpenedPreviewStory">
                                <img class="previewStory" :src="item.url" alt='' />
                            </template>
                            <template v-else>
                                {{ item.url }}
                            </template>
                        </div>
                    </div>
                </v-btn>
            </template>
        </div>
    </v-sheet>
</template>


<style lang="scss" scoped>
@import './../../assets/styles/global.scss';

.form-wrapper {
    background-color: #fff;
    border-radius: 16px;
    padding: 16px;
    width: 100%;
    margin-bottom: 16px;
}

.story {
    gap: 8px;
    // padding: 8px;

    &__item {
        border: 2px solid brown;
        padding: 8px;
        border-radius: 16px;
        margin-bottom: 8px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        text-transform: none;
    }

    &__item .v-btn__content {
        width: 100% !important;
    }
}

.previewStory {
    height: 70px;
    width: 100%;
    object-fit: contain;
}
</style>