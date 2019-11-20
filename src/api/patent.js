import echarts from "echarts";
import request from "../util/request";

var normal_detail = {
  inventors: [
    {
      name: {
        fullName: ""
      },
      uuid: ""
    }
  ],
  assignees: [
    {
      name: {
        raw: ""
      },
      uuid: ""
    }
  ],
  classification: {
    ipc: [
      {
        raw: ""
      }
    ],
    uspc: [
      {
        raw: ""
      }
    ],
    cpc: [
      {
        raw: ""
      }
    ]
  },
  applicationDate: {
    raw: ""
  },
  documentDate: {
    raw: ""
  },
  publishedDate: {
    raw: ""
  },
  description: {
    DETAILED_DESC: {
      plain: ""
    }
  },
  title: "",
  documentId: "",
  abstract: {
    plain: ""
  },
  applicationId: ""
};

var chart = {
  cited: [],
  chartOption: {
    color: ["#3398DB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true
        }
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    legend: {
      data: ["专利被引数量"],
      itemGap: 5
    },
    grid: {
      top: "12%",
      left: "8%",
      right: "10%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: []
        // data:[]
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "专利被引数量",
        axisLabel: {
          formatter: function(a) {
            a = +a;
            return isFinite(a) ? echarts.format.addCommas(+a) : "";
          }
        }
      }
    ],
    dataZoom: [
      {
        show: true,
        start: 0,
        end: 100
      },
      {
        type: "inside",
        start: 94,
        end: 100
      },
      {
        show: true,
        yAxisIndex: 0,
        filterMode: "empty",
        width: 30,
        height: "80%",
        showDataShadow: false,
        left: "93%"
      }
    ],
    series: [
      {
        name: "专利被引数量",
        type: "bar",
        // data: ["0", "1", "2", "3", "60", "12"]
        data: []
      }
    ]
  }
};

function get_date(res) {
  var date = { documentDate: "", applicationDate: "", publishedDate: "" };
  date["documentDate"] =
    res["documentDate"]["raw"].substr(0, 4) +
    "/" +
    res.documentDate.raw.substr(4, 2) +
    "/" +
    res.documentDate.raw.substr(6, 2);
  console.log("documentDate");
  console.log(date["documentDate"]);
  date["applicationDate"] =
    res.applicationDate.raw.substr(0, 4) +
    "/" +
    res.applicationDate.raw.substr(4, 2) +
    "/" +
    res.applicationDate.raw.substr(6, 2);
  console.log("applicationDate");
  console.log(date["applicationDate"]);
  console.log("publishedDate");
  console.log(res.publishedDate.raw);
  date["publishedDate"] =
    res.publishedDate.raw.substr(0, 4) +
    "/" +
    res.publishedDate.raw.substr(4, 2) +
    "/" +
    res.publishedDate.raw.substr(6, 2);

  return date;
}

function get_name(inventor) {
  var inventor_name = [];
  for (let i = 0; i < inventor.length; i++) {
    if (JSON.stringify(inventor[i]) != "{}") {
      let name = { name: "", uuid: "" };
      name["name"] = inventor[i].name.fullName;
      name["uuid"] = inventor[i].uuid;
      inventor_name.push(name);
    }
  }
  return inventor_name;
}

function get_assignees(assignees) {
  var assignees_name = [];
  for (let i = 0; i < assignees.length; i++) {
    if (JSON.stringify(assignees[i]) != "{}") {
      let name = { name: "", uuid: "" };
      name["name"] = assignees[i].name.raw;
      name["uuid"] = assignees[i].uuid;
      assignees_name.push(name);
    }
  }

  return assignees_name;
}

function get_classification(classification) {
  var classification_name = { ipc: [], uspc: [], cpc: [] };
  var ipc = classification.ipc;
  var uspc = classification.uspc;
  var cpc = classification.cpc;
  console.log("ipc：");
  console.log(ipc);
  console.log("uspc：");
  console.log(uspc);
  console.log("cpc：");
  console.log(cpc);
  for (let i = 0; i < ipc.length; i++) {
    if (JSON.stringify(ipc[i]) != "{}") {
      let content = { content: "" };
      content["content"] = ipc[i].raw;
      classification_name["ipc"].push(content);
    }
  }
  for (let i = 0; i < uspc.length; i++) {
    console.log("uspc");
    console.log(JSON.stringify(uspc[i]));
    if (JSON.stringify(uspc[i]) != "{}") {
      let content = { content: "" };
      content["content"] = uspc[i].raw;
      classification_name["uspc"].push(content);
    }
  }
  for (let i = 0; i < cpc.length; i++) {
    if (JSON.stringify(cpc[i]) != "{}") {
      let content = { content: "" };
      content["content"] = cpc[i].raw;
      classification_name["cpc"].push(content);
    }
  }
  return classification_name;
}

import $ from "jquery";
export default {
  getTitle(cb, uuid) {
    request({
      url: "/api/patent/detail/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      res = $.extend(true, normal_detail, res);
      console.log("专利详情请求返回数据:", res);
      var inventor = res.inventors;
      var inventor_name = get_name(inventor);
      var assignees = res.assignees;
      var assignees_name = get_assignees(assignees);
      var classification = res.classification;
      var classification_name = get_classification(classification);
      var date = get_date(res);
      res["inventor_name"] = inventor_name;
      res["assignees_name"] = assignees_name;
      res["classification_name"] = classification_name;
      res["date"] = date;
      cb(res);
    });
  },
  getChart(cb, uuid) {
    request({
      url: "/api/patent/histogram/citation/" + uuid,
      method: "GET"
    }).then(response => {
      let res = response.data;
      let cited = res;
      res = res["data"];
      if (res) {
        // 接收页面信息
        for (let i = 0; i < res.length; i++) {
          chart.chartOption.xAxis[0].data.push(res[i].time);
          chart.chartOption.series[0].data.push(res[i].patent_cnt);
        }
      }
      chart.cited = cited.cited;
      cb(chart);
    });
    // setTimeout(() => {
    //   console.log(uuid);
    //   cb(chart);
    // }, 1000);
  }
};
