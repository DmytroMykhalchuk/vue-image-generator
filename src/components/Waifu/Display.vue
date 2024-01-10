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
                    <a :href="waifuImage" target="_blank" download="waifu" style="color:inherit;"><v-btn icon="mdi-download"
                            @click="onDonwload"></v-btn></a>
                    <v-btn icon="mdi-heart" @click="onSave"><v-icon
                            :color="waifuIsSaved ? 'red' : ''"></v-icon></v-btn>
                </div>
                <img class="image elevation-4" ref="imageRef" :src="waifuImage" alt="" />
            </div>
        </template>
        <div class="d-flex justify-content" v-else>
            <p class="text-h6 text-center" style="width: 100%;">No image</p>
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
</style>