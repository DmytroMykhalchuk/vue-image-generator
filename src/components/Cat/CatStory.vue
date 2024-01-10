<script lang="ts">
type StoryItem = {
    url: string,
    id: string,
};

export default {
    name: 'CatStory',
    components: {},
    data() {
        return {
            isOpenedPreviews: false,
        };
    },
    methods: {
        onRedirect(item: StoryItem): void {
            //@ts-ignore
            this.$store.dispatch('openStoryItem', item.id);
        },
    },
    computed: {
        history(): StoryItem[] {
            //@ts-ignore
            return this.$store.getters.getStoryCat;
        },
        catImage(): {id:string} {
            //@ts-ignore
            return this.$store.getters.getCatImage;
        },
    }

}
</script>

<template>
    <div>
        <v-switch :label="`Turn ${isOpenedPreviews ? 'off' : 'on'} preview`" v-model="isOpenedPreviews"
            color="brown"></v-switch>
        <template v-for="item in history">
            <button v-ripple @click="onRedirect(item)" :class="`history__item ${catImage?.id === item.id && 'active'}`" :disabled="catImage?.id === item.id">
                <div class="text-body2">
                    ID: <strong>{{ item.id }}</strong>
                    <div class="preview-wrapper">
                        <img class="preview-wrapper__img" :src="item.url" alt="" v-if="isOpenedPreviews" />
                    </div>
                </div>
            </button>
        </template>
    </div>
</template>


<style lang="scss" scoped>
.history__item {
    padding: 8px;
    border: 2px solid brown;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 8px;

    &.active {
        background-color: brown;
        color: #fff;
    }
}

.preview-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    &__img {
        height: 70px;
        width: 100%;
        object-fit: contain;
    }
}
</style>