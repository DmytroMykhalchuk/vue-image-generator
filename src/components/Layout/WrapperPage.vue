<script lang="ts">
export default {
    name: 'WrapperPage',
    components: {},
    data() {
        return {};
    },

}
</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4">
                <slot name="form"></slot>
            </v-col>
            <v-col md="8">
                <slot name="content"></slot>
            </v-col>
        </v-row>
    </v-container>
</template>


<style lang="scss" scoped></style>