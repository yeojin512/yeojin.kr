<template>
  <section class="page">
    <page-title as="h2" class="sr-only" title="Home" />

    <p class="home-text">반갑습니다 😄</p>
  </section>
</template>

<script>
import PageTitle from "@/components/PageTitle";

export default {
  metaInfo: {
    title: "yeojin",
  },

  components: {
    PageTitle,
  },
};
</script>

<style lang="scss" scoped>
.home-text {
  padding-top: 400px;
  font-size: 90px;
  text-align: center;
}

@media all and (max-width: 1023px) {
  .home-text {
    padding: 200px 0;
    font-size: 60px;
  }
}

@media all and (max-width: 767px) {
  .home-text {
    padding: 100px 0;
    font-size: 35px;
  }
}
</style>
