<script lang="ts">
//@ts-ignore
import { catTypes, catFilter, basicColors } from './../../store/modules/constants';
export type CatType = 'square' | 'medium' | 'small' | 'xsmall' | '';

type SavedCatType = {
    id: string,
    tag: string,
}

export default {
    name: 'Editing',
    components: {},
    data() {
        return {
            imageParams: {
                text: {
                    color: null,
                    size: null,
                    sentence: null,
                },
                type: '' as CatType,
                filter: {
                    type: '',
                    r: 0,
                    g: 0,
                    b: 0,
                },
            },
            isOpenedPreviews: false,
            catTypes, catFilter, basicColors,
        };
    },
    methods: {
        onEdit() {
            if (this.imageParams.type != '') {
                this.imageParams.type = '';
            }
            //@ts-ignore
            this.$store.dispatch('fetchEditing', {
                text: this.imageParams.text,
                type: this.imageParams.type,
                filter: this.imageParams.filter,
            })
        },
        onSelectFavourite(item: any) {
            //@ts-ignore
            this.$store.dispatch('onOpenFavourite', item);
        }
    },
    computed: {
        catImage() {
            //@ts-ignore
            return this.$store.getters.getCatImage
        },
        savedCats() {
            //@ts-ignore
            return this.$store.getters.getSavedCat;
        },
        filters(): any {
            //@ts-ignore
            return this.$store.getters.getCatFilter;
        },
    },
    watch: {
        catImage() {
            this.imageParams = {
                text: {
                    color: null,
                    size: null,
                    sentence: null,
                },
                type: '' as CatType,
                filter: {
                    type: '',
                    r: 0,
                    g: 0,
                    b: 0,
                },
            };
        },
        filters(newValue) {
            this.imageParams.type = newValue.type || '';
            this.imageParams.filter = newValue.filter || {
                type: '',
                r: 0,
                g: 0,
                b: 0,
            };
        },
    }

}
</script>

<template>
    <div class="elevation-4 wrapper">
        <v-radio-group :label="$t('editing.type')" v-model="imageParams.type">
            <v-radio label="Default" :value="''" color="brown"></v-radio>
            <template v-for="item in catTypes">
                <v-radio :label="item[0].toUpperCase() + item.slice(1)" :value="item" color="brown"></v-radio>
            </template>
        </v-radio-group>
        <v-radio-group :label="$t('editing.filter')" v-model="imageParams.filter.type">
            <v-radio label="Default" :value="''" color="brown"></v-radio>
            <template v-for="item in catFilter">
                <v-radio :label="item[0].toUpperCase() + item.slice(1)" :value="item" color="brown"></v-radio>
            </template>
        </v-radio-group>
        <div v-if="imageParams.filter.type === 'custom'">
            {{ $t('edititng.customization') }}
            <div class="text-caption">{{ $t('edititng.red') }}</div>
            <v-slider v-model="imageParams.filter.r" color="red" :min="0" :max="256" :step="1" thumb-label></v-slider>
            <div class="text-caption">{{ $t('edititng.green') }}</div>
            <v-slider v-model="imageParams.filter.g" color="green" :min="0" :max="256" :step="1" thumb-label></v-slider>
            <div class="text-caption">{{ $t('edititng.blue') }}</div>
            <v-slider v-model="imageParams.filter.b" color="blue" :min="0" :max="256" :step="1" thumb-label></v-slider>
        </div>
        <div>
            <p class="text-body1">{{ $t('editing.text') }}</p>
            <v-text-field :label="$t('editing.text')" variant="underlined"
                v-model="imageParams.text.sentence"></v-text-field>
            <div class="text-options">
                <v-select :label="$t('editing.color')" v-model="imageParams.text.color" variant="underlined"
                    :items="basicColors"></v-select>
                <v-select :label="$t('editing.font_size')" v-model="imageParams.text.size" variant="underlined"
                    :items="[10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 34, 38, 42, 46, 50, 54]"></v-select>
            </div>
        </div>
        <div class="btn-wrapper">
            <v-btn @click="onEdit" color="brown">{{ $t('edit') }}</v-btn>
        </div>
    </div>
    <div class="elevation-4 wrapper">
        <p class="text-body1">{{ $t('choosed') }}</p>
        <v-switch :label="$t(`${isOpenedPreviews ? 'preview_off' : 'preview_on'}`)" v-model="isOpenedPreviews"
            color="brown"></v-switch>
        <template v-for="item in savedCats">
            <button :class="`btn ${catImage?.url === item.url && 'active'}`" v-ripple @click="onSelectFavourite(item)"
                :disabled="catImage?.url === item.url">
                <div class="btn__info">ID: <strong>{{ item.id }}</strong></div>
                <div class="btn__preview">
                    <img v-if="isOpenedPreviews" :src="item.url" alt="">
                </div>
            </button>
        </template>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 16px;
}

.btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn {
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 8px;
    border: 2px solid brown;
    width: 100%;
    overflow: hidden;

    &.active {
        background-color: brown;
        color: #fff;
    }

    &__info {}

    &__preview {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__preview img {
        height: 70px;
        width: 100%;
        object-fit: contain;
    }
}
</style>