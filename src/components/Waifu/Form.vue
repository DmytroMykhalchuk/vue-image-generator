<script lang="ts">
export type StorySavedType = {
    type: string,
    category: string,
    url: string,
};

type WaifuType = 'SFW' | 'NSFW';

export default {
    name: 'Form',
    components: {},
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
        },
        onRedirect(item: StorySavedType) {
            //@ts-ignore
            this.$store.dispatch('onStoryOpen', item);
        }
    },
    computed: {
        waifuImage(): string {
            //@ts-ignore
            return this.$store.getters.getWaifuImage;
        },
        waifuStory(): StorySavedType[] {
            //@ts-ignore
            return this.$store.getters.getStoryWaifu;
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
    <v-sheet class="form-wrapper elevation-2">
        <p>History</p>
        <v-switch :label="`Turn ${isOpenedPreviewStory ? 'off' : 'on'} preview`" v-model="isOpenedPreviewStory" color="brown"></v-switch>
        <div class="story">
            <template v-for="item in waifuStory">
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