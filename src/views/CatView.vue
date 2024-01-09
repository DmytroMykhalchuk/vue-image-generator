<script lang="ts">
import WrapperPage from '@/components/Layout/WrapperPage.vue';
import Form from '@/components/Cat/Form.vue';
import Display from '@/components/Cat/Display.vue';
import Editing from '@/components/Cat/Editing.vue';

export default {
  name: 'CatView',
  components: { WrapperPage, Form, Display, Editing },
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
      <Editing />
    </template>
  </WrapperPage>
</template>


<style lang="scss" scoped></style>