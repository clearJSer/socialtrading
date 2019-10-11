<template>
  <div class="mapData__container">
    <div class="map__box">
      <Map />
    </div>
    <!-- 区块高度 -->
    <div class="table__box">
      <div class="item" v-for="i in [1, 2, 3, 4]" :key="i">
        <div class="iconBox">
          <div class="in_1"></div>
          <div class="in_2"></div>
          <div class="in_3"></div>
          <img src="../assets/dataPage/btc.png" alt="" />
        </div>
        <div class="info">
          <p>
            <span class="blockTitle">区块: </span>
            <span class="blockInfo">2312</span>
          </p>
          <p>
            <span class="blockTitle">流通量: </span>
            <span class="blockInfo">2312</span>
          </p>
          <p>
            <span class="blockTitle">市值: </span>
            <span class="blockInfo">2312</span>
          </p>
        </div>
      </div>
    </div>
    <div class="block__box">
      <div class="item bigOrder_xian">
        <div class="itemTitle">大额转账</div>
        <div class="tableBox">
          <el-table :data="tableData" style="width: 100%" height="250">
            <el-table-column fixed prop="date" label="日期" width="150"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
            <el-table-column prop="province" label="省份" width="120"> </el-table-column>
            <el-table-column prop="city" label="市区" width="120"> </el-table-column>
            <el-table-column prop="address" label="地址" width="300"> </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="item bigOrder_qi">
        <div class="itemTitle">大额转账</div>
        <div class="tableBox">
          <el-table :data="tableData" style="width: 100%" height="250">
            <el-table-column fixed prop="date" label="日期" width="150"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
            <el-table-column prop="province" label="省份" width="120"> </el-table-column>
            <el-table-column prop="city" label="市区" width="120"> </el-table-column>
            <el-table-column prop="address" label="地址" width="300"> </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="item bigTransfer">
        <div class="itemTitle">大额转账</div>
        <div class="tableBox">
          <el-table :data="tableData" style="width: 100%" height="250">
            <el-table-column fixed prop="date" label="日期" width="150"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
            <el-table-column prop="province" label="省份" width="120"> </el-table-column>
            <el-table-column prop="city" label="市区" width="120"> </el-table-column>
            <el-table-column prop="address" label="地址" width="300"> </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="item Blowing">
        <div class="itemTitle">大额转账</div>
        <div class="tableBox">
          <el-table :data="tableData" style="width: 100%" height="250">
            <el-table-column fixed prop="date" label="日期" width="150"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
            <el-table-column prop="province" label="省份" width="120"> </el-table-column>
            <el-table-column prop="city" label="市区" width="120"> </el-table-column>
            <el-table-column prop="address" label="地址" width="300"> </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Map from '../components/echarts/Map.vue';
@Component({
  components: {
    Map,
  },
})
export default class MapData extends Vue {
  private tableData: Array<object>;

  private test: string = '123';

  public data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: this.test,
          zip: 200333,
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
      ],
    };
  }
}
</script>
<style lang="scss">
.mapData__container {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.map__box {
  width: 300px;
  height: 300px;
}
// 区块高度
.table__box {
  position: absolute;
  left: 20px;
  top: 100px;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  flex-direction: column;
  .item {
    margin-bottom: 17px;
    height: 63px;
    display: flex;
    align-items: center;
    .iconBox {
      border-radius: 50%;
      height: 63px;
      width: 63px;
      position: relative;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #72bbd6;
        border-radius: 50%;
        &:first-child {
          opacity: 0.2;
          width: 100%;
          height: 100%;
        }
        &:nth-child(2) {
          opacity: 0.3;
          width: 80%;
          height: 80%;
        }
        &:nth-child(3) {
          opacity: 0.6;
          width: 50%;
          height: 50%;
        }
      }
    }
    .info {
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        margin: 0;
        .blockTitle {
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #b4b5b8;
          letter-spacing: 0;
          line-height: 16px;
        }
        .blockInfo {
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: rgba(114, 187, 214, 0.6);
          letter-spacing: 0;
          line-height: 16px;
        }
      }
    }
  }
}
// 大额转账
.block__box {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;
  display: flex;
  transform: translateY(-50%);
  box-sizing: border-box;
  justify-content: space-around;
  flex-direction: column;
  .item {
    width: 400px;
    overflow: hidden;
    height: 176px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 5;
    .itemTitle {
      padding-bottom: 6px;
      width: 100%;
      text-align: right;
      font-family: PingFangSC-Regular;
      font-size: 15px;
      color: #fafafa;
      letter-spacing: 0;
      line-height: 16px;
    }
  }
  .Blowing {
    right: 910px;
    bottom: 30px;
  }
  .bigOrder_xian {
    right: 480px;
    bottom: 30px;
  }
  .bigOrder_qi {
    right: 30px;
    bottom: 30px;
  }
  .bigTransfer {
    right: 30px;
    bottom: 226px;
  }
}
</style>
