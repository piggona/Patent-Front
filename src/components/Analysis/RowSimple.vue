<template>
  <div class="top-assignees">
    <div class="sub-title">{{option}}</div>
    <hr />
    <div v-for="dat in data" :key="dat.rank">
      <div class="cited-patents">
        <div class="sub-display">{{dat.rank}}. {{dat.cpc}}</div>
        <div class="dep-title" id="cited-num">{{dat.patent_num}} Patents</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["option", "data"]
};
</script>

<style>
</style>
