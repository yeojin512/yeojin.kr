<template>
  <div class="l-wrap">
    <layout-header />

    <main class="l-container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>

      <button type="button" class="o-button o-button--top" @click="scrollToTop">
        <font-awesome-icon icon="fa-solid fa-angle-up" />
        <span class="sr-only">본문 상단 이동</span>
      </button>

      <div class="visual-text" aria-hidden="true">JEONG<br />YEO<br />JIN</div>
    </main>

    <layout-footer />
  </div>
</template>

<script>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";

export default {
  components: {
    LayoutHeader,
    LayoutFooter,
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.l-wrap {
  max-width: 1600px;
  min-width: 280px;
  min-height: 800px;
  margin: 0 auto;
  padding-left: 200px;
}

@media all and (max-width: 1023px) {
  .l-wrap {
    min-height: auto;
    padding: 0;
  }
}

.l-container {
  overflow: hidden;
  padding: 70px 50px;
}

@media all and (max-width: 1023px) {
  .l-container {
    padding: 30px;
  }
}

@media all and (max-width: 767px) {
  .l-container {
    padding: 0 20px 30px;
  }
}

.o-button--top {
  display: block;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 1;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(var(--text), 0.6);
  font-size: 20px;
  color: rgba(var(--text), 0.6);
  text-align: center;

  &:hover,
  &:focus {
    border-color: rgba(var(--text), 0.8);
    color: rgba(var(--text), 0.8);
  }

  .svg-inline--fa {
    display: block;
    margin: 0 auto;
  }
}

@media all and (max-width: 1750px) {
  .o-button--top {
    background-color: rgba(var(--background), 0.6);
  }
}

@media all and (max-width: 767px) {
  .o-button--top {
    bottom: 20px;
    right: 20px;
  }
}

.visual-text {
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: -1;
  font-size: 200px;
  line-height: 1;
  font-weight: bold;
  color: rgba(var(--text), 0.02);
  text-align: right;
}

@media all and (max-width: 767px) {
  .visual-text {
    font-size: 100px;
  }
}
</style>
