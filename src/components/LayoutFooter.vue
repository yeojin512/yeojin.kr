<template>
  <footer class="l-foot">
    <Mode />

    <small class="copyright">2014 yeojin, jeong Portfolio</small>
  </footer>
</template>

<script>
import Mode from "./Mode.vue";
export default {
  components: {
    Mode,
  },
};
</script>

<style scoped lang="scss">
.l-foot {
  display: block;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(calc(-50% + -700px));
  width: 200px;
}

@media all and (max-width: 1700px) {
  .l-foot {
    left: 0;
    transform: translateX(0);
    padding-left: 30px;
  }
}

@media all and (max-width: 1023px) {
  .l-foot {
    position: static;
    width: 100%;
    height: auto;
    padding: 30px 0;
    text-align: center;
  }
}

.copyright {
  display: block;
  font-size: 14px;
  color: rgba(var(--text), 0.6);
}

@media all and (max-width: 767px) {
  .copyright {
    font-size: 12px;
  }
}
</style>
