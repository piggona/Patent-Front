<template>
  <a-card class="w">
    <div slot="title">{{ title }}</div>
    <a-row>
      <a-col :span="16">
        <Chart :ChartStyle="chartStyle" :option="chartOption" />
      </a-col>
      <a-col :span="8">
        <List :option="option" :list="list" />
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import List from "./List";
import Chart from "./Graph";
export default {
  props: ["title", "option", "list", "chartStyle", "chartOption"],
  components: {
    List,
    Chart
  }
};
</script>

<style>
</style>
