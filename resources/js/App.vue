<template>
  <div class="main">
    <router-view :key="updateLocaleTime"></router-view>
  </div>
</template>

<script>
export default {
  metaInfo: {
    meta: [ /* Your meta data here */ ],
  },

  data() {
    return {
      updateLocaleTime: 0,
    };
  },

  methods: {
    changeLocale(locale) {
      this.updateLocaleTime++;
    },
  },

  created() {
    this.$bus.$on("changeLocale", this.changeLocale);
  },
};
</script>

<style>
</style>
