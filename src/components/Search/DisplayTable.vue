<template>
  <div>
    <div v-if="resource.data === null">正在搜索，请稍等</div>
    <a-table :columns="conf.column" :dataSource="resource.data" style="width: 100%">
      <router-link
        :slot="conf.slot"
        color="blue"
        slot-scope="text, record"
        :to="conf.to+record.uuid"
        target="_blank"
      >{{ text }}</router-link>
    </a-table>
  </div>
</template>

<script>
const columns_patent = [
  {
    title: "文档编号",
    key: "doc_id",
    dataIndex: "documentId",
    scopedSlots: { customRender: "doc_id" }
  },
  {
    title: "标题",
    key: "title",
    dataIndex: "title"
  },
  {
    title: "申请日",
    key: "date",
    dataIndex: "applicationDate"
  }
];

const columns_fund = [
  {
    title: "编号",
    key: "id",
    dataIndex: "id",
    scopedSlots: { customRender: "id" }
  },
  {
    title: "名称",
    key: "title",
    dataIndex: "title"
  },
  {
    title: "金额",
    key: "amount",
    dataIndex: "amount"
  },
  {
    title: "起始日期",
    key: "start",
    dataIndex: "start"
  },
  {
    title: "终止日期",
    key: "end",
    dataIndex: "end"
  }
];

const columns_assignee = [
  {
    title: "机构名",
    key: "fullName",
    dataIndex: "fullName",
    scopedSlots: { customRender: "fullName" }
  },
  {
    title: "专利数量",
    key: "patent_cnt",
    dataIndex: "patent_cnt"
  },
  {
    title: "地址",
    key: "location",
    dataIndex: "location"
  },
  {
    title: "活跃年份",
    key: "years_active",
    dataIndex: "years_active"
  }
];

const columns_person = [
  {
    title: "发明人",
    key: "fullName",
    dataIndex: "fullName",
    scopedSlots: { customRender: "fullName" }
  },
  {
    title: "专利数量",
    key: "patents_cnt",
    dataIndex: "patents_cnt"
  },
  {
    title: "地址",
    key: "location",
    dataIndex: "location"
  },
  {
    title: "活跃年份",
    key: "years_active",
    dataIndex: "years_active"
  }
];

const columns_paper = [
  {
    title: "论文id",
    key: "id",
    dataIndex: "id",
    scopedSlots: { customRender: "id" }
  },
  {
    title: "论文标题",
    key: "title",
    dataIndex: "title"
  },
  {
    title: "年份",
    key: "year",
    dataIndex: "year"
  },
  {
    title: "会议或期刊",
    key: "publisher",
    dataIndex: "publisher"
  }
];

export default {
  props: ["type", "resource"],
  data() {
    return {
      columns_patent,
      columns_fund,
      columns_assignee,
      columns_person,
      columns_paper
    };
  },
  computed: {
    conf() {
      let result = { column: "", to: "", slot: "" };
      switch (this.type) {
        case "patent":
          result.column = columns_patent;
          result.to = "/analysis/patent?patent_uuid=";
          result.slot = "doc_id";
          break;
        case "fund":
          result.column = columns_fund;
          result.to = "/analysis/fund?fund=";
          result.slot = "id";
          break;
        case "assignee":
          result.column = columns_assignee;
          result.to = "/analysis/assignee?assignee=";
          result.slot = "fullName";
          break;
        case "person":
          result.column = columns_person;
          result.to = "/analysis/person?inventor=";
          result.slot = "fullName";
          break;
        case "paper":
          result.column = columns_paper;
          result.to = "/analysis/paper?paper=";
          result.slot = "id";
          break;
        default:
          break;
      }
      return result;
    }
  }
};
</script>

<style>
</style>
