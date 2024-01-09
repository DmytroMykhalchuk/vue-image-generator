<script lang="ts">

export default {
    name: 'AsideForm',
    components: {},
    data() {
        return {};
    },
    methods: {
    },
    computed: {
    },
    watch: {
    },


}
</script>

<template>
    <v-sheet class="form-wrapper" elevation="2">
        <slot name="form"></slot>
    </v-sheet>
    <v-sheet class="form-wrapper elevation-2">
        <p>History</p>
        <slot name='history'></slot>
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
</style>