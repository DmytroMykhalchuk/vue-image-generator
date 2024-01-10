<script lang="ts">
export default {
    name: 'Favourites',
    components: {},
    data() {
        return {
            isOpenedPreviews: false,
        };
    },
    computed: {
        savedWaifus(): any[] {
            //@ts-ignore
            return this.$store.getters.getSavedWaifu;
        },
        waifuImage(): string {
            //@ts-ignore
            return this.$store.getters.getWaifuImage;
        },
    },
    methods: {
        onSelectFavourite(item: any) {
            //@ts-ignore
            this.$store.dispatch('onStoryOpen', item);
        },
    }

}
</script>

<template>
    <div class="wrapper elevation-4">
        <v-switch :label="`Turn ${isOpenedPreviews ? 'off' : 'on'} preview`" v-model="isOpenedPreviews"
            color="brown"></v-switch>
        <template v-for="item in savedWaifus">
            <button :class="`btn ${waifuImage === item.url && 'active'}`" v-ripple @click="onSelectFavourite(item)" :disabled="waifuImage === item.url">
                <div class="btn__preppend">
                    <p class="text-body2 secondary">{{ item.type }}, {{ item.category }}</p>
                    <p class="text-body1 url">{{ item.url }}</p>
                </div>
                <div class="btn__preview">
                    <img v-if="isOpenedPreviews" :src="item.url" alt="">
                </div>
            </button>
        </template>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    padding: 16px;
    border-radius: 16px;

}

.btn {
    width: 100%;
    display: flex;
    padding: 8px;
    border-radius: 16px;
    border: 2px solid brown;
    margin-bottom: 8px;
    overflow: hidden;
    flex-direction: column;
    gap: 8px;

    &.active {
        background-color: brown;
        color: #fff;
    }

    &__preppend {
        display: flex;
        text-align: start;
        flex-direction: column;
    }

    &__preppend .url {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__preview {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    &__preview img {
        height: 70px;
        object-fit: contain;
        width: 100%;
    }
}
</style>