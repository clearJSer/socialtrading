<template>
  <header class="header__box">
    <div class="left">
      <div class="logo">LOGO</div>
      <ul class="header__box__left__item">
        <li><a href="">首页</a></li>
        <li><a href="">数据</a></li>
      </ul>
    </div>
    <div class="right">
      <ul class="header__box__right__item">
        <li>
          <a href="">Network</a>
        </li>
        <li>
          <a href="">登录 / 注册</a>
        </li>
      </ul>
      <div class="language__box">
        <el-dropdown @command="handleCommand" szie="small">
          <span class="el-dropdown-link language__box__text">
            English<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">English</el-dropdown-item>
            <el-dropdown-item command="b">中文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue';

export default class Header extends Vue {
  private handleCommand(obj:object) {
    console.log(this, obj);
  }
}
</script>
<style lang="scss">
.header__box {
  color: #a5a6a8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 30px;
  background-color: #1e1f20;
  .left {
    display: flex;
    .logo {
      font-size: 20px;
      color: #fff;
      display: flex;
      align-items: center;
      margin-right: 20px;
    }
    .header__box__left__item {
    }
  }
  .right {
    color: inherit;
    display: flex;
    align-items: center;
    .header__box__right__item {
    }
    .language__box {
      .language__box__text{
        border: 1px solid #a5a6a8;
        border-radius: 4px;
        font-size: 13px;
        padding:0 6px;
        color: #a5a6a8;
        font-size: 100%;
      }
    }
  }
  ul {
    display: flex;
    font-size: 13px;
    li {
      padding: 0 25px;
      a {
        color: inherit;
        font-size: 100%;
        &:hover{
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
