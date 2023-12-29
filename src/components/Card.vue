<template>
  <div class="card">
    <div class="card__head" v-if="image.length">
      <button
        type="button"
        class="card__button"
        title="레이어 팝업"
        @click.prevent="handleModal"
      >
        <img
          class="card__image"
          :src="require(`@/assets/images/${image[0]}.jpg`)"
          :alt="name"
          loading="lazy"
        />
        <span class="card__more">
          <font-awesome-icon icon="fa-solid fa-plus" />
          이미지 더보기
        </span>
      </button>
    </div>
    <div class="card__body">
      <strong class="card__name">{{ name }}</strong>
      <p class="card__period">
        <em class="card__title">수행기간</em>
        <span class="card__text">{{ period }}</span>
      </p>
      <p class="card__device">
        <em class="card__title">디바이스</em>
        <span class="card__text">{{ device }}</span>
      </p>
      <p class="card__percent">
        <em class="card__title">참여율</em>
        <span class="card__text">{{ percent }}</span>
      </p>
      <p class="card__work" v-if="work.length">
        <em class="card__title">주요업무</em>
        <span class="card__text" v-for="(work, index) in work" :key="index">
          {{ work }}
        </span>
      </p>
      <p class="card__achievement" v-if="achievement.length">
        <em class="card__title">주요성과</em>
        <span
          class="card__text"
          v-for="(achievement, index) in achievement"
          :key="index"
        >
          {{ achievement }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    work: {
      type: Array,
      default: () => [],
    },
    achievement: {
      type: Array,
      default: () => [],
    },
    device: {
      type: String,
      required: true,
    },
    percent: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleModal() {
      this.$emit("handleModal", this.name, this.image);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  $root: &;

  .portfolio--list & {
    &__head,
    &__work,
    &__achievement {
      display: none;
    }

    &__title {
      overflow: hidden;
      position: absolute;
      z-index: -1;
      width: 1px;
      height: 1px;
      font-size: 1px;
      line-height: 2;
      opacity: 0;
    }

    &__name,
    &__period,
    &__device,
    &__percent {
      display: inline-block;
      padding: 15px 5px;
      border-top: 1px solid rgba(var(--background), 0.15);
      background-color: rgba(var(--background), 0.1);
      font-size: 15px;
      color: rgba(var(--text), 0.6);
      text-align: center;
      vertical-align: top;
    }

    &__name {
      width: 41%;
      font-weight: normal;
    }

    &__period {
      width: 25%;
    }

    &__device {
      width: 24%;
    }

    &__percent {
      width: 10%;
    }
  }

  .portfolio--view & {
    border: 1px solid rgba(var(--background), 0.15);
    background-color: rgba(var(--background), 0.1);

    &__head {
      display: block;
    }

    &__button {
      display: block;
      overflow: hidden;
      position: relative;
      width: 100%;

      &:hover::after,
      &:focus::after {
        opacity: 0.6;
      }

      &::before {
        content: "";
        display: block;
        padding-top: 75%;
      }

      &::after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0;
        transition: opacity 0.6s;
        content: "";
      }
    }

    &__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      #{$root}__button:hover #{$root}__image,
      #{$root}__button:focus #{$root}__image {
      }
    }

    &__more {
      opacity: 0;
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      margin-top: 1em;
      font-size: 17px;
      text-align: center;
      color: #fff;
      transition: margin-top 0.6s;

      .svg-inline--fa {
        animation-name: more-icon;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
      }

      @-webkit-keyframes more-icon {
        0% {
          transform: rotate(180deg);
        }
        10% {
          transform: rotate(0deg);
        }
      }
    }

    #{$root}__button:hover #{$root}__more,
    #{$root}__button:focus #{$root}__more {
      opacity: 1;
      margin-top: -0.5em;
    }

    &__body {
      padding: 20px;
    }

    &__title {
      position: absolute;
      top: 0;
      left: 0;
      width: 58px;

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        content: ":";
      }
    }

    &__text {
      display: block;
    }

    &__name {
      display: block;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 400;
      color: rgba(var(--text), 0.8);
    }

    &__period,
    &__device,
    &__percent,
    &__work,
    &__achievement {
      position: relative;
      margin-top: 3px;
      padding-left: 65px;
      font-size: 14px;
      color: rgba(var(--text), 0.6);
    }
  }
}

@media all and (max-width: 1023px) {
  .card {
    $root: &;

    .portfolio--list & {
      &__name,
      &__period,
      &__device,
      &__percent {
        font-size: 14px;
      }
    }

    .portfolio--view & {
      &__name {
        font-size: 15px;
      }

      &__period,
      &__device,
      &__percent,
      &__work,
      &__achievement {
        font-size: 13px;
      }
    }
  }
}

@media all and (max-width: 767px) {
  .card {
    .portfolio--list & {
      &__name,
      &__period,
      &__device,
      &__percent {
        width: 100%;
      }

      &__name {
        background-color: rgba(var(--background), 0.2);
        color: rgba(var(--text), 0.8);
      }
    }
  }
}
</style>
