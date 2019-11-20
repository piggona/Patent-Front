<template>
  <div class="user-block" id="assignee-block">
    <div class="detail-title" style="width: 70%;">
      <span class="username">
        <a class="patent-name" href="#">{{ fullName }}</a>
      </span>
      <br />
      <span class="description" style="margin-left: 2.5rem">Shared publicly - {{ createTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fullName", "createTime"]
};
</script>

<style>
</style>
