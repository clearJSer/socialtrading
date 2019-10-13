<template>
  <div class="home">
    <!-- 背景图 设置 -->
    <div class="home__background">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <el-carousel :interval="5000" arrow="always" height="500px">
      <el-carousel-item v-for="item in carouselArr" :key="item.id">
        <h3>{{ item.title }}</h3>
        <div class="carousel__content">{{ item.content }}</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public data() {
    return {
      carouselArr: [
        {
          id: 1,
          title: '比特币-BTC',
          content: '比特币（Bitcoin）的概念最初由中本聪在2008年11月1日提出，并于2009年1月3日正式诞生 [1]  。根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的虚拟的加密数字货币。点对点的传输意味着一个去中心化的支付系统。',
        },
        {
          id: 2,
          title: '全球加密数字领域主经纪商',
          content: 'xxxxx是基于xxx的全球加密数字领域主经纪商，向数字资产'
        + '和加密货币的专业级客户提供革命性的交易产品及经纪服务',
        },
        {
          id: 3,
          title: '全球加密数字领域主经纪商',
          content: 'xxxxx是基于xxx的全球加密数字领域主经纪商，向数字资产'
        + '和加密货币的专业级客户提供革命性的交易产品及经纪服务',
        },
      ],
    };
  }
}
</script>
<style lang="scss">
.home {
  height: 100%;
  color: #fff;
  font-size: 20px;
  position: relative;
  overflow: hidden;
  h3 {
    text-align: center;
  }
  .home__background {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#232324), to(#0b0c0f));
    background-image: linear-gradient(180deg, #232324, #0b0c0f);
    div {
      position: absolute;
      display: block;
      left: 50%;
      bottom: 30px;
      -webkit-transform: translate(-50%, 50%);
      transform: translate(-50%, 50%);
      border-radius: 50%;
      &:first-child {
        width: 90%;
        padding-bottom: 90%;
        background-image: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(#202121),
          to(#060606)
        );
        background-image: linear-gradient(180deg, #202121, #060606);
      }
      &:nth-child(2) {
        width: 70%;
        padding-bottom: 70%;
        background-image: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(#161717),
          to(#020303)
        );
        background-image: linear-gradient(180deg, #161717, #020303);
      }
      &:nth-child(3) {
        width: 50%;
        padding-bottom: 50%;
        background-image: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(#151515),
          to(#161616)
        );
        background-image: linear-gradient(180deg, #151515, #161616);
      }
    }
  }
  .carousel__content{
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }
}
</style>
