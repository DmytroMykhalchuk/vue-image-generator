<script lang="ts">
import AsideForm from '../Layout/AsideForm.vue';
import type { CatType } from './Editing.vue';
import CatStory from './CatStory.vue';

export type CatSaved = { url: string, id: string };

type Filters = {
    tag: string,
    type: CatType,
};

export default {
    name: 'Form',
    components: { AsideForm, CatStory },
    data() {
        return {
            isFetching: false,
            isOpenedPreviewStory: false,
            searchParams: {
                tag: null as string | null,
                isOpenFullTags: false,

            },
            ut: [] as string[],
        };
    },
    mounted() {
        //@ts-ignore
        // this.$store.dispatch('fetchTags')
    },
    methods: {
        // onSelectSFW(category: string) {
        //     this.selected.SFW = category;
        // },
        onSelectTag(tag: string) {
            this.searchParams.tag = tag;
        },
        onSearch() {
            this.isFetching = true;
            const params = {
                tag: this.searchParams.tag,
            };
            //@ts-ignore
            this.$store.dispatch('fetchCatImage', params);
        },
        onRandomize() {
            //@ts-ignore
            this.$store.dispatch('fetchCatImage', {});
        },

        // onRedirect(item: StorySavedType) {
        //     //@ts-ignore
        //     this.$store.dispatch('onStoryOpen', item);
        // }
    },
    computed: {
        catImage(): string {
            //@ts-ignore
            return this.$store.getters.getCatImage;
        },
        filters(): Filters {
            //@ts-ignore
            return this.$store.getters.getCatFilter;
        },
        catTags(): { isError: boolean, tags: string[] } {
            //@ts-ignore
            return this.$store.getters.getCatTags;
        },
        catHistory(): CatSaved[] {
            //@ts-ignore
            return this.$store.getters.getStoryCat
        },
    },
    watch: {
        catImage(newValue) {
            this.isFetching = false;
        },
        filters(newValue: Filters) {
            console.log(newValue)
            this.searchParams.tag = newValue.tag;
        },
    },

}
</script>

<template>
    <AsideForm>
        <template v-slot:history>
            <CatStory />
        </template>
        <template v-slot:form>
            <div class="top-actions">
                <v-btn @click="onRandomize">Random</v-btn>
                <v-btn @click="onSearch">Regenerate</v-btn>
            </div>
            <div>
                <v-switch :label="`See ${isOpenedPreviewStory ? 'less' : 'more'} tags`"
                    v-model="searchParams.isOpenFullTags" color="brown"></v-switch>
                <template v-if="searchParams.isOpenFullTags" v-for="item in catTags.tags">
                    <v-chip class="ma-1" color="brown" :variant="searchParams.tag === item ? 'flat' : 'outlined'"
                        @click="onSelectTag(item)">{{ item }}</v-chip>
                </template>

                <template v-else>
                    <v-select label="Tag" chips closableChips v-model="searchParams.tag" :items="catTags.tags"></v-select>
                </template>
            </div>
            <div class="d-flex justify-center align-center pt-5">
                <v-btn color="brown" :loading="isFetching" @click="onSearch">Find</v-btn>
            </div>
        </template>
    </AsideForm>
</template>


<style lang="scss" scoped>
.top-actions {
    display: flex;
    gap: 8px;
    justify-content: end;
}
</style>
