<template>
  <main>
      <Header></Header>
      <router-view />
      <!-- <Footer></Footer> -->
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
}
</style>
