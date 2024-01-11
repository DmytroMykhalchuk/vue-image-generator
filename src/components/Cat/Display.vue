<script lang="ts">

export default {
    name: 'Display',
    components: {},
    data() {
        return {
            isCopied: false,
            isOpenedPreviews: false,
        };
    },
    computed: {
        catImage(): any {
            //@ts-ignore
            return this.$store.getters.getCatImage;
        },
        waifuStory(): any[] {
            //@ts-ignore
            return this.$store.getters.getStoryWaifu;
        },
        catIsSaved(): any[] {
            //@ts-ignore
            return this.$store.getters.getIsSavedCat;
        },
    },
    methods: {
        onSave() {
            //@ts-ignore
            this.$store.dispatch('saveCatImage')
        },
        onDonwload() {

        },
        onCopy() {
            navigator.clipboard.writeText(this.catImage);
            this.isCopied = true;
        },
        onSelectFavourite(item: any) {
            //@ts-ignore
            this.$store.dispatch('onStoryOpen', item);
        }
    },
    watch: {
        catImage() {
            this.isCopied = false;
        },
    }

}
</script>

<template>
    <div>
        <template v-if="catImage.url">
            <div>
                <div class="actions pa-3">
                    <v-btn icon="mdi-link" @click="onCopy" :disabled="isCopied"></v-btn>
                    <a :href="catImage.url" target="_blank" download="waifu" style="color:inherit;"><v-btn
                            icon="mdi-download" @click="onDonwload"></v-btn></a>
                    <v-btn icon="mdi-heart" @click="onSave"><v-icon :color="catIsSaved ? 'red' : ''"></v-icon></v-btn>

                </div>
                <img class="image elevation-4" ref="imageRef" :src="catImage.url" alt="" />
            </div>
        </template>
        <div class="d-flex justify-content" v-else>
            <p class="text-h6 text-center" style="width: 100%;">
                <template v-if="catImage.isNotFound">
                    {{ $t('not_found_image') }}
                </template>
                <template v-else>
                    {{ $t('no_image') }}
                </template>
            </p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
    max-height: 80vh;
}

.actions {
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 8px;
}

.btn {
    widows: 100%;
    background-color: bisque;
    display: flex;
    padding: 8px;
    border-radius: 16px;
    border: 2px solid brown;
    margin-bottom: 8px;

    &__preppend {
        display: flex;
        text-align: start;
        flex-direction: column;
    }

    &__preview {
        height: 70px;
        object-fit: contain;
        width: 100%;
    }
}
</style>