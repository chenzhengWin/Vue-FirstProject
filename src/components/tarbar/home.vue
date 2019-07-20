<template>
  <div class="app-container">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in LunboList" :key="item.url">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
					<img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
     
    </ul>
    <h2>123</h2>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      LunboList: []
    };
  },
  methods: {
    getLunbo() {
      // resuorce.js 接口
      thit.$http.get("http://...").then(result => {
        if (result.body.status === 0) {
          this.LunboList = result.body.message;
        } else {
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    //交集选择器，sass
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: lightblue;
    }
    &:nth-child(3) {
      background-color: aquamarine;
    }
  }
}
</style>
