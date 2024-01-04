<script lang="ts">
import WrapperPage from '@/components/Layout/WrapperPage.vue';
import Form from '@/components/Waifu/Form.vue';
import Display from '@/components/Waifu/Display.vue';

export default {
  name: 'WaifuView',
  components: { WrapperPage, Form, Display },
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
  </WrapperPage>
</template>


<style lang="scss" scoped></style>