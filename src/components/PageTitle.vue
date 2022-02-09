<template>
  <component :is="as">{{ title }}</component>
</template>

<script>
export default {
  props: ["as", "title"],
};
</script>

<style lang="scss" scoped>
.page__title {
  display: block;
  margin-bottom: 30px;
  font-size: 48px;
  font-weight: bold;
  color: var(--point);
}

@media all and (max-width: 1023px) {
  .page__title {
    font-size: 30px;
  }
}

@media all and (max-width: 767px) {
  .page__title {
    font-size: 25px;
  }
}
</style>
