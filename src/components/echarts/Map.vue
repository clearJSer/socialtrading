<template>
  <div class="echarts" ref="map"></div>
</template>>
<script lang="ts">
import echarts, { init } from 'echarts';
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Map extends Vue {
  private mounted() {
    this.initMap();
  }

  private initMap() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(this.$refs.map as HTMLDivElement);
    // 指定图表的配置项和数据
    const option = {
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
}
</script>
<style lang="scss" scoped>
.echarts{
  width: 100%;
  height: 100%;
}
</style>
