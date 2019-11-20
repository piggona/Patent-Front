<template>
  <div>
    <!--顶栏用户登出页面-->
    <div class="nav">
      <div class="w">
        <div class="user-info">
          <span class="user login">
            <span class="link-text js-login">
              欢迎，
              <span class="username">{{ username }}</span>
            </span>
            <span class="link">
              <a href="/">退出</a>
            </span>
          </span>
        </div>
      </div>
    </div>
    <div>
      <!--网页顶栏-->
      <div class="nav-simple">
        <div class="w">
          <router-link class="logo" :to="'/'">
            科技文献检索分析
            <div class="logo-sec">Vanlink</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    username: state => state.userInfo.username
  }),
  beforeCreate: () => {
    this.$store.commit("getUsername");
  },
  mounted() {
    this.$store.commit("getUsername");
  }
};
</script>

<style>
/*搜索框*/
select {
  /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
  border: solid 2px #616161;
  height: 40px;
  width: 100px;

  /*很关键：将默认的select选择框样式清除*/
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  /*在选择框的最右侧中间显示小箭头图片*/
  background: url("https://raw.githubusercontent.com/ourjs/static/gh-pages/2015/arrow.png")
    no-repeat scroll right center transparent;

  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-right: 14px;
  vertical-align: -webkit-baseline-middle;
  margin-bottom: 10px;
}
.nav-simple {
  height: 85px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
  background: #212121;
}
.nav-simple .space {
  height: 15px;
  line-height: 40px;
}
.nav-simple .logo {
  float: left;
  font-size: 26px;
  font-weight: bold;
  color: #42a5f5;
}
.nav-simple .logo .logo-sec {
  font-size: 40px;
  font-weight: bold;
  color: #e0e0e0;
}
</style>
