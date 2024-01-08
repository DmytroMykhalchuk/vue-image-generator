<script lang="ts">
import type { StorySavedType } from '../Layout/AsideForm.vue';


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
        waifuImage(): any {
            //@ts-ignore
            return this.$store.getters.getWaifuImage;
        },
        waifuStory(): any[] {
            //@ts-ignore
            return this.$store.getters.getStoryWaifu;
        },
        waifuIsSaved(): any[] {
            //@ts-ignore
            return this.$store.getters.getIsSavedWaifu;
        },
        savedWaifus(): StorySavedType[] {
            //@ts-ignore
            return this.$store.getters.getSavedWaifu;
        },
    },
    methods: {
        onSave() {
            //@ts-ignore
            this.$store.dispatch('saveImage')
        },
        onDonwload() {

        },
        onCopy() {
            navigator.clipboard.writeText(this.waifuImage);
            this.isCopied = true;
        },
        onSelectFavourite(item: any) {
            //@ts-ignore
            this.$store.dispatch('onStoryOpen', item);
        }
    },
    watch: {
        waifuImage() {
            this.isCopied = false;
        },
    }

}
</script>

<template>
    <div>
        <template v-if="waifuImage">
            <div>
                <div class="actions pa-3">
                    <v-btn icon="mdi-link" @click="onCopy" :disabled="isCopied"></v-btn>
                    <a :href="waifuImage" target="_blank" download="waifu"><v-btn icon="mdi-download"
                            @click="onDonwload"></v-btn></a>
                    <v-btn icon="mdi-heart" @click="onSave"><v-icon
                            :color="waifuIsSaved ? 'red' : 'black'"></v-icon></v-btn>

                </div>
                <img class="image elevation-2" ref="imageRef" :src="waifuImage" alt="" />
            </div>
        </template>
        <div class="d-flex justify-content" v-else>
            <p class="text-h6 text-center" style="width: 100%;">No image</p>
        </div>
        <v-sheet class="elevation-2 pa-3 d-flex flex-column" v-if="savedWaifus.length">
            <v-switch :label="`Turn ${isOpenedPreviews ? 'off' : 'on'} preview`" v-model="isOpenedPreviews"
                color="brown"></v-switch>
            <template v-for="item in savedWaifus">
                <button class="btn" v-ripple @click="onSelectFavourite(item)">
                    <div class="btn__preppend">
                        <p class="text-body2 secondary">{{ item.type }}, {{ item.category }}</p>
                        <p class="text-body1">{{ item.url }}</p>
                    </div>
                    <img class="btn__preview" v-if="isOpenedPreviews" :src="item.url" alt="">
                </button>
            </template>
        </v-sheet>

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