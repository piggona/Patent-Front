<template>
  <div>
    <div class="sub-title">{{option}}</div>
    <hr />
    <br />
    <br />
    <div v-for="dat in list" :key="dat.rank">
      <div class="cited-patents chart-title">
        {{dat.rank}}.
        <a-popover v-if="typeof dat.explain !== 'undefined'" title="IPC分类号解释：">
          <template slot="content">
            <p>{{dat.explain}}</p>
          </template>
          <a id="cited-title">{{dat.title | ellipsis}}</a>
        </a-popover>

        <a
          v-if="typeof dat.explain === 'undefined'"
          id="cited-title"
          @click="showModal(dat.explain,dat.uuid)"
        >{{dat.title | ellipsis}}</a>
        <!-- @click="showModal(dat.explain,dat.uuid)" -->
        <div id="cited-num" class="dep-title">{{dat.date}}</div>
        <!-- <a-modal title="IPC explain" v-model="visible" @ok="handleOk">
          <p>{{dat.explain}}</p> 
        </a-modal>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["option", "list"],
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 35) {
        return value.slice(0, 35) + "...";
      }
      return value;
    }
  },
  // data() {
  //   return {
  //     visible: false
  //   };
  // },
  methods: {
    showModal(val, ref) {
      let { href } = this.$router.resolve({
        name: "patentAnalysis"
      });
      let newhref = href + "?patent_uuid=" + ref;
      window.open(newhref, "_blank");
    }
    // handleOk(e) {
    //   console.log(e);
    //   this.visible = false;
    // }
  }
};
</script>

<style>
</style>
