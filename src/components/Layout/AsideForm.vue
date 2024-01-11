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
    <div style="width: 100%;">
        <div class="form-wrapper elevation-4">
            <slot name="form"></slot>
        </div>
        <div class="form-wrapper elevation-4">
            <p>{{ $t('history') }}</p>
            <slot name='history'></slot>
            <p class="text-caption">
                {{ $t('history_remark', { count: 20 }) }}
            </p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import './../../assets/styles/global.scss';

.form-wrapper {
    border-radius: 16px;
    padding: 16px;
    width: 100%;
    margin-bottom: 16px;
}
</style>