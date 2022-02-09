<template>
  <div class="page">
    <page-title as="h2" class="page__title" title="Portfolio" />

    <div class="tab" aria-label="보기 선택">
      <button
        class="tab__button"
        :class="{ 'is-active': viewType === 'view' }"
        @click="handleViewType('view')"
      >
        <font-awesome-icon icon="fa-solid fa-grip-vertical" />앨범형
      </button>
      <button
        class="tab__button"
        :class="{ 'is-active': viewType === 'list' }"
        @click="handleViewType('list')"
      >
        <font-awesome-icon icon="fa-solid fa-list" />목록형
      </button>
    </div>

    <div
      class="portfolio"
      :class="{
        [`portfolio--${viewType}`]: true,
      }"
    >
      <page-title
        as="h3"
        class="sr-only"
        :title="`포트폴리오 ${viewType === 'view' ? '앨범' : '목록'}형`"
      />

      <div class="portfolio__head" aria-hidden="true">
        <span class="portfolio__name">프로젝트명</span>
        <span class="portfolio__period">수행기간</span>
        <span class="portfolio__device">디바이스</span>
        <span class="portfolio__percent">참여율</span>
      </div>

      <ul
        v-masonry="containerId"
        transition-duration="0.3s"
        item-selector=".grid__item"
        class="grid"
      >
        <li
          v-masonry-tile
          class="grid__item"
          v-for="(item, index) in portfolioList"
          :key="index"
        >
          <card
            :image="item.image"
            :name="item.name"
            :period="item.period"
            :work="item.work"
            :achievement="item.achievement"
            :device="item.device"
            :percent="item.percent"
            @handleModal="onOpenModal"
          />
        </li>
      </ul>
    </div>

    <Modal
      :modalState.sync="modalState"
      :modalName="modalName"
      :modalImage="modalImage"
    />
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import Modal from "@/components/Modal";
import Card from "@/components/Card";

export default {
  metaInfo: {
    title: "Portfolio | yeojin",
  },

  components: {
    PageTitle,
    Modal,
    Card,
  },

  data() {
    return {
      containerId: "list",
      viewType: "view", // [ view, list ]
      modalState: false,
      modalName: "",
      modalImage: [],
      portfolioList: [
        {
          name: "롯데ON 통합 검색 운영",
          period: "2021.08.10 ~ 진행중",
          device: "Desktop, Mobile",
          percent: "-",
          work: ["검색파트 운영"],
        },
        {
          name: "푸본현대생명",
          period: "2021.03.09 ~ 2021.07.31",
          device: "Desktop, Mobile",
          percent: "25%",
          work: ["가이드라인 제작"],
          achievement: ["웹접근성 마크 획득"],
          image: [
            "img_fubon_1",
            "img_fubon_2",
            "img_fubon_3",
            "img_fubon_4",
            "img_fubon_5",
            "img_fubon_6",
            "img_fubon_7",
          ],
        },
        {
          name: "삼성닷컴 P6 리뉴얼",
          period: "2019.12,02 ~ 2020.01.31",
          device: "Responsive Web",
          percent: "25%",
          work: ["컴포넌트 제작"],
          achievement: ["Adobe CQ5솔루션(AEM) 기반 프로젝트 경험"],
        },
        {
          name: "포스코 MES 3.0 UI/UX 개선 - 압연 파트",
          period: "2019.01.01 ~ 2019.10.31",
          device: "Desktop",
          percent: "50%",
        },
        {
          name: "KB생명보험 디지털 채널 시스템",
          period: "2018.08.07 ~ 2018.10.22",
          device: "Desktop",
          percent: "25%",
          work: ["가이드라인 제작"],
          image: [
            "img_kbli_1",
            "img_kbli_2",
            "img_kbli_3",
            "img_kbli_4",
            "img_kbli_5",
          ],
        },
        {
          name: "SK Nshop",
          period: "2018.06.26 ~ 2018.08.03",
          device: "Desktop",
          percent: "70%",
          image: [
            "img_sknshop_1",
            "img_sknshop_2",
            "img_sknshop_3",
            "img_sknshop_4",
            "img_sknshop_5",
            "img_sknshop_6",
          ],
        },
        {
          name: "롯데호텔 글로벌 웹앱시스템",
          period: "2018.04.19 ~ 2018.06.18",
          device: "Responsive Web",
          percent: "20%",
          achievement: ["Adobe CQ5솔루션(AEM) 기반 프로젝트 경험"],
          image: [
            "img_lottehotel_1",
            "img_lottehotel_2",
            "img_lottehotel_3",
            "img_lottehotel_4",
            "img_lottehotel_5",
            "img_lottehotel_6",
            "img_lottehotel_7",
            "img_lottehotel_8",
            "img_lottehotel_9",
            "img_lottehotel_10",
          ],
        },
        {
          name: "삼성 판매접점 관리시스템",
          period: "2017.10.30 ~ 2018.02.28",
          device: "Mobile, Desktop",
          percent: "40%",
        },
        {
          name: "포스코 POSPIA 3.0 Lite UI 개선 - 조업 파트",
          period: "2017.05.10 ~ 2017.07.09",
          device: "Desktop",
          percent: "100%",
          work: ["JSP 개발 코드 직접 수정"],
        },
        {
          name: "한샘몰 쇼핑몰",
          period: "2017.01.16 ~ 2017.04.07",
          device: "Mobile",
          percent: "50%",
          image: [
            "img_hanssemmall_1",
            "img_hanssemmall_2",
            "img_hanssemmall_3",
          ],
        },
        {
          name: "KB캐피탈 자산관리 시스템",
          period: "2016.08.16 ~ 2017.01.15",
          device: "Responsive Web",
          percent: "100%",
          image: ["img_kbcapital_1", "img_kbcapital_2"],
        },
        {
          name: "LG 하우시스 Z:IN",
          period: "2016.03.07 ~ 2016.06.17",
          device: "Mobile, Desktop",
          percent: "100%",
          work: ["가이드라인 제작"],
          image: [
            "img_zin_1",
            "img_zin_2",
            "img_zin_3",
            "img_zin_4",
            "img_zin_5",
          ],
        },
        {
          name: "포스코 탄소강 표준모델 MES UI 개선",
          period: "2016.01.01 ~ 2016.02.28",
          device: "Desktop",
          percent: "30%",
          work: ["JSP 개발 코드 직접 수정"],
        },
        {
          name: "한미약품 IT 홈차트",
          period: "2015.10.01 ~ 2015.12.31",
          device: "Responsive Web",
          percent: "100%",
          work: ["가이드라인 제작"],
          image: [
            "img_homechart_1",
            "img_homechart_2",
            "img_homechart_3",
            "img_homechart_4",
            "img_homechart_5",
          ],
        },
        {
          name: "브랜드 아모레퍼시픽",
          period: "2015.07.01 ~ 2015.08.30",
          device: "Responsive Web",
          percent: "70%",
          work: [
            "1. 퍼블리싱 PL ",
            "2. 레이아웃, 메인 마크업",
            "3. 가이드라인 제작",
          ],
          achievement: [
            "1. 웹접근성 마크 획득",
            "2. Adobe CQ5솔루션(AEM) 기반 프로젝트 경험",
            "3. 웹어워드 2015 모바일웹 마케팅부문 통합대상 수상",
          ],
          image: [
            "img_amorepacific_1",
            "img_amorepacific_2",
            "img_amorepacific_3",
            "img_amorepacific_4",
            "img_amorepacific_5",
            "img_amorepacific_6",
            "img_amorepacific_7",
            "img_amorepacific_8",
            "img_amorepacific_9",
          ],
        },
        {
          name: "기아 UK Market",
          period: "2015.06.10 ~ 2015.06.30",
          device: "Responsive Web",
          percent: "20%",
          work: ["글로벌 사이트 확산"],
          image: [
            "img_kiauk_1",
            "img_kiauk_2",
            "img_kiauk_3",
            "img_kiauk_4",
            "img_kiauk_5",
            "img_kiauk_6",
            "img_kiauk_7",
            "img_kiauk_8",
          ],
        },
        {
          name: "CJ오쇼핑 멕시코 e커머스",
          period: "2015.04.01 ~ 2015.06.05",
          device: "Mobile, Desktop",
          percent: "50%",
          image: [
            "img_cjmexico_1",
            "img_cjmexico_2",
            "img_cjmexico_3",
            "img_cjmexico_4",
            "img_cjmexico_5",
            "img_cjmexico_6",
          ],
        },
        {
          name: "ebay 셀러 공식 지원 사이트",
          period: "2015.03.16 ~ 2015.03.31",
          device: "Desktop",
          percent: "20%",
          work: ["1. 레이아웃, 메인 마크업", "2. 가이드라인 제작"],
          image: ["img_ebay_1", "img_ebay_2"],
        },
        {
          name: "LG B2B 파트너포탈 설문시스템",
          period: "2015.03.16 ~ 2015.03.31",
          device: "Desktop",
          percent: "100",
          work: ["1. 레이아웃, 메인 마크업", "2. 가이드라인 제작"],
          image: ["img_b2b_1", "img_b2b_2"],
        },
        {
          name: "GS리테일 나만의냉장고 관리자",
          period: "2015.02.11~ 2015.02.27",
          device: "Desktop",
          percent: "100%",
          achievement: ["LG CNS RUI프레임워크 사용경험"],
        },
        {
          name: "아모레퍼시픽 뷰티포인트",
          period: "2014.07.01 ~ 2014.10.31",
          device: "Responsive Web",
          percent: "20%",
          achievement: [
            "1. 웹접근성 마크 획득",
            "2. Adobe CQ5솔루션(AEM) 기반 프로젝트 경험",
          ],
          image: [
            "img_beautypoint_1",
            "img_beautypoint_2",
            "img_beautypoint_3",
            "img_beautypoint_4",
            "img_beautypoint_5",
          ],
        },
        {
          name: "LG LF패션 쇼핑몰 (정상몰, 이월몰)",
          period: "2014.03.03 ~ 2014.06.02",
          device: "Mobile",
          percent: "50%",
          image: ["img_lf_1", "img_lf_2"],
        },
        {
          name: "메리츠화재",
          period: "2013.12 ~ 2014.01",
          device: "Hybrid App",
          percent: "100%",
          image: ["img_meritz_1", "img_meritz_2"],
        },
        {
          name: "인터웍스 MINDs Insight",
          period: "2013.11 ~ 2013.12",
          device: "Desktop",
          percent: "100%",
          image: ["img_minds_1", "img_minds_2", "img_minds_3", "img_minds_4"],
        },
        {
          name: "국회 지식관리 시스템",
          period: "2013.11 ~ 2013.11",
          device: "Desktop",
          percent: "30%",
        },
        {
          name: "올림푸스（기업, 생명/산업, 홀)",
          period: "2013.10 ~ 2013.11",
          device: "Desktop",
          percent: "30%",
          achievement: ["개발코드에 직접 작업하여 프로젝트 공기 단축"],
          image: [
            "img_olympus_1",
            "img_olympus_2",
            "img_olympus_3",
            "img_olympus_4",
            "img_olympus_5",
            "img_olympus_6",
          ],
        },
        {
          name: "뉴스킨",
          period: "2013.10 ~ 2013.10",
          device: "Mobile, Tablet",
          percent: "30%",
          image: ["img_nuskin_1", "img_nuskin_2"],
        },
        {
          name: "유니온스틸",
          period: "2013.08 ~ 2013.10",
          device: "Responsive Web",
          percent: "80%",
          work: ["1. 퍼블리싱 PL", "2. 다국어 사이트 (국문, 영문, 중문"],
          achievement: ["웹어워드 2013 기업일반 부문 우수상 수상"],
          image: [
            "img_unionsteel_1",
            "img_unionsteel_2",
            "img_unionsteel_3",
            "img_unionsteel_4",
            "img_unionsteel_5",
            "img_unionsteel_6",
            "img_unionsteel_7",
          ],
        },
        {
          name: "한화 갤러리아몰",
          period: "2013.04 ~ 2013.07",
          device: "Desktop",
          percent: "25%",
          work: [
            "1. 웹접근성 마크 획득",
            "2. 웹어워드 2013 쇼핑몰 부문 대상 수상",
          ],
          achievement: ["기존사이트 접근성 개선 프로젝트"],
          image: [
            "img_galleria_1",
            "img_galleria_2",
            "img_galleria_3",
            "img_galleria_4",
          ],
        },
        {
          name: "삼성 인터넷전화 Wyz070",
          period: "2013.03 ~ 2013.04",
          device: "Desktop",
          percent: "60%",
          work: ["퍼블리싱 PL"],
          achievement: [
            "1. 기존 이미지텍스트를 웹폰트방식으로 제안함으로써, 차후 유지보수 공수를 절약하는 효과",
            "2. SEO 및 웹접근성의 향상",
          ],
          image: [
            "img_wyz070_1",
            "img_wyz070_2",
            "img_wyz070_3",
            "img_wyz070_4",
          ],
        },
        {
          name: "삼성 콘텐츠 & 서비스",
          period: "2012.12 ~ 2013.02",
          device: "Mobile, Tablet, Desktop",
          percent: "20%",
          achievement: [
            "다국어 사이트(전세계 국가 35개 언어 및 RTL 언어) 경험",
          ],
          image: ["img_samsung_1", "img_samsung_2", "img_samsung_3"],
        },
        {
          name: "부천시립도서관",
          period: "2013.08 ~ 2013.10",
          device: "Desktop",
          percent: "30%",
          work: ["퍼블리싱 PL"],
          achievement: ["웹어워드 2013 미디어/정보서비스 부문 최우수상 수상"],
          image: ["img_bcl_1", "img_bcl_2", "img_bcl_3", "img_bcl_4"],
        },
        {
          name: "경찰청 내부 시스템",
          period: "2012.10 ~ 2012.11",
          device: "Desktop",
          percent: "60%",
          work: ["퍼블리싱 PL"],
        },
        {
          name: "강북구도시관리공단",
          period: "2012.10 ~ 2012.10",
          device: "Desktop",
          percent: "20%",
          work: [
            "1. 기존사이트 접근성 개선 프로젝트",
            "2. 마크업 접근성 개선 및 고대비 디자인 수정 작업",
          ],
          achievement: ["웹접근성 마크 획득"],
          image: ["img_gangbukcmc_1", "img_gangbukcmc_2", "img_gangbukcmc_3"],
        },
        {
          name: "NPATHWAY",
          period: "2012.09 ~ 2012.11",
          device: "Desktop",
          percent: "30%",
          achievement: ["다국어 사이트 (영문, 중문) 경험"],
          image: [
            "img_npathway_1",
            "img_npathway_2",
            "img_npathway_3",
            "img_npathway_4",
            "img_npathway_5",
            "img_npathway_6",
          ],
        },
        {
          name: "국가건강정보포털",
          period: "2012.09 ~ 2012.09",
          device: "Desktop",
          percent: "100%",
          achievement: ["접근성 마크 획득"],
          image: [
            "img_health_1",
            "img_health_2",
            "img_health_3",
            "img_health_4",
          ],
        },
        {
          name: "롯데인터넷면세점",
          period: "2012.06 ~ 2012.07",
          device: "Mobile, Desktop",
          percent: "-",
          work: ["사이트 운영 및 부분 신규 구축 프로젝트"],
          image: ["img_lottedfs_1", "img_lottedfs_2", "img_lottedfs_3"],
        },
        {
          name: "웅진 CAIRS",
          period: "2012.06 ~ 2012.06",
          device: "Mobile, Tablet",
          percent: "100%",
          work: ["사이트 운영 및 부분 신규 구축 프로젝트"],
          image: ["img_cairs_1", "img_cairs_2"],
        },
        {
          name: "좋은책 신사고 교과서",
          period: "2012.06 ~ 2012.06",
          device: "Desktop",
          percent: "100%",
          image: [
            "img_sinsago2_1",
            "img_sinsago2_2",
            "img_sinsago2_3",
            "img_sinsago2_4",
          ],
        },
        {
          name: "좋은책 신사고",
          period: "2012.05 ~ 2012.05",
          device: "Desktop",
          percent: "100%",
          image: "img_sinsago_1",
        },
        {
          name: "현대모비스 MBOOKS",
          period: "2012.04 ~ 2012.05",
          device: "Mobile, Tablet, Desktop",
          percent: "100%",
          image: [
            "img_mbook_1",
            "img_mbook_2",
            "img_mbook_3",
            "img_mbook_4",
            "img_mbook_5",
            "img_mbook_6",
          ],
        },
        {
          name: "김안과, MD lash, 종로편입학원 등",
          period: "2010.11.29 ~ 2012.02.10",
          device: "Mobile",
          percent: "100%",
        },
      ],
    };
  },

  watch: {
    viewType() {
      this.$nextTick(() => {
        this.$redrawVueMasonry("list");
      });
    },
  },

  methods: {
    handleViewType(viewType) {
      this.viewType = viewType;
    },

    onOpenModal(name, image) {
      this.modalName = name;
      this.modalImage = image;
      this.modalState = !this.modalState;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  position: absolute;
  top: 20px;
  right: 0;

  &__button {
    display: inline-block;
    font-size: 15px;
    color: rgba(var(--text), 0.5);

    &:hover,
    &:focus {
      color: rgba(var(--text), 0.8);
    }

    &:first-child {
      margin-right: 15px;
    }

    &.is-active {
      color: rgba(var(--text), 0.8);

      .svg-inline--fa {
        color: var(--point);
      }
    }

    .svg-inline--fa {
      margin-right: 5px;
      font-size: 18px;
      vertical-align: top;
    }
  }
}

@media all and (max-width: 1023px) {
  .tab {
    top: 3px;
  }
}

@media all and (max-width: 767px) {
  .tab {
    top: 3px;

    &__button {
      display: inline-block;
      font-size: 13px;

      &:first-child {
        margin-right: 10px;
      }
    }

    .svg-inline--fa {
      font-size: 15px;
    }
  }
}

.portfolio {
  $root: &;

  &__head {
    background-color: rgba(var(--background), 0.2);
    font-size: 0;
    color: rgba(var(--text), 0.8);
  }

  &__name,
  &__period,
  &__device,
  &__percent {
    display: inline-block;
    padding: 15px;
    font-size: 15px;
    text-align: center;
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

  &--list {
    .grid__item {
      display: block;
      width: 100%;
    }
  }

  &--view {
    .grid {
      margin: -15px;
      opacity: 1;
      -webkit-transition: opacity 0.8s ease-out;
      -ms-transition: opacity 0.8s ease-out;
      transition: opacity 0.8s ease-out;

      &.is-loading {
        opacity: 0;
      }

      &__item {
        display: block;
        padding: 15px;
        width: 25%;

        &.animate {
          -webkit-animation: fadeIn 0.65s ease forwards;
          animation: fadeIn 0.65s ease forwards;
        }
      }
    }

    #{$root}__head {
      display: none;
    }
  }
}

@-webkit-keyframes fadeIn {
  0% {
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: 1280px) {
  .portfolio {
    &--view {
      .grid__item {
        width: 33.333%;
      }
    }
  }
}

@media all and (max-width: 1023px) {
  .portfolio {
    &--view {
      .grid {
        margin: -10px;
      }

      .grid__item {
        width: 33.3%;
        padding: 10px;
      }
    }
  }
}

@media all and (max-width: 767px) {
  .portfolio {
    $root: &;

    &--view {
      .grid__item {
        width: 50%;
      }
    }

    &--list {
      .grid__item {
        border-top: 1px solid rgba(var(--background), 0.15);
        border-bottom: none;

        &:nth-child(n + 2) {
          margin-top: 10px;
        }
      }

      #{$root}__head {
        display: none;
      }
    }
  }
}

@media all and (max-width: 500px) {
  .portfolio {
    &--view {
      .grid {
        margin: -10px 0;
      }

      .grid__item {
        width: 100%;
        padding: 10px 0;
      }
    }
  }
}
</style>
