<template>
  <div class='test'>
    这个是测试页面
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
  },
})
export default class Test extends Vue {

}
</script>
<style lang="scss" scoped>
.test{
  color: #fff;
}
</style>
