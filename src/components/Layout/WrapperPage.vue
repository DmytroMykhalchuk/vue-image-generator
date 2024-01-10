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
    <div class="wrapper">
        <v-container fluid>

            <v-row>
                <v-col lg="3" md="3" sm="12" cols="12">
                    <slot name="form"></slot>
                </v-col>
                <v-col lg="6" md="6" sm="12" cols="12">
                    <slot name="content"></slot>
                </v-col>
                <v-col lg="3" md="3" sm="12" cols="12">
                    <slot name="info"></slot>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    max-width: 1260px;
    padding: 0 16px;
    width: 100%;
}
</style>