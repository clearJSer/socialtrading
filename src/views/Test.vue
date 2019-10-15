<template>
  <div class="test">
    <div>这个是测试页面</div>
    <div v-html="testInfo"></div>
    <hr/>
    <ul>
      <li>2019-10-15 修复大屏视屏地图，修复区块高度加载模块</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {},
})
export default class Test extends Vue {
  private testInfo: string;

  private data() {
    return {
      testInfo: '',
    };
  }

  private mounted() {
    let s = '';
    s += ` 网页可见区域宽：${document.body.clientWidth}<br />`;
    s += ` 网页可见区域高：${document.body.clientHeight}<br />`;
    s += ` 网页正文全文宽：${document.body.scrollWidth}<br />`;
    s += ` 网页正文全文高：${document.body.scrollHeight}<br />`;
    s += ` 网页被卷去的高(ff)：${document.body.scrollTop}<br />`;
    s += ` 网页被卷去的高(ie)：${document.documentElement.scrollTop}<br />`;
    s += ` 网页被卷去的左：${document.body.scrollLeft}<br />`;
    s += ` 网页正文部分上：${window.screenTop}<br />`;
    s += ` 网页正文部分左：${window.screenLeft}<br />`;
    s += ` 屏幕分辨率的高：${window.screen.height}<br />`;
    s += ` 屏幕分辨率的宽：${window.screen.width}<br />`;
    s += ` 屏幕可用工作区高度：${window.screen.availHeight}<br />`;
    s += ` 屏幕可用工作区宽度：${window.screen.availWidth}<br />`;
    s += ` 你的屏幕设置是 ${window.screen.colorDepth} 位彩色<br />`;
    s += ` 你的屏幕设置 ${window.screen.deviceXDPI} 像素/英寸<br />`;
    s += ` 浏览器名称 ${navigator.appVersion}`;
    this.testInfo = s;
  }
}
</script>
<style lang="scss" scoped>
.test {
  padding: 30px;
  color: #fff;
}
</style>
