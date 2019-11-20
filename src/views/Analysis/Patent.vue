<template>
  <div>
    <a-card class="w">
      <Title
        style="padding-top: 5%"
        :title="titleData.title"
        :documentDate="titleData.documentDate"
        :description="titleData.description"
        :abstract="titleData.abstract"
        :applicationId="titleData.applicationId"
        :date="titleData.date"
        :documentId="titleData.documentId"
        :classification_name="titleData.classification_name"
        :assignees="titleData.assignees"
        :inventor_name="titleData.inventor_name"
      />
    </a-card>
    <br />
    <DetailChart
      :title="chartTitle"
      :option="'MOST RECENT CITING PATENTS'"
      :list="cited_list"
      :chartStyle="chartStyle"
      :chartOption="chartOption"
    />
  </div>
</template>

<script>
import Title from "../../components/Analysis/Title";
import DetailChart from "../../components/Analysis/DetailChart";
import { mapState } from "vuex";
export default {
  data() {
    return {
      chartTitle: "被引数量分析",
      chartStyle: "width:100%;height:400px;align-content:center;"
    };
  },
  computed: {
    ...mapState({
      titleData: state => state.patent.titleData,
      chart: state => state.patent.chart
    }),
    cited() {
      return this.chart.cited;
    },
    chartOption() {
      return this.chart.chartOption;
    },
    cited_list() {
      let result = null;
      if (JSON.stringify(this.cited) !== undefined) {
        result = JSON.parse(JSON.stringify(this.cited));
        result.map(x => {
          x.href = "/analysis/patent?patent_uuid=" + x.uuid;
        });
      }
      return result;
    },
    uuid() {
      return this.$route.query.patent_uuid;
    }
  },
  mounted() {
    this.$store.dispatch("patent/getTitle", this.uuid);
    this.$store.dispatch("patent/getChart", this.uuid);
  },
  components: {
    Title,
    DetailChart
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
