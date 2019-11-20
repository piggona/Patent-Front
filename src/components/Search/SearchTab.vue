<template>
  <div>
    <ul class="products-list product-list-in-card pl-2 pr-2">
      <div class="form-group" id="titlesearch-form-group">
        <div v-if="type === 'radio'">
          <a-radio-group @change="onChange" v-model="value" v-for="dat in data" :key="dat.id">
            <a-radio :value="dat.value">{{ dat.ex }}</a-radio>
          </a-radio-group>
        </div>
        <div v-if="type === 'checkbox'">
          <a-checkbox-group
            v-model="checkedList"
            @change="onCheckChange"
            v-for="dat in data"
            :key="dat.id"
          >
            <a-checkbox :value="dat.value">{{ dat.ex }}</a-checkbox>
          </a-checkbox-group>
        </div>
        <div v-if="type === 'date'">
          <a-range-picker
            style="width: 75%"
            :showTime="{ format: 'HH:mm' }"
            format="YYYY-MM-DD HH:mm"
            :placeholder="['Start Time', 'End Time']"
            @change="onDateChange"
            @ok="onOk"
          />
        </div>
      </div>
      <div v-if="isSearch" class="input-group input-group-sm">
        <input v-model="inputData" type="text" class="form-control" @change="onInputChange" />
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["id", "type", "data", "isSearch", "pageType"],
  data() {
    return {
      checked: true,
      value: "and",
      checkedList: [],
      inputData: ""
    };
  },
  methods: {
    onInputChange() {
      let id = this.id;
      let val = this.inputData;
      this.$store.commit("search/setQuery", { id, val });
    },
    onChange(e) {
      console.log("radio checked", e.target.value);
      let val = e.target.value;
      let id = this.id;
      if (this.pageType === "patent" && id === 4) {
        val = "classification." + val + ".raw";
        this.$store.commit("search/setAttr", { id, val });
      } else {
        this.$store.commit("search/setLogic", { id, val });
      }
    },
    onCheckChange(checkedList) {
      console.log(this.id);
      console.log("checked = ", checkedList);
      let len = checkedList.length;
      let val = checkedList[0];
      if (len > 1) {
        for (let i = 1; i < len; i++) {
          val = val + " " + checkedList[i];
        }
      }
      let id = this.id;
      this.$store.commit("search/setQuery", { id, val });
    },
    onDateChange(value, dateString) {
      console.log("Selected Time: ", value);
      console.log("Formatted Selected Time: ", dateString);
      let year_from = dateString[0];
      year_from = year_from.split(" ")[0];
      let year_to = dateString[1];
      year_to = year_to.split(" ")[0];
      let val = String(year_from) + " " + String(year_to);
      if (val === " ") {
        val = "";
      }
      console.log("onDateChange", val);
      let id = this.id;
      this.$store.commit("search/setQuery", { id, val });
    },
    onOk(value) {
      console.log(value);
      // let id = this.id;
      // console.log(
      //   "onOk: ",
      //   value[0]["_d"]
      //     .toLocaleString()
      //     .split(" ")[0]
      //     .replace(new RegExp("/", "g"), "-")
      // );
      // let year_from = value[0]["_d"]
      //   .toLocaleString()
      //   .split(" ")[0]
      //   .replace(new RegExp("/", "g"), "-");
      // let year_to = value[1]["_d"]
      //   .toLocaleString()
      //   .split(" ")[0]
      //   .replace(new RegExp("/", "g"), "-");
      // let val = String(year_from) + " " + String(year_to);
      // this.$store.commit("search/setQuery", { id, val });
    }
  },
  mounted() {
    let dat = this.data;
    for (var i = 0; i < dat.length; i++) {
      let val = dat[i];
      this.checkedList.push(val.value);
    }
  }
};
</script>

<style>
</style>
