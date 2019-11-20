<template>
  <div>
    <div class="post">
      <div class="user-block">
        <div class="detail-title" style="width: 70%;">
          <span class="username" style="width: 50%">
            <a class="patent-name" href="#">{{ title }}</a>
          </span>
        </div>
        <div class="card-body">
          <div class="top-content">
            <div>
              <a-row>
                <a-col :span="16">
                  <p>{{ abstract }}</p>
                  <a href="javascript:void(0)" id="full-text" @click="showModal">详情...</a>
                </a-col>
                <a-col :span="8" class="side-panel">
                  <a-col :span="12">
                    <strong>
                      <i class="fa fa-anchor mr-1"></i> 作者
                    </strong>
                    <br />
                    <router-link
                      id="display-name"
                      :to="'person?inventor=' + firstAuthoruuid"
                    >{{firstAuthor}}</router-link>
                    <br />
                    <strong>
                      <i class="fa fa-calendar mr-1"></i> 所属机构
                    </strong>
                    <p class="text-muted">{{firstAuthororg}}</p>
                  </a-col>
                  <a-col :span="12">
                    <strong>
                      <i class="fa fa-map-marker mr-1"></i> 第二作者
                    </strong>
                    <br />
                    <router-link
                      id="display-name"
                      :to="'person?inventor=' + secondAuthoruuid"
                    >{{secondAuthor}}</router-link>
                    <br />
                    <strong>
                      <i class="fa fa-calendar mr-1"></i> 所属机构
                    </strong>
                    <p class="text-muted">{{secondAuthororg}}</p>
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
                <i class="fa fa-sticky-note"></i> 关键词：
              </strong>
              <a-col>
                <div v-for="dat in keywords" :key="keywords.indexOf(dat)">
                  {{dat}};
                  <br />
                </div>
              </a-col>
            </a-col>
            <a-col :span="8">
              <strong>
                <i class="fa fa-user mr-1"></i> 研究领域：
              </strong>
              <div class="text-muted">
                <div v-for="fo in fos" :key="fos.indexOf(fo)">
                  {{ fo }}
                  <br />
                </div>
              </div>
            </a-col>
            <a-col :span="8">
              <strong>
                <i class="fa fa-user mr-1"></i> 发布期刊或杂志：
              </strong>

              <div class="text-muted">
                <div id="display-name">{{venue}}</div>
                <br />
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <!-- /.user-block -->
    </div>
    <a-modal :title="title" :visible="visible" @ok="handleOk" @cancel="handleCancel">
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
    "title",
    "abstract",
    "firstAuthor",
    "firstAuthororg",
    "secondAuthor",
    "secondAuthororg",
    "keywords",
    "fos",
    "venue",
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
