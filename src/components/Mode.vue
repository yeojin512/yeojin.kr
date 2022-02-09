<template>
  <div class="mode">
    <button type="button" class="mode__button" @click="handleModeType">
      <template v-if="modeType === 'light'">
        <font-awesome-icon icon="fa-solid fa-moon" key="sun" />
      </template>
      <template v-else>
        <font-awesome-icon icon="fa-solid fa-sun" key="moon" />
      </template>
      <font-awesome-icon icon="fa-solid fa-cloud" />
      {{ modeText.text }} 모드로 보기
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modeType: "dark",
    };
  },

  computed: {
    modeText() {
      if (this.modeType === "dark") {
        return {
          text: "라이트",
        };
      }
      return {
        text: "다크",
      };
    },
  },

  methods: {
    handleModeType() {
      this.modeType = this.modeType === "dark" ? "light" : "dark";

      document.documentElement.classList.remove("mode-light", "mode-dark");
      document.documentElement.classList.add(`mode-${this.modeType}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.mode {
  position: relative;
  margin: 0 0 20px 10px;

  &__button {
    display: block;
    font-size: 13px;
    line-height: 28px;
    color: rgba(var(--text), 0.5);

    &:hover,
    &:focus {
      color: rgba(var(--text), 0.8);
    }
  }

  .fa-sun,
  .fa-moon {
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: -1;
    font-size: 20px;
    color: #ffcb37;
    animation-name: mode-button;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes mode-button {
    0% {
      top: 5px;
      left: 5px;
    }
    100% {
      top: -10px;
      left: -10px;
    }
  }

  .fa-cloud {
    margin-right: 5px;
    font-size: 26px;
    vertical-align: top;
    color: #fff;
  }

  @at-root .mode-light {
    .fa-cloud {
      color: #87ceeb;
    }
  }
}

@media all and (max-width: 1023px) {
  .mode {
    display: inline-block;
  }
}
</style>
