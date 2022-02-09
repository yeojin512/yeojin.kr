<template>
  <h1 class="logo">
    <span class="sr-only">{{ text }}</span>
  </h1>
</template>

<script>
export default {
  data() {
    return {
      text: "JEONG YEO JIN",
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  overflow: hidden;
  width: 150px;
  height: 150px;
  margin: 20px 0;
  border-radius: 50%;
  background: var(--point) url("../assets/images/img_jeongyeojin.png") no-repeat
    50% -15px / 150% auto;

  &:hover {
    background-image: url("../assets/images/img_jeongyeojin_hi.webp");
    background-position: calc(50% - 5px) -9px;
  }
}

@media all and (max-width: 1023px) {
  .logo {
    width: 100px;
    height: 100px;
    margin: 0 auto;

    &:hover {
      background-position: calc(50% - 3px) -11px;
    }
  }
}
</style>
