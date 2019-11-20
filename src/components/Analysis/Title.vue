<template>
  <div>
    <div class="post">
      <div class="user-block">
        <div class="detail-title" style="width: 70%;">
          <span class="username" style="width: 50%">
            <a class="patent-name" href="#">{{ title }}</a>
          </span>
          <br />
          <span
            class="description"
            style="width: 50%; float:right;"
          >Shared publicly - {{ date.documentDate }}</span>
        </div>
        <div class="card-body">
          <div class="top-content">
            <div>
              <a-row>
                <a-col :span="16">
                  <p>{{ abstract.plain }}</p>
                  <a href="javascript:void(0)" id="full-text" @click="showModal">详情...</a>
                </a-col>
                <a-col :span="8" class="side-panel">
                  <a-col :span="12">
                    <strong>
                      <i class="fa fa-anchor mr-1"></i> 申请号码
                    </strong>
                    <p class="text-muted">{{applicationId}}</p>
                    <strong>
                      <i class="fa fa-calendar mr-1"></i> 申请日期
                    </strong>
                    <p class="text-muted">{{date.applicationDate}}</p>
                  </a-col>
                  <a-col :span="12">
                    <strong>
                      <i class="fa fa-map-marker mr-1"></i> 公开号
                    </strong>
                    <p class="text-muted">{{documentId}}</p>

                    <strong>
                      <i class="fa fa-calendar mr-1"></i> 公开（公告）日期
                    </strong>
                    <p class="text-muted">{{date.publishedDate}}</p>
                  </a-col>
                </a-col>
              </a-row>
              <div style="clear: both"></div>
            </div>
          </div>
          <hr />
          <a-row class="bottom-content">
            <a-col :span="8">
              <strong>
                <i class="fa fa-sticky-note"></i> CLASS TYPE
              </strong>
              <p class="text-muted">ipc：</p>
              <a-col>
                <div v-for="dat in classification_name.ipc" :key="dat.content">{{dat.content}};</div>
              </a-col>

              <p class="text-muted">uspc：</p>
              <a-col>
                <div v-for="dat in classification_name.uspc" :key="dat.content">{{dat.content}};</div>
              </a-col>

              <p class="text-muted">cpc：</p>
              <a-col>
                <div v-for="dat in classification_name.cpc" :key="dat.content">{{dat.content}};</div>
              </a-col>
            </a-col>
            <a-col :span="8">
              <strong>
                <i class="fa fa-user mr-1"></i> 申请（专利权）人
              </strong>
              <div class="text-muted">
                <div v-for="assignee in assignees" :key="assignee.uuid">
                  <span class="tag tag-success">
                    <router-link
                      id="display-name"
                      :to="'assignee?assignee=' + assignee.uuid "
                    >{{ assignee.name.raw }}</router-link>
                  </span>
                </div>
              </div>
            </a-col>
            <a-col :span="8">
              <strong>
                <i class="fa fa-user mr-1"></i> 发明（设计）人
              </strong>

              <div class="text-muted">
                <div v-for="dat in inventor_name" :key="dat.uuid">
                  <router-link id="display-name" :to="'person?inventor=' + dat.uuid">{{dat.name}}</router-link>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <!-- /.user-block -->
    </div>
    <a-modal :width="760" :title="title" :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <!-- {{ description.DETAILED_DESC.plain }} -->
      <p id="detail-full">{{ description.DETAILED_DESC.plain }}</p>
      <!-- <div class="card-body">
        <div class="detail-text">
          {{ description.DETAILED_DESC.plain }}
          <p id="detail-full">{{ description.DETAILED_DESC.plain }}</p>
        </div>
      </div>-->
    </a-modal>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "documentDate",
    "description",
    "abstract",
    "applicationId",
    "date",
    "documentId",
    "classification_name",
    "assignees",
    "inventor_name"
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
