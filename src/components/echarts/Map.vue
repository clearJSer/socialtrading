<template>
  <div class="echarts" ref="map">
  </div>
</template>>
<script >
import echarts, { init } from 'echarts';
import Vue from 'vue';

require('../../../node_modules/echarts/map/js/world.js');
// 引入世界地图数据
export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(this.$refs.map);
      function randomData() {
        return Math.round(Math.random() * 300);
      }

      const geoCoordMap = {
        上海: [121.4648, 31.2891],
        纽约: [-73.861952, 40.845873],
        首尔: [126.97222, 37.584153],
        西雅图: [-122.326575, 47.600656],
        北京: [116.401889, 39.894319],
        东京: [139.664277, 35.796692],
        南非: [23.305974, -30.169693],
        莫斯科: [37.620184, 55.751286],
        尼日利亚: [-4.388361, 11.186148],
        美国洛杉矶: [-118.24311, 34.052713],
        香港邦泰: [114.195466, 22.282751],
        美国芝加哥: [-87.801833, 41.870975],
        加纳库马西: [-4.62829, 7.72415],
        英国曼彻斯特: [-1.657222, 51.886863],
        德国汉堡: [10.01959, 54.38474],
        哈萨克斯坦阿拉木图: [45.326912, 41.101891],
        俄罗斯伊尔库茨克: [89.116876, 67.757906],
        巴西: [-48.678945, -10.493623],
        埃及达米埃塔: [31.815593, 31.418032],
        西班牙巴塞罗纳: [2.175129, 41.385064],
        柬埔寨金边: [104.88659, 11.545469],
        意大利米兰: [9.189948, 45.46623],
        乌拉圭蒙得维的亚: [-56.162231, -34.901113],
        莫桑比克马普托: [32.608571, -25.893473],
        阿尔及利亚阿尔及尔: [3.054275, 36.753027],
        阿联酋迪拜: [55.269441, 25.204514],
        匈牙利布达佩斯: [17.108519, 48.179162],
        澳大利亚悉尼: [150.993137, -33.675509],
        美国加州: [-121.910642, 41.38028],
        澳大利亚墨尔本: [144.999416, -37.781726],
        墨西哥: [-99.094092, 19.365711],
        加拿大温哥华: [-123.023921, 49.311753],
      };
      const placeArr = ['纽约', '纽约', '北京', '北京', '纽约', '纽约', '北京', '北京', '上海',
        '美国洛杉矶', '香港邦泰', '美国加州', '巴西', '美国洛杉矶', '美国洛杉矶', '东京', '上海',
        '澳大利亚墨尔本', '乌拉圭蒙得维的亚', '南非', '莫斯科'];
      const BJData = [
        [{
          name: '尼日利亚',
          value: randomData(),
        },
        {
          name: '上海',
        }],
        [{
          name: '北京',
          value: randomData(),
        },
        {
          name: '纽约',
        }],
        [{
          name: '东京',
          value: randomData(),
        },
        {
          name: '莫斯科',
        }],
        [{
          name: '美国洛杉矶',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '香港邦泰',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '美国芝加哥',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '加纳库马西',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '英国曼彻斯特',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '德国汉堡',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '哈萨克斯坦阿拉木图',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '俄罗斯伊尔库茨克',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '巴西',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '埃及达米埃塔',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '纽约',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '柬埔寨金边',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '意大利米兰',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '乌拉圭蒙得维的亚',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '莫桑比克马普托',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '阿尔及利亚阿尔及尔',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '阿联酋迪拜',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '匈牙利布达佩斯',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '澳大利亚悉尼',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '美国加州',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '澳大利亚墨尔本',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '墨西哥',
          value: randomData(),
        }, {
          name: '上海',
        }],
        [{
          name: '加拿大温哥华',
          value: randomData(),
        }, {
          name: '上海',
        }],
      ];
      const convertData = function convert(data) {
        const res = [];
        for (let i = 0; i < data.length; i += 1) {
          const dataItem = data[i];
          const fromCoord = geoCoordMap[placeArr[Math.floor(Math.random() * placeArr.length)]];
          const toCoord = geoCoordMap[placeArr[Math.floor(Math.random() * placeArr.length)]];
          if (fromCoord && toCoord) {
            res.push([{
              coord: fromCoord,
              value: dataItem[0].value,
            },
            {
              coord: geoCoordMap[placeArr[Math.floor(Math.random() * placeArr.length)]],
            },
            ]);
          }
        }
        return res;
      };
      const convertData2 = function convert2(data) {
        const res = [];
        for (let i = 0; i < data.length; i += 1) {
          const dataItem = data[i];
          const fromCoord = geoCoordMap[placeArr[Math.floor(Math.random() * placeArr.length)]];
          const toCoord = geoCoordMap[placeArr[Math.floor(Math.random() * placeArr.length)]];
          if (fromCoord && toCoord) {
            res.push([{
              coord: fromCoord,
              value: dataItem[0].value,
            },
            {
              coord: toCoord,
            },
            ]);
          }
        }
        return res;
      };

      const series = [];
      [
        ['上海', BJData],
      ].forEach((item, i) => {
        series.push({
          name: '攻击线1',
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            color: '#6ed1ff',
            period: 4, // 箭头指向速度，值越小速度越快
            trailLength: 1, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'circle', // 箭头图标
            symbolSize: 3, // 图标大小
          },
          lineStyle: {
            normal: {
              color: '#0bc7f3',
              width: 0.3, // 尾迹线条宽度
              opacity: 0, // 尾迹线条透明度
              curveness: 0.1, // 尾迹线条曲直度
            },
          },
          data: convertData(item[1]),
        },
        {
          name: '攻击线2',
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            color: '#6ed1ff',
            period: 4, // 箭头指向速度，值越小速度越快
            trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'circle', // 箭头图标
            symbolSize: 3, // 图标大小
          },
          lineStyle: {
            normal: {
              color: '#FF0000',
              width: 1, // 尾迹线条宽度
              opacity: 0, // 尾迹线条透明度
              curveness: -0.1, // 尾迹线条曲直度
            },
          },
          data: convertData2(item[1]),
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            // 涟漪特效
            period: 4, // 动画时间，值越小速度越快
            brushType: 'stroke', // 波纹绘制方式 stroke, fill
            scale: 4, // 波纹圆环最大限制，值越大波纹越大
          },
          // label: {
          //   normal: {
          //     show: false,
          //     position: 'right', // 显示位置
          //     offset: [5, 0], // 偏移设置
          //     formatter: '{b}', // 圆环显示文字
          //   },
          //   emphasis: {
          //     show: true,
          //     color: '#FF6A6A',
          //   },
          // },
          symbol: 'circle',
          symbolSize(val) {
            return 5; // 圆环大小
          },
          itemStyle: {
            normal: {
              show: true,
            },
            emphasis: {
              show: false,
              color: '#FF6A6A',
            },
          },
          data: item[1].map(dataItem => ({
            name: dataItem[0].name,
            value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
          })),
        },
        // 被攻击点
        {
          type: 'scatter',
          coordinateSystem: 'circle',
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4,
          },
          label: {
            normal: {
              show: true,
              color: 'green',
              position: 'right',
              formatter: '{b}',
            },
            emphasis: {
              show: true,
              color: '#FF6A6A',
            },
          },
          symbol: 'pin',
          symbolSize: 30,
          itemStyle: {
            normal: {
              show: true,
              color: 'green',
            },
            emphasis: {
              show: true,
              color: '#FF6A6A',
            },
          },
          data: [{
            name: item[0],
            value: geoCoordMap[item[0]].concat([100]),
            visualMap: false,
          }],
        });
      });
      const option = {
        backgroundColor: '#000',
        tooltip: {
          trigger: 'item',
          backgroundColor: '#1540a1',
          borderColor: '#FFFFCC',
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: 'z-index:100',
          formatter(params, ticket, callback) {
            // 根据业务自己拓展要显示的内容
            let res = '';
            const { name } = params;
            const value = params.value[params.seriesIndex + 1];
            res = `<span style='color:#fff;'>${
              name
            }</span><br/>数据：${
              value}`;
            return res;
          },
        },
        visualMap: {
          // 图例值控制
          show: true,
          type: 'piecewise',
          pieces: [{
            max: 80,
            color: '#6ed1ff',
          },
          {
            min: 80,
            max: 120,
            color: '#6ed1ff',
          },
          {
            min: 120,
            color: '#6ed1ff',
          },
          ],
          calculable: true,
        },
        geo: {
          map: 'world',
          show: true,
          label: {
            emphasis: {
              show: false,
            },
          },
          roam: false, // 是否允许缩放
          layoutCenter: ['40%', '35%'], // 地图位置
          layoutSize: '140%',
          itemStyle: {
            normal: {
              show: 'true',
              color: '#04284e', // 地图背景色
              borderColor: '#5bc1c9', // 省市边界线
            },
            emphasis: {
              show: 'true',
              color: 'rgba(37, 43, 61, .5)', // 悬浮背景
            },
          },
        },
        legend: {
          orient: 'vertical',
          top: '10',
          left: 'center',
          align: 'right',
          data: [
            // {name:'攻击线1',icon:svg,},
            // { name:'攻击线2',icon:svg},
          ],
          textStyle: {
            color: '#fff',
            fontSize: 20,
          },
          itemWidth: 50,
          itemHeight: 30,
          selectedMode: 'multiple',
        },
        series,
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },

};
</script>
<style lang="scss" scoped>
.echarts{
  width: 100%;
  height: 100%;
}
</style>
