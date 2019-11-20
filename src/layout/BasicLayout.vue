<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}
body {
  font-size: 1rem;
  background: #f6f6f6;
  font: tahoma, Arial, Microsoft YaHei, sans-serif;
  display: inline;
}
li {
  list-style: none;
}
img {
  display: block;
  border: none;
}
label {
  cursor: pointer;
}
input[type="checkbox"] {
  cursor: pointer;
}

/* 定宽布局 */
.w {
  width: 65%;
  margin: 0 auto;
  position: relative;
  /*用途：将超出边界的东西不显示，并消除浮动即排列重叠的元素*/
  overflow: hidden;
}

/* 全局通用样式 */
/* 隐藏类 */
.hide {
  display: none;
}
/* 超链样式 */
.link {
  color: #999;
  cursor: pointer;
  text-decoration: none;
}
.link:hover {
  color: #66bb6a;
}
.link-text {
  color: #999;
  text-decoration: none;
}
/* 按钮 */
.btn {
  display: inline-block;
  padding: 0 30px;
  margin-left: 2rem;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  border: 1px solid #9e9e9e;
  background: #f5f5f5;
  font-size: 17px;
  font-weight: bold;
  color: #455a64;
  outline: none;
  cursor: pointer;
  text-decoration: none;
}
.btn-mini {
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  padding: 0 10px;
  background: #f5f5f5;
}
/* 加载 */
.loading {
  margin: 10px auto;
  display: block;
  width: 100px;
  height: 100px;
}
.page-wrap {
  width: 680px;
  margin-top: 40px;
  margin-bottom: 50px;
}
.page-wrap-multi {
  margin-top: 40px;
  margin-bottom: 150px;
}
.with-nav-side {
  width: 480px;
}
.search-side {
  margin: 0;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0%;
}

.search-side {
  display: inline-block;
  vertical-align: top;
}
input.form-control {
  margin-top: 5%;
  width: 50%;
}
.dep-title {
  padding-left: 5%;
  font-size: 70%;
  font-weight: bold;
  color: #a9a9a9;
}
.chart-title {
  padding-left: 5%;
}
</style>
