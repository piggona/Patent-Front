<template>
  <div>
    <a-card class="w">
      <TitleFund
        style="padding-top: 5%"
        :AwardTitle="titleData.AwardTitle"
        :description="titleData.description"
        :AbstractNarration="titleData.AbstractNarration"
        :Organization="titleData.Organization"
        :AwardAmount="titleData.AwardAmount"
        :Institution="titleData.Institution"
        :Investigator="titleData.Investigator"
      />
    </a-card>
  </div>
</template>

<script>
import TitleFund from "../../components/Analysis/TitleFund";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      titleData: state => state.fund.titleData
    }),
    uuid() {
      return this.$route.query.fund;
    }
  },
  mounted() {
    this.$store.dispatch("fund/getTitle", this.uuid);
  },
  components: {
    TitleFund
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
