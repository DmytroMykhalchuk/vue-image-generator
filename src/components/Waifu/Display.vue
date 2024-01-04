<script lang="ts">
export default {
    name: 'Display',
    components: {},
    data() {
        return {
            isCopied: false,
        };
    },
    computed: {
        waifuImage(): any {
            //@ts-ignore
            return this.$store.getters.getWaifuImage;
        },
    },
    methods: {
        onSave() { },

        onDonwload() {
            fetch(this.waifuImage)
                .then(response => response.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = this.waifuImage;
                    a.download = 'waifu'; // Назва файлу для завантаження
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                })
                .catch(error => console.error('Помилка під час завантаження та збереження зображення:', error));
        },
        onCopy() {
            navigator.clipboard.writeText(this.waifuImage);
            this.isCopied = true;
        },
    },

}
</script>

<template>
    <div>
        <template v-if="waifuImage">
            <div>
                <div class="actions pa-3">
                    <v-btn icon="mdi-link" @click="onCopy" :disabled="isCopied"></v-btn>
                    <v-btn icon="mdi-download" @click="onDonwload"></v-btn>
                    <v-btn icon="mdi-heart" @click="onDonwload"></v-btn>

                </div>
                <img class="image elevation-2" :src="waifuImage" alt="" />
            </div>
        </template>
        <div class="d-flex justify-content" v-else>
            <p class="text-h6">Not found</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
}

.actions {
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 8px;
}
</style>