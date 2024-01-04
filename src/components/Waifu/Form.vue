<script lang="ts">
export default {
    name: 'Form',
    components: {},
    data() {
        return {
            type: 'SFW' as 'SFW' | 'NSFW',
            sfwCategories: [
                'waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'hug', 'awoo', 'kiss', 'lick', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'glomp', 'slap', 'kill', 'kick', 'happy', 'wink', 'poke', 'dance', 'cringe',
            ],
            nsfwCategories: [
                'waifu', 'neko', 'trap', 'blowjob',
            ],
            selected: {
                SFW: 'waifu',
                NSFW: 'waifu',
            },
            isFetching: false,
        };
    },
    methods: {
        onSelectSFW(category: string) {
            this.selected.SFW = category;
        },
        onSelectNSFW(category: string) {
            this.selected.NSFW = category;
        },
        onSearch() {
            this.isFetching = true;
            const params = {
                type: this.type.toLocaleLowerCase(),
                category: this.selected[this.type],
            };
            //@ts-ignore
            this.$store.dispatch('fetchWaifuImages', params);
        }
    },
    computed: {
        waifuImage(): any {
            //@ts-ignore
            return this.$store.getters.getWaifuImage;
        },
    },
    watch: {
        waifuImage(newValue) {
            this.isFetching = false;
        },
    },


}
</script>

<template>
    <v-sheet class="form-wrapper" elevation="2">
        <v-radio-group label="Type" v-model="type">
            <v-radio label="SFW" value="SFW" color="brown"></v-radio>
            <v-radio label="NSFW" value="NSFW" color="brown"></v-radio>
        </v-radio-group>
        <template v-if="type === 'SFW'" v-for="item in sfwCategories">
            <v-chip class="ma-1" color="brown" :variant="item === selected.SFW ? 'flat' : 'outlined'"
                @click="onSelectSFW(item)">{{ item }}</v-chip>
        </template>
        <template v-if="type === 'NSFW'" v-for="item in nsfwCategories">
            <v-chip class="ma-1" color="brown" :variant="item === selected.NSFW ? 'flat' : 'outlined'"
                @click="onSelectNSFW(item)">{{ item }}</v-chip>
        </template>
        <div class="d-flex justify-center align-center pt-5">
            <v-btn color="brown" :loading="isFetching" @click="onSearch">Find</v-btn>
        </div>
    </v-sheet>
</template>


<style lang="scss" scoped>
.form-wrapper {
    background-color: #fff;
    border-radius: 16px;
    padding: 16px;
    width: 100%;
    position: sticky;
    top: 20px;
}
</style>