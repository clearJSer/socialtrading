<template>
  <div class="home">
    <div class="home__background">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <el-carousel :interval="5000" arrow="always" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
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
export default class Home extends Vue {}
</script>
<style lang="scss">
.home{
  height: 100%;
  color: #fff;
  font-size: 20px;
  position: relative;
  overflow: hidden;
  h3{
    text-align: center;
  }
  .home__background{
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: -webkit-gradient(linear,left top,left bottom,from(#232324),to(#0b0c0f));
    background-image: linear-gradient(180deg,#232324,#0b0c0f);
    div{
      position: absolute;
      display: block;
      left: 50%;
      bottom: 30px;
      -webkit-transform: translate(-50%,50%);
      transform: translate(-50%,50%);
      border-radius: 50%;
      &:first-child{
        width: 90%;
        padding-bottom: 90%;
        background-image: -webkit-gradient(linear,left top,left bottom,from(#202121),to(#060606));
        background-image: linear-gradient(180deg,#202121,#060606);
      }
      &:nth-child(2){
        width: 70%;
        padding-bottom: 70%;
        background-image: -webkit-gradient(linear,left top,left bottom,from(#161717),to(#020303));
        background-image: linear-gradient(180deg,#161717,#020303);
      }
      &:nth-child(3){
        width: 50%;
        padding-bottom: 50%;
        background-image: -webkit-gradient(linear,left top,left bottom,from(#151515),to(#161616));
        background-image: linear-gradient(180deg,#151515,#161616);
      }
    }
  }
}
</style>
