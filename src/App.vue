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
    <div class="d-flex">
      <SideBar />
      <v-main>
        <RouterView />
      </v-main>
    </div>
  </v-app>
</template>

<style scoped lang="scss"></style>
