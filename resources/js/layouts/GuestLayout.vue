<template>
  <div class="guest-layout">
    <div class="fixed-top d-flex justify-content-end">
      <a
        href="javascript:void(0)"
        v-for="locale in locales"
        :key="locale"
        class="d-inline-block px-1 text-decoration-none text-uppercase"
        @click="changeLocale(locale)"
      >
        {{ locale }}
      </a>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { getLocale, getLocales } from "../helpers";

const locales = getLocales();

export default {
  name: "GuestLayout",
  data() {
    return {
      locales: locales,
    };
  },
  methods: {
    changeLocale(locale) {
      let currentLocale = getLocale();
      if (locale !== currentLocale) {
        this.$store.dispatch("locale/setLocale", { locale: locale });
        this.$bus.$emit("changeLocale", locale);
      }
    },
  },
};
</script>

<style>
</style>
