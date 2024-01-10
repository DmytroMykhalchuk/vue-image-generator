<script lang="ts">
import WrapperPage from '@/components/Layout/WrapperPage.vue';
import Form from '@/components/Waifu/Form.vue';
import Display from '@/components/Waifu/Display.vue';
import Favourites from '@/components/Waifu/Favourites.vue';

export default {
  name: 'WaifuView',
  components: { WrapperPage, Form, Display, Favourites },
  data() {
    return {};
  },

}
</script>

<template>
  <WrapperPage>
    <template v-slot:form>
      <Form />
    </template>
    <template v-slot:content>
      <Display />
    </template>
    <template v-slot:info>
      <Favourites />
    </template>
  </WrapperPage>
</template>


<style lang="scss" scoped></style>