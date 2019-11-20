<template>
  <div>
    <div class="post">
      <div class="user-block">
        <div class="detail-title" style="width: 70%;">
          <span class="username" style="width: 50%">
            <a class="patent-name" href="#">{{ AwardTitle }}</a>
          </span>
        </div>
        <div class="card-body">
          <div class="top-content">
            <div>
              <a-row>
                <a-col :span="16">
                  <p>{{ AbstractNarration }}</p>
                  <a href="javascript:void(0)" id="full-text" @click="showModal">详情...</a>
                </a-col>
                <a-col :span="8" class="side-panel">
                  <a-col :span="12">
                    <strong>
                      <i class="fa fa-anchor mr-1"></i> 主分类
                    </strong>
                    <p class="text-muted">{{Organization.Directorate.LongName}}</p>
                    <strong>
                      <i class="fa fa-calendar mr-1"></i> 次级分类
                    </strong>
                    <p class="text-muted">{{Organization.Division.LongName}}</p>
                  </a-col>
                  <a-col :span="12">
                    <strong>
                      <i class="fa fa-map-marker mr-1"></i> 组织代码
                    </strong>
                    <p class="text-muted">{{Organization.Code}}</p>

                    <strong>
                      <i class="fa fa-calendar mr-1"></i> 基金金额
                    </strong>
                    <p class="text-muted">{{AwardAmount}}</p>
                  </a-col>
                </a-col>
              </a-row>
              <div style="clear: both"></div>
            </div>
          </div>
          <hr />
          <a-row class="bottom-content">
            <a-col :span="12">
              <strong>
                <i class="fa fa-sticky-note"></i> 项目承担人：
              </strong>
              <a-col>
                <div v-for="dat in Institution" :key="Institution.indexOf(dat)">
                  {{dat.Name}};
                  <br />
                </div>
              </a-col>
            </a-col>
            <a-col :span="12">
              <strong>
                <i class="fa fa-user mr-1"></i> 项目负责人：
              </strong>
              <div class="text-muted">
                <div v-for="fo in Investigator" :key="Investigator.indexOf(fo)">
                  {{ fo.FullName }}
                  <br />
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <!-- /.user-block -->
    </div>
    <a-modal :title="AwardTitle" :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <div class="card-body">
        <div class="detail-text">
          <p id="detail-full">{{ description.DETAILED_DESC.plain }}</p>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  props: [
    "AwardTitle",
    "AbstractNarration",
    "Organization",
    "AwardAmount",
    "Institution",
    "Investigator",
    "description"
  ],
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleCancel(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>

<style>
.top-content {
  padding-bottom: 5%;
}
.bottom-content {
  padding-top: 5%;
}
/* .side-panel {
  border-style: solid;
  border-width: 0.5px;
} */
</style>
