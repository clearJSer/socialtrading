<template>
  <main>
      <Header></Header>
      <div class="router-view__box">
        <router-view />
      </div>
      <Footer></Footer>
  </main>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})

export default class Main extends Vue {}
</script>
<style lang="scss" scoped>
main{
  // background: red;
  height: 100%;
  display: flex;
  flex-direction: column;
  .router-view__box{
    flex: 1;
  }
}
</style>
