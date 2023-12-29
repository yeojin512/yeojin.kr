<template>
  <section
    class="modal"
    tabindex="0"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    :class="{ 'is-active': modalState }"
  >
    <div class="dimmed" aria-hidden="true">&nbsp;</div>

    <div class="modal__wrap">
      <h1 class="modal__title" id="modal-title">{{ modalName }}</h1>

      <div class="modal__content" tabindex="0">
        <button
          class="slick-arrow slick-prev"
          type="button"
          @click="prev"
          :disabled="disabledPrev"
        >
          <font-awesome-icon icon="fa-solid fa-angle-left" />
          <span class="sr-only">이전</span>
        </button>
        <button
          class="slick-arrow slick-next"
          type="button"
          @click="next"
          :disabled="disabledNext"
        >
          <font-awesome-icon icon="fa-solid fa-angle-right" />
          <span class="sr-only">이전</span>
        </button>
        <slick
          ref="slick"
          v-if="modalImage.length > 0 && modalState"
          :options="slickOptions"
          @init="handleInit"
          @afterChange="handleAfterChange"
        >
          <div
            class="modal__image"
            v-for="(modalImage, index) in modalImage"
            :key="index"
          >
            <img :src="require(`@/assets/images/${modalImage}.jpg`)" alt="" loading="lazy"/>
          </div>
        </slick>
      </div>
    </div>

    <button class="modal__close" @click="handleModal()">
      <font-awesome-icon icon="fa-solid fa-xmark" />
      <span class="sr-only">레이어 팝업 닫기</span>
    </button>
  </section>
</template>

<script>
import Slick from "vue-slick";

export default {
  components: {
    Slick,
  },

  props: ["modalState", "modalName", "modalImage"],

  data() {
    return {
      currentSlide: 0,
      slideCount: 0,
      slickOptions: {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
        dots: true,
      },
    };
  },

  computed: {
    disabledPrev() {
      return this.currentSlide === 0;
    },
    disabledNext() {
      return this.currentSlide === this.slideCount - 1;
    },
  },

  methods: {
    handleModal() {
      this.$emit("update:modalState", false);
    },

    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    handleInit(event, slick) {
      this.$nextTick(() => {
        slick.setPosition();
      });
    },

    handleAfterChange(event, slick) {
      this.currentSlide = slick.currentSlide;
      this.slideCount = slick.slideCount;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 1000px;
  opacity: 0;
  z-index: -999;
  animation-duration: 300ms;

  &.is-active {
    display: block;
    opacity: 1;
    z-index: 901;
  }

  &__wrap {
    position: fixed;
    z-index: 910;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    transition: opacity 500ms;
  }

  &__title {
    display: block;
    position: absolute;
    top: -70px;
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    color: rgba(var(--text), 0.8);
  }

  &__close {
    position: fixed;
    top: auto;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 920;
    width: 46px;
    height: 46px;
    border: 1px solid rgba(var(--text), 0.5);
    border-radius: 50%;
    font-size: 32px;
    color: rgba(var(--text), 0.5);

    &:hover,
    &:focus {
      color: rgba(var(--text), 0.8);
    }
  }

  &__content {
    position: relative;
    max-width: 800px;
    border: 1px solid rgba(var(--background), 0.4);
    text-align: center;
  }

  &__image {
    display: block;
    overflow: hidden;
    position: relative;
    width: 800px !important;
    margin: 0 auto;
    vertical-align: top;

    &::before {
      content: "";
      display: block;
      padding-top: 75%;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      aspect-ratio: 40/107;
    }
  }

  &__button {
    display: block;
    position: absolute;
    z-index: 2;
    margin-right: 0;

    &--prev {
      top: 50%;
      left: 40px;
      width: 60px;
      height: 60px;
      font-size: 3.5em;
      -ms-transform: translate(0, -75%);
      transform: translate3d(0, -75%, 0);
      opacity: 0.5;
    }
    &--next {
      top: 50%;
      right: 40px;
      width: 60px;
      height: 60px;
      font-size: 3.5em;
      -ms-transform: translate(0, -75%);
      transform: translate3d(0, -75%, 0);
      opacity: 0.5;
    }
    &--stop {
      bottom: 0;
      right: 60px;
      width: 20px;
      height: 20px;
      font-size: 1.5em;
      opacity: 0.5;
    }
    &--play {
      bottom: 0;
      right: 30px;
      width: 20px;
      height: 20px;
      font-size: 1.5em;
      opacity: 0.5;
    }
  }
}

@media all and (max-width: 1023px) {
  .modal {
    &__content {
      position: relative;
      max-width: 700px;
    }

    &__image {
      width: 700px !important;
    }
  }
}

@media all and (max-width: 767px) {
  .modal {
    &__content {
      position: relative;
      max-width: 270px;
    }

    &__image {
      width: 270px !important;
    }
  }
}

.dimmed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 100%;
  background-color: #333;

  @at-root .mode-light & {
    background-color: #fffef3;
  }
}

::v-deep .slick-arrow {
  position: absolute;
  top: 50%;
  z-index: 10;
  width: 60px;
  height: 60px;
  transform: translateY(-50%);
  color: rgba(var(--text), 0.5);
  cursor: pointer;

  .svg-inline--fa {
    height: 50px;
  }

  &:hover,
  &:focus {
    color: rgba(var(--text), 0.8);
  }

  &:disabled {
    color: rgba(var(--text), 0.2) !important;
  }

  &.slick-prev {
    left: -100px;
  }

  &.slick-next {
    right: -100px;
  }
}

::v-deep .slick-dots {
  display: block;
  position: absolute;
  bottom: -30px;
  width: 100%;
  font-size: 0;

  li {
    display: inline-block;
    margin: 0 4px;
  }

  button {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--point);
    opacity: 0.4;
  }

  .slick-active button {
    opacity: 1;
  }
}

@media all and (max-width: 1023px) {
  ::v-deep .slick-arrow {
    display: none;
  }
}
</style>
