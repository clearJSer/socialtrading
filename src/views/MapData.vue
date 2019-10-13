<template>
  <div class="mapData__container">
    <div class="map__box">
      <Map />
    </div>
    <!-- 区块高度 -->
    <div class="table__box">
      <div class="item" v-for="(item,i) in blockDataList" :key="i">
        <div class="iconBox">
          <div class="in_1"></div>
          <div class="in_2"></div>
          <div class="in_3"></div>
          <img :src="item.img" alt="" />
        </div>
        <div class="info">
          <p>
            <span class="blockTitle">区块: </span>
            <span class="blockInfo">{{item.height | priceFmt}}</span>
          </p>
          <p>
            <span class="blockTitle">流通量: </span>
            <span class="blockInfo">{{item.totalSupply | priceFmt}}</span>
          </p>
          <p>
            <span class="blockTitle">市值: </span>
            <span class="blockInfo">${{item.marketCap | priceFmt}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="block__box">
      <div class="item bigOrder_xian">
        <div class="itemTitle">现货大单</div>
        <div class="tableBox">
          <el-table :data="largeDealListArr" style="width: 100%" height="250">
            <el-table-column prop="time" label="时间" width="100"> </el-table-column>
            <el-table-column prop="symbol" label="币对" width="100"> </el-table-column>
            <el-table-column prop="direction" label="方向" width="100"> </el-table-column>
            <el-table-column prop="qty" align="right" label="数量" width="100"> </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="item bigOrder_qi">
        <div class="itemTitle">期货大单</div>
        <div class="tableBox">
          <el-table :data="allLargeDealArr" style="width: 100%" height="250">
            <el-table-column prop="createTime" label="时间" width="100"> </el-table-column>
            <el-table-column prop="futuresName" label="合约" width="100"> </el-table-column>
            <el-table-column prop="direction" label="方向" width="100"> </el-table-column>
            <el-table-column prop="amount" align="right" label="数量" width="100"> </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="item bigTransfer">
        <div class="itemTitle">期货爆仓</div>
        <div class="tableBox">
          <el-table :data="allLiquidationArr" style="width: 100%" height="250">
            <el-table-column prop="createTime" label="时间" width="100"> </el-table-column>
            <el-table-column prop="futureName" label="合约" width="100"> </el-table-column>
            <el-table-column prop="type" label="方向" width="100"> </el-table-column>
            <el-table-column prop="amount" align="right" label="数量" width="100"> </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="item Blowing">
        <div class="itemTitle">大额转账</div>
        <div class="tableBox">
          <el-table :data="largeTransferArr" style="width: 100%" height="250">
            <el-table-column prop="blockTime" label="时间" width="100"> </el-table-column>
            <el-table-column prop="toAddress" label="转入地址" width="100"> </el-table-column>
            <el-table-column prop="fromAddress" label="转出地址" width="100"> </el-table-column>
            <el-table-column prop="amount" align="right" label="数量" width="100"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';
import axios from 'axios';
import moment from 'moment';
import Map from '../components/echarts/Map.vue';

const assets = require.context('./../assets/dataPage/', false, /\.png$/);

@Component({
  components: {
    Map,
  },
})
export default class MapData extends Vue {
  private blockDataList: any;

  private largeTransferArr: any;

  private largeDealListArr: any;

  private allLargeDealArr: any;

  private allLiquidationArr: any;

  public data() {
    return {
      blockDataList: {},
      largeTransferArr: [],
      largeDealListArr: [],
      allLargeDealArr: [], // 期货大单
      allLiquidationArr: [], // 期货爆仓
    };
  }

  mounted() {
    this.getBlockData();
    this.getLargetransfer();
  }

  private getBlockData() {
    axios.post('https://rdtradeapi.jar.today/t/public/lydata/marketCap', {}).then((data) => {
      const arr = data.data.data;
      Object.keys(arr).forEach((item) => {
        arr[item].img = assets(`./${item}.png`);
        console.log(22,assets,assets(`./${item}.png`))
        // arr[item].img = require(`../assets/dataPage/${item}.png`);
        this.getBlockHight(item);
      });
      this.blockDataList = arr;
    });
  }

  private getBlockHight(coin: string) {
    axios.post('https://rdtradeapi.jar.today/t/public/lydata/blocks', { coin }).then((data) => {
      const blockHeight = data.data.data.height;
      // 更新区块高度
      this.blockDataList[coin] = Object.assign(this.blockDataList[coin], { height: blockHeight });
      this.blockDataList = Object.assign({}, this.blockDataList);
    });
  }

  private getLargetransfer() {
    axios.post('https://rdtradeapi.jar.today/t/public/lydata/largetransfer').then((data) => {
      const largeArr = data.data.data;
      this.largeTransferArr = largeArr.map((item: any, i: number) => {
        const itemNew = item;
        // console.log(222,item)
        itemNew.fromAddress = itemNew.fromAddress.substr(0, 9);
        itemNew.toAddress = itemNew.toAddress.substr(0, 9);
        return itemNew;
      });
    });
    this.largeDealList();
    this.allLargeDeal();
    this.allLiquidation();
  }

  // 现货大单
  private largeDealList() {
    axios.post('https://rdtradeapi.jar.today/t/public/data/largeDealList').then((data) => {
      const largeDealArr = data.data.data;
      this.largeDealListArr = largeDealArr.map((item: any, i: number) => {
        const itemNew = item;
        const {
          time, coin, qty,
        } = itemNew;
        const { symbol } = itemNew;
        const [coin1, coin2] = symbol.split('/');
        itemNew.time = moment(time).format('MM-DD HH:mm');
        itemNew.coin = coin1;
        itemNew.qty = `${qty} ${coin1}`;
        return itemNew;
      });
    });
  }

  // 期货大单
  private allLargeDeal() {
    axios.post('https://rdtradeapi.jar.today/t/public/data/allLargeDeal', { size: 20 }).then((data) => {
      const arr = data.data.data;
      this.allLargeDealArr = arr.map((item: any, index: number) => {
        const itemNew = item;
        itemNew.createTime = moment(itemNew.ts).format('MM-DD HH:mm');
        itemNew.futuresName = itemNew.futuresName || itemNew.futures;
        return itemNew;
      });
    });
  }

  // 期货爆仓
  private allLiquidation() {
    axios.post('https://rdtradeapi.jar.today/t/public/data/allLiquidation', { pageNum: 1, pageSize: 20 }).then((data) => {
      const arr = data.data.data.list;
      this.allLiquidationArr = arr.map((item: any, index: number) => {
        const itemNew = item;
        itemNew.createTime = moment(itemNew.createTime).format('MM-DD HH:mm');
        itemNew.amount = Number(itemNew.amount).toFixed();
        return itemNew;
      });
    });
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
  width: 1200px;
  height: 600px;
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
    .tableBox{
      .el-table .el-table__header-wrapper .el-table__header th{
        background-color: rgba(82,84,84,.2);
      }
      .el-table{
        background: transparent;
      }
      .el-table th.is-leaf, .el-table td{
        border-bottom: 1px;
      }
      .el-table tr{
        background: transparent;
        // color: #fff;
      }
      .el-table th, .el-table td{
        padding: 4px 0;
      }
      .el-table .el-table__body-wrapper{
        background-image: linear-gradient(90deg,transparent,rgba(81,155,182,.3));
        tr{
          color: #fff;
        }
        .el-table__row:hover{
          td{
            background: transparent;
          }
        }
      }

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
