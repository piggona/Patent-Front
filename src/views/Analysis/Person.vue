<template>
  <div>
    <a-card class="w">
      <SimpleTitle :fullName="res.title.fullName" :createTime="res.title.createTime" />
      <a-row>
        <a-col :span="8">
          <Row :option="'TOP ASSIGNEES'" :data="assignee_list" />
        </a-col>
        <a-col :span="8">
          <RowSimple :option="'MOST MENTIONED IPC CLASSES'" :data="ipc_list" />
        </a-col>
        <a-col :span="8">
          <RowSimple :option="'MOST MENTIONED CPC CLASSES'" :data="cpc_list" />
        </a-col>
      </a-row>
    </a-card>
    <DetailChart
      :title="AmountTitle"
      :option="'MOST RECENT PATENTS'"
      :list="res_bar_list"
      :chartStyle="chartStyle"
      :chartOption="resBar.data"
    />
    <DetailChart
      :title="PersonTitle"
      :option="'MOST MENTIONED IPC CLASSES'"
      :list="res_pie_list"
      :chartStyle="chartStyle"
      :chartOption="resPie.data"
    />
    <DetailChart
      :title="RelationTitle"
      :option="'MOST CITED PATENTS'"
      :list="res_net_list"
      :chartStyle="chartStyle"
      :chartOption="resNet.data"
    />
    <a-card class="w" title="合作者分析">
      <Graph :ChartStyle="chartStyle" :option="resCo.data" />
    </a-card>
  </div>
</template>

<script>
import SimpleTitle from "../../components/Analysis/SimpleTitle";
import Row from "../../components/Analysis/Row";
import RowSimple from "../../components/Analysis/RowSimple";
import DetailChart from "../../components/Analysis/DetailChart";
import Graph from "../../components/Analysis/Graph";
import { mapState } from "vuex";
// import echarts from "echarts";

export default {
  data() {
    return {
      AmountTitle: "专利数量分析",
      PersonTitle: "发明人简介",
      RelationTitle: "相关机构",
      chartStyle: "width:100%;height:400px;align-content:center;"
    };
  },
  computed: {
    ...mapState({
      res: state => state.person.res,
      resBar: state => state.person.resBar,
      resPie: state => state.person.resPie,
      resCo: state => state.person.resCo,
      resNet: state => state.person.resNet
    }),
    uuid() {
      return this.$route.query.inventor;
    },
    assignee_list() {
      let result = [];
      if (JSON.stringify(this.res.statics.assignees) !== undefined) {
        result = JSON.parse(JSON.stringify(this.res.statics.assignees));
        result.map(x => {
          x.title = x.name;
          x.href = "/analysis/assignee?assignee=" + x.uuid;
        });
      }
      return result;
    },
    ipc_list() {
      let result = [];
      if (JSON.stringify(this.res.statics.ipcClass) !== undefined) {
        result = JSON.parse(JSON.stringify(this.res.statics.ipcClass));
        result.map(x => {
          x.cpc = x.ipc;
        });
      }
      return result;
    },
    cpc_list() {
      return this.res.statics.cpcClass;
    },
    res_bar_list() {
      let result = [];
      if (JSON.stringify(this.resBar.recent) !== undefined) {
        console.log(JSON.stringify(this.resBar.recent));
        result = JSON.parse(JSON.stringify(this.resBar.recent));
        result.map(x => {
          x.href = "/analysis/patent?patent_uuid=" + x.uuid;
        });
      }
      return result;
    },
    res_pie_list() {
      let result = [];
      if (JSON.stringify(this.resPie.ipc_explain) !== undefined) {
        result = JSON.parse(JSON.stringify(this.resPie.ipc_explain));
        result.map(x => {
          x.title = x.ipc;
          //  + ":" + x.explain;
          x.date = x.count + "patents";
          x.href = "";
          x.rank = result.indexOf(x) + 1;
        });
      }
      return result;
    },
    res_net_list() {
      let result = [];
      if (JSON.stringify(this.resNet.cited) !== undefined) {
        result = JSON.parse(JSON.stringify(this.resNet.cited));
        result.map(x => {
          x.date = x.count + "citations";
          x.href = "/analysis/patent?patent_uuid=" + x.uuid;
        });
      }
      return result;
    }
  },
  mounted() {
    this.$store.dispatch("person/getRes", this.uuid);
    this.$store.dispatch("person/getResBar", this.uuid);
    this.$store.dispatch("person/getResPie", this.uuid);
    this.$store.dispatch("person/getResNet", this.uuid);
    this.$store.dispatch("person/getResCo", this.uuid);
  },
  components: {
    SimpleTitle,
    Row,
    RowSimple,
    DetailChart,
    Graph
  }
};
</script>

<style>
.display-bottom {
  margin-right: 5rem;
  border-top: 1px;
}
.detail-text {
  float: left;
  width: 600px;
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
.patent-name {
  font-size: 2rem;
  color: #495057;
}
</style>
