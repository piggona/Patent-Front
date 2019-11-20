<template>
  <div>
    <a-card class="w">
      <TitlePaper
        style="padding-top: 5%"
        :title="titleData.title"
        :description="titleData.description"
        :abstract="titleData.abstract"
        :firstAuthor="titleData.firstAuthor"
        :firstAuthororg="titleData.firstAuthororg"
        :secondAuthor="titleData.secondAuthor"
        :secondAuthororg="titleData.secondAuthororg"
        :keywords="titleData.keywords"
        :venue="titleData.venue"
        :fos="titleData.fos"
        :inventor_name="titleData.inventor_name"
      />
    </a-card>
  </div>
</template>

<script>
import TitlePaper from "../../components/Analysis/TitlePaper";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      titleData: state => state.paper.titleData
    }),
    uuid() {
      return this.$route.query.paper;
    }
  },
  mounted() {
    this.$store.dispatch("paper/getTitle", this.uuid);
  },
  components: {
    TitlePaper
  }
};
</script>

<style>
.wide {
  width: 80%;
  margin: 0 auto;
  position: relative;
  /*用途：将超出边界的东西不显示，并消除浮动即排列重叠的元素*/
  overflow: hidden;
}
.display-bottom {
  margin-right: 5rem;
  border-top: 1px;
}
.detail-text {
  float: left;
  width: 700px;
}
.detail-title {
  margin-bottom: 3rem;
}
.btn-info {
  width: 120px;
  float: right;
}
.text-muted {
  color: #34495e;
}
#display-name {
  text-decoration: black;
}
#display-name:hover {
}
.patent-info {
  background: #34495e;
}
.login-panel {
  width: 800px;
  height: 700px;
  background-color: #eaecee;
  border-radius: 10px;
  margin: 0 auto;
  top: 15%;
  position: relative;
}
.elastic-layer {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}
.close {
  display: none;
}

.blur {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

#detail-full {
  height: 38rem;
  overflow: auto;
}
.patent-name {
  font-size: 2rem;
  color: #495057;
}
</style>
