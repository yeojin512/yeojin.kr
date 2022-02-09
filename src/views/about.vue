<template>
  <div class="page">
    <page-title as="h2" class="page__title" title="About" />

    <div class="table">
      <table>
        <caption>
          <span class="sr-only">프로필 목록</span>
        </caption>
        <colgroup>
          <col style="width: 20%" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">이름</th>
            <td>정여진</td>
          </tr>
          <tr>
            <th scope="row">주소</th>
            <td>서울</td>
          </tr>
          <tr>
            <th scope="row">이메일</th>
            <td>
              <a
                href="mailto:jeong@yeojin.kr"
                class="o-button o-button--mail"
                title="새 창 열림"
              >
                <font-awesome-icon icon="fa-solid fa-envelope" />jeong@yeojin.kr
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">학력사항</th>
            <td>
              <ul class="table__list">
                <li class="table__item">
                  <span class="table__date">2005.03.02</span> ~
                  <span class="table__date">2007.02.09</span>
                  안산공과대학 디지털미디어과 졸업
                </li>
                <!-- 4.19, 2005.03.02 ~ 2007.02.09 -->
                <li class="table__item">
                  <span class="table__date">2016.03.02</span> ~
                  <span class="table__date">2017.08.23</span>
                  고려사이버대학교 소프트웨어공학과 졸업
                </li>
                <!-- 4.05, 2016.03.02 ~ 2017.08.23 졸업 -->
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">경력사항</th>
            <td>
              <ul class="table__list">
                <li class="table__item">
                  <span class="table__date">2010.11.29</span> ~
                  <span class="table__date">2012.02.10</span> FMG
                  (프론티어마케팅그룹)
                </li>
                <!-- 2010.11 ~ 2012.02.11 -->
                <!-- 1년 4개월 -->
                <li class="table__item">
                  <span class="table__date">2012.04.18</span> ~
                  <span class="table__date">2014.01.31</span> HIWEB
                  (하이웹솔루션)
                </li>
                <!-- 2012.04.18 ~ 2014.01.31 -->
                <!-- 1년 10개월 --><!-- 3년 2개월 -->
                <li class="table__item">
                  <span class="table__date">2014.02.01</span> ~
                  <span class="table__date">2014.06.29</span>
                  프리랜서
                </li>
                <!-- 5개월 -->
                <!-- 3년 7개월 -->
                <li class="table__item">
                  <span class="table__date">2014.06.30</span> ~
                  <span class="table__date">2014.12.31</span>
                  스프링웍스
                </li>
                <!-- 2014.06.30 ~ 2014.12.31 -->
                <!-- 6개월 -->
                <!-- 4년 1개월 -->
                <li class="table__item">
                  <span class="table__date">2015.01.01</span> ~
                  <span class="table__date">진행중</span>
                  프리랜서
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">프로젝트 기술영역</th>
            <td>웹표준, 접근성, 웹, 모바일, 태블릿, 반응형, 하이브리드앱</td>
          </tr>
          <tr>
            <th scope="row">이수 내용</th>
            <td>홍시디자인 멀티미디어 웹디자인 과정 3개월(420시간) 수료</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";

export default {
  metaInfo: {
    title: "About | yeojin",
  },

  components: {
    PageTitle,
  },
};
</script>

<style lang="scss" scoped>
.table {
  border-bottom: 1px solid rgba(var(--background), 0.2);

  th,
  td {
    padding: 15px 20px;
    border-top: 1px solid rgba(var(--background), 0.2);
    font-size: 15px;
    text-align: left;
  }

  th {
    background-color: rgba(var(--background), 0.2);
    color: rgba(var(--text), 0.8);
    vertical-align: top;
  }

  td {
    background-color: rgba(var(--background), 0.1);
    color: rgba(var(--text), 0.8);
  }

  &__item {
    &:nth-child(n + 2) {
      margin-top: 7px;
    }
  }

  &__date {
    display: inline-block;
    width: 80px;
    margin: 0 7px;

    &:first-child {
      margin-left: 0;
    }
  }
}

@media all and (max-width: 767px) {
  .table {
    border-top: none;

    table {
      display: block;
    }

    thead {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 1px;
    }

    tbody {
      display: block;
    }

    th,
    td {
      display: block;
      width: 100%;
      font-size: 14px;
    }

    tr {
      display: block;
      width: 100%;
      margin-top: 10px;
      border: 1px solid rgba(var(--background), 0.15);
      border-bottom: none; /*border-bottom:1px solid rgba(125,125,125,.3);box-shadow:0 1px 1px rgba(125,125,125,.3);*/

      &:first-child {
        margin-top: 0;
      }
    }
  }
}

.o-button--mail {
  color: rgba(var(--text), 0.8);

  &:hover,
  &:focus {
    color: rgba(var(--text), 1);
  }

  .svg-inline--fa {
    margin-right: 5px;
    vertical-align: middle;
  }
}
</style>
