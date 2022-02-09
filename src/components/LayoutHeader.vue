<template>
  <header class="l-head">
    <logo />

    <gnb />
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import Gnb from "./Gnb.vue";

export default {
  components: {
    Logo,
    Gnb,
  },
};
</script>

<style lang="scss" scoped>
.l-head {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(calc(-50% + -700px));
  width: 200px;
  height: 100%;
  padding: 50px 0 200px;
}

@media all and (max-width: 1700px) {
  .l-head {
    left: 0;
    transform: translateX(0);
    padding-left: 50px;
  }
}

@media all and (max-width: 1023px) {
  .l-head {
    position: static;
    width: 100%;
    height: auto;
    padding: 30px 0;
    text-align: center;
  }
}
</style>
