<script lang="ts">
type StorySavedType = {
    type: string,
    category: string,
    url: string,
};

export default {
    name: 'WaifuStory',
    components: {},
    data() {
        return {
            isOpenedPreviewStory: false,
        };
    },
    methods: {
        onRedirect(item: StorySavedType) {
            //@ts-ignore
            this.$store.dispatch('onStoryOpen', item);
        },

    },
    computed: {
        history(): StorySavedType[] {
            //@ts-ignore
            return this.$store.getters.getStoryWaifu;
        },
        waifuImage(): string {
            //@ts-ignore
            return this.$store.getters.getWaifuImage;
        },
    }

}
</script>

<template>
    <div>
        <v-switch :label="$t(`${isOpenedPreviewStory ? 'preview_off' : 'preview_on'}`)" v-model="isOpenedPreviewStory"
            color="brown"></v-switch>
        <div class="story">
            <template v-for="item in history">
                <button :class="`story__item d-flex direction-column ${waifuImage === item.url && 'active'}`" variant="text"
                    width="100%" @click="onRedirect(item)" v-ripple>
                    <div style="width: 100%;">
                        <div class="secondary text-caption d-flex justify-space-between" style="gap:1em;">
                            <p>{{ $t('editing.type') }}: <strong>{{ item.type }}</strong></p>
                            <p>{{ $t('editing.category') }}: <strong>{{ item.category }}</strong></p>
                        </div>
                        <div class="d-flex">
                            <template v-if="isOpenedPreviewStory">
                                <img class="previewStory" :src="item.url" alt='' />
                            </template>
                            <template v-else>
                                <p class="url">
                                    {{ item.url }}
                                </p>
                            </template>
                        </div>
                    </div>
                </button>
            </template>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.story {
    gap: 8px;

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

    &__item.active {
        background-color: brown;
        color: #fff;
    }

    &__item .v-btn__content {
        width: 100% !important;
        overflow: hidden;
    }
}

.url {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 7px;
}

.previewStory {
    height: 70px;
    width: 100%;
    object-fit: contain;
}
</style>