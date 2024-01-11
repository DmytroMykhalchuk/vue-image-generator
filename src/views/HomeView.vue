<script lang="ts">
export default {
  name: 'HomeView',
  data() {
    return {
      isConfirmed: false,
      language: 'EN',
    };
  },
  mounted() {
    //@ts-ignore
    this.isConfirmed = this.$store.getters.getIsConfirmedRights;
    this.language = this.$i18n.locale.toLocaleUpperCase();
  },
  methods: {
    onCheck() {
      //@ts-ignore
      this.$store.dispatch('onChangeCinfirmation', this.isConfirmed);
    },
    onChangeLanguage() {
    }
  },
  watch: {
    language(newValue) {
      const formattedLocale = newValue.toLocaleLowerCase();
      if (this.$i18n.locale === formattedLocale) {
        return;
      }
      this.$i18n.locale = formattedLocale;
      localStorage.setItem('locale', formattedLocale)
      window.location.reload();
    }
  }
}
</script>

<template>
  <v-app>
    <div class="wrapper">
      <div class="wrapper__contetn language__wrapper">
        <v-select :label="$t('language')" v-model="language" s variant="underlined" :items="['EN', 'UK']"
          @input="onChangeLanguage"></v-select>
      </div>
      <div class="wrapper__content primary-border">
        <h1 class="text-h4 text-center mb-4">{{ $t('home_disclaimer.title') }}</h1>
        <p>
          {{ $t('home_disclaimer.content') }}
        </p>
        <v-checkbox :label="$t('home_disclaimer.confirmation')" v-model="isConfirmed" @change="onCheck"></v-checkbox>
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
  flex-direction: column;

  &__content {
    width: min(700px, 90vw);
    padding: 16px;
    border-radius: 16px;
  }
}

.language__wrapper {
  min-width: 80px;
}
</style>
