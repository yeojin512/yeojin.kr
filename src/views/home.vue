<template>
  <div class="page">
    <page-title as="h2" class="sr-only" title="Home" />

    <p class="home-text">반갑습니다 😄</p>
  </div>
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 90px;
  white-space: nowrap;
}

@media all and (max-width: 1023px) {
  .home-text {
    font-size: 60px;
  }
}

@media all and (max-width: 767px) {
  .home-text {
    font-size: 35px;
  }
}
</style>
