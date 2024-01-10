<script lang="ts">
import AsideForm from '../Layout/AsideForm.vue';
import WaifuStory from './WaifuStory.vue';
const waifuStorageKey = 'nswf_extended';

type WaifuType = 'SFW' | 'NSFW';

export default {
    name: 'Form',
    components: { AsideForm, WaifuStory },
    data() {
        return {
            type: 'SFW' as WaifuType,
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
            isOpenedPreviewStory: false,
            isExtendedVersion: false,
        };
    },
    mounted() {
        if (localStorage.getItem(waifuStorageKey)) {
            this.isExtendedVersion = true;
        } else {
            const { searchParams } = new URL(window.location.href);
            if (searchParams.get('nsfw')) {
                localStorage.setItem(waifuStorageKey, '1');
                this.isExtendedVersion = true;
            }
        }
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
        },
    },
    computed: {
        waifuImage(): string {
            //@ts-ignore
            return this.$store.getters.getWaifuImage;
        },
        waifuOpenedStory(): { type: WaifuType, category: string } {
            //@ts-ignore
            return this.$store.getters.getWaifuStory
        }
    },
    watch: {
        waifuImage(newValue) {
            this.isFetching = false;
        },
        waifuOpenedStory(newValue: { type: string, category: string }) {
            if (newValue?.type) {
                const newType = newValue.type.toUpperCase() as WaifuType;
                this.type = newType;
                this.selected[newType] = newValue.category;
            }
        }
    },


}
</script>

<template>
    <AsideForm>
        <template v-slot:history>
            <WaifuStory />
        </template>
        <template v-slot:form>
            <v-radio-group label="Type" v-model="type">
                <v-radio label="SFW" value="SFW" color="brown"></v-radio>
                <v-radio label="NSFW" value="NSFW" color="brown" :disabled="!isExtendedVersion"></v-radio>
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
        </template>
    </AsideForm>
</template>


<style lang="scss" scoped></style>