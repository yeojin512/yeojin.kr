<template>
  <nav id="nav" class="gnb" aria-label="메뉴">
    <router-link to="/" class="gnb__anchor">Home</router-link>
    <router-link to="/about" class="gnb__anchor">About</router-link>
    <router-link to="/portfolio" class="gnb__anchor">Portfolio</router-link>
    <a
      class="gnb__anchor"
      href="https://blog.yeojin.kr"
      target="_blank"
      title="새 창 열림"
      >Blog</a
    >
  </nav>
</template>

<style lang="scss" scoped>
.gnb {
  &__anchor {
    position: relative;
    display: table;
    padding: 10px 7px;
    font-size: 18px;
    color: rgba(var(--text), 0.8);
    text-align: center;

    &::before {
      position: absolute;
      bottom: 12px;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 8px;
      background-color: var(--point);
      content: "";
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    @at-root .router-link-exact-active {
      font-weight: bold;
    }

    @at-root .router-link-exact-active,
      &:hover,
      &:focus {
      &::before {
        opacity: 0.6;
      }
    }
  }
}

@media all and (max-width: 1023px) {
  .gnb {
    margin-top: 20px;

    &__anchor {
      display: inline-block;
      margin: 0 10px;
    }
  }
}

@media all and (max-width: 767px) {
  .gnb {
    margin-top: 15px;

    &__anchor {
      margin: 0 5px;
      font-size: 15px;
    }
  }
}
</style>
