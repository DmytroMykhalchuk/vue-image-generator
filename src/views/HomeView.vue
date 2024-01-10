<script lang="ts">
export default {
  name: 'HomeView',
  data() {
    return {};
  },
}
</script>

<template>
  <v-app>
    <div class="wrapper">
      <div class="wrapper__content primary-border">
        <h1 class="text-h4 text-center">Diclaimer</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ducimus ipsa impedit sed dolores, dolorum
          in quisquam! Veritatis nobis doloribus, consequatur magnam ipsam molestiae aut at vitae eaque maxime corrupti.
        </p>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
@import './../assets/styles/global.scss';
.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    width: min(700px, 90vw);
    padding: 16px;
    border-radius: 16px;
  }
}
</style>
