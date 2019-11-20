<template>
  <div class="w">
    <a-card
      style="width:100%"
      :tabList="tabListNoTitle"
      :activeTabKey="noTitleKey"
      @tabChange="key => onTabChange(key, 'noTitleKey')"
    >
      <div v-if="noTitleKey === 'patent'" class="patent">
        <div class="search-con">
          <input
            v-model="searchInput"
            class="instruction-input"
            id="search-input"
            placeholder="请输入搜索的专利"
          />
          <button class="btn" id="search-btn" @click="getSearch()">搜索</button>
          <div id="search-result"></div>
        </div>
      </div>
      <div v-if="noTitleKey === 'fund'" class="fund">
        <div class="search-con">
          <input
            v-model="searchInput"
            class="instruction-input"
            id="search-input"
            placeholder="请输入搜索的基金"
          />
          <button class="btn" id="search-btn" @click="getSearch()">搜索</button>
          <div id="search-result"></div>
        </div>
      </div>
      <div v-if="noTitleKey === 'assignee'" class="assignee">
        <div class="search-con">
          <input
            v-model="searchInput"
            class="instruction-input"
            id="search-input"
            placeholder="请输入搜索的机构"
          />
          <button class="btn" id="search-btn" @click="getSearch()">搜索</button>
          <div id="search-result"></div>
        </div>
      </div>
      <div v-if="noTitleKey === 'person'" class="person">
        <div class="search-con">
          <input
            v-model="searchInput"
            class="instruction-input"
            id="search-input"
            placeholder="请输入搜索的人员"
          />
          <button class="btn" id="search-btn" @click="getSearch()">搜索</button>
          <div id="search-result"></div>
        </div>
      </div>
      <div v-if="noTitleKey === 'paper'" class="paper">
        <div class="search-con">
          <input
            v-model="searchInput"
            class="instruction-input"
            id="search-input"
            placeholder="请输入搜索的论文"
          />
          <button class="btn" id="search-btn" @click="getSearch()">搜索</button>
          <div id="search-result"></div>
        </div>
      </div>
      <div>
        <router-link :to="'multi?keyword=&type='+noTitleKey">高级搜索</router-link>
      </div>
    </a-card>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  data() {
    return {
      searchInput: "",
      tabListNoTitle: [
        {
          key: "patent",
          tab: "专利查询"
        },
        {
          key: "assignee",
          tab: "机构查询"
        },
        {
          key: "person",
          tab: "人员查询"
        },
        {
          key: "paper",
          tab: "论文查询"
        },
        {
          key: "fund",
          tab: "基金查询"
        }
      ],
      noTitleKey: "patent"
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    },
    getSearch() {
      let { href } = this.$router.resolve({
        name: "multiSearch",
        params: {
          keyword: this.searchInput,
          type: this.noTitleKey
        }
      });
      let newhref =
        href + "?keyword=" + this.searchInput + "&type=" + this.noTitleKey;
      window.open(newhref, "_blank");
    }
  }
};
</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0%;
}
.search-con {
  padding-top: 2rem;
  padding-bottom: 3rem;
}
input {
  width: 800px;
  height: 40px;
}
.fund-choose.active {
  background-color: #007bff;
  color: #ffffff;
}
.search-con {
  padding: 30px 0 30px 0px;
}
.search-con #search-input {
  width: 70%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  font-size: 15px;
  border: 2px solid #616161;
}
.search-con .search-btn {
  position: absolute;
  height: 40px;
}

.search-con .search-btn:hover {
  color: #fff;
  background: #1565c0;
}

.search-con select {
  margin-bottom: 1rem;
}
.second-class {
  padding-left: 1.5rem;
}
.third-class {
  padding-left: 1.5rem;
}
.main-class-title {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 1rem;
}
.second-class-title {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 1rem;
}
.third-class-title {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 0.75rem;
}
.second-class-word {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 1rem;
}
.third-class-word {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 1rem;
}
.fourth-class-word {
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: 1rem;
}
.main-class-phrase {
  color: #b03a2e;
  font-size: 0.75rem;
  font-weight: bold;
}
.second-class-phrase {
  color: #b9770e;
  font-size: 0.75rem;
  font-weight: bold;
}
.third-class-phrase {
  color: #21618c;
  font-size: 0.75rem;
  font-weight: bold;
}
.fourth-class-phrase {
  color: #cb4335;
  font-size: 0.75rem;
  font-weight: bold;
}
.main-class-btn {
  width: 3rem;
  background-color: #21618c;
  color: #f5f5f5;
}
.second-class-btn {
  width: 3rem;
  background-color: #b03a2e;
  color: #f5f5f5;
}
.third-class-btn {
  width: 3rem;
  background-color: #eb984e;
  color: #f5f5f5;
}
.fourth-class-btn {
  width: 3rem;
  background-color: #5dade2;
  color: #f5f5f5;
}
</style>
