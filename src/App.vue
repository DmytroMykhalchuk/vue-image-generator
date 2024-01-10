<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBar from '@/components/Layout/SideBar.vue'

export default {
  name: 'App',
  components: { SideBar },
  data() {
    return {
    }
  },

}
</script>

<template>
  <v-app>
      <v-main class="main">
        <div class="d-flex">
          <SideBar />
          <div class="main__content">
            <RouterView />
          </div>
        </div>
      </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.main {
  padding-top: 0;

  &__content {
    margin: 0 auto;
    background-color: var(--v-theme-page-background);
    padding-top: 24px;
    display: flex;
    width: 100%;
    flex-direction: column;
  }
}

@media (max-width: 998px) {
  .main {
    padding-top: 70px;
  }
}
</style>
