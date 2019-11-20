<template>
  <div class="top-assignees">
    <div class="sub-title">{{option}}</div>
    <hr />
    <div v-for="dat in data" :key="dat.rank">
      <div class="cited-patents">
        {{dat.rank}}.
        <router-link :to="dat.href" id="cited-title">{{dat.title}}</router-link>
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
