import echarts from "echarts";
import request from "../util/request";

var res = {
  title: {
    createTime: "2019-08-01",
    fullName: "Guanqun"
  },
  statics: {
    assignees: [
      {
        rank: 1,
        name: "Apple .Inc",
        uuid: "apple",
        patent_num: "34"
      },
      {
        rank: 2,
        name: "Dajiang .Inc",
        uuid: "dajiang",
        patent_num: "12"
      }
    ],
    ipcClass: [
      {
        rank: 1,
        ipc: "1245",
        patent_num: "34"
      },
      {
        rank: 2,
        ipc: "1267",
        patent_num: "13"
      }
    ],
    cpcClass: [
      {
        rank: 1,
        cpc: "5478",
        patent_num: "56"
      },
      {
        rank: 2,
        cpc: "898",
        patent_num: "9"
      }
    ]
  }
};

var resBar = {
  data: {
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
      data: ["专利数量"],
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
        data: [
          "2000",
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018"
        ]
        // data: []
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "专利数量",
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
        name: "专利数量",
        type: "bar",
        data: ["0", "1", "2", "3", "60", "12"]
        // data: []
      }
    ]
  },
  recent: [
    {
      rank: 1,
      uuid: "res pat",
      title: "how do you do",
      date: "2019-08-08"
    },
    {
      rank: 2,
      uuid: "res pat",
      title: "I'm fine thank you",
      date: "2019-08-09"
    }
  ]
};

var resPie = {
  data: {
    title: {
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["G05D", "G05C", "G64C", "864C", "864D"]
      // data: []
    },
    series: [
      {
        name: "专利种类",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "G05D" },
          { value: 310, name: "G05C" },
          { value: 234, name: "G64C" },
          { value: 135, name: "864C" },
          { value: 1548, name: "864D" }
        ],
        // data: [],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  },
  ipc_explain: [
    {
      ipc: "A1345",
      explain: "农业",
      count: "23"
    },
    {
      ipc: "A13456",
      explain: "工业",
      count: "13"
    }
  ]
};

var resCo = {
  year_min: "2001",
  year_max: "2018",
  name: ["Haohao", "Guanqun", "Liuchang"],
  data: {
    tooltip: {
      position: "top"
    },
    title: [],
    singleAxis: [],
    series: []
  }
};

var resNet = {
  data: {
    color: ["#EEC900", "#6CA6CD", "#EE9A49"],
    legend: {
      data: ["专利权人", "专利", "发明人"] //此处的数据必须和关系网类别中name相对应
    },
    series: [
      {
        type: "graph",
        layout: "force",
        roam: true,
        animation: false,
        draggable: true,
        data: "",
        categories: "",
        force: {
          edgeLength: 80, //连线的长度
          repulsion: 100 //子节点之间的间距
        },
        label: {
          normal: {
            position: "right"
          }
        },
        edges: ""
      }
    ]
  },
  cited: [
    {
      rank: 1,
      uuid: "2345",
      title: "RNG牛逼",
      count: "20"
    },
    {
      rank: 2,
      uuid: "54576",
      title: "小虎杀疯了",
      count: "2"
    }
  ]
};

import $ from "jquery";
export default {
  getRes(cb, inventor) {
    request({
      url: "/api/person/detail/" + inventor,
      method: "get"
    }).then(response => {
      let res = response.data;
      console.log(res);
      res = $.extend(true, res, res);
      res.title.createTime = res.title.createTime.substr(0, 10);
      cb(res);
    });
    // setTimeout(() => {
    //   console.log(inventor);
    //   cb(res);
    // }, 1000);
  },
  getResBar(cb, inventor) {
    request({
      url: "/api/person/histogram/" + inventor,
      method: "get"
    }).then(response => {
      let res = response.data;
      let data = [];
      let xdata = [];
      res.data.map(x => {
        data.push(x.patent_cnt);
        xdata.push(x.time);
      });
      resBar.data.series[0].data = data;
      resBar.data.xAxis[0].data = xdata;
      resBar.recent = res["recent"];
      cb(resBar);
    });
    // setTimeout(() => {
    //   console.log(inventor);
    //   cb(resBar);
    // }, 1000);
  },
  getResPie(cb, inventor) {
    request({
      url: "api/person/pieChart/patentClass/" + inventor,
      method: "get"
    }).then(response => {
      let res = response.data;
      console.log("pie:", res);
      resPie["ipc_explain"] = res["ipc_explain"];
      console.log(res);
      res.data.map(x => {
        resPie.data.legend.data.push(x.name);
      });
      resPie.data.series[0].data = res.data;
      cb(resPie);
    });
    // setTimeout(() => {
    //   console.log(inventor);
    //   cb(resPie);
    // }, 1000);
  },
  getResCo(cb, inventor) {
    request({
      url: "/api/person/coopChart/" + inventor,
      method: "get"
    }).then(response => {
      let res = response.data;
      let years = [];
      let inventors = [];
      let data = [];
      for (let i = res["year_min"]; i <= res["year_max"]; i++) {
        years.push(i);
      }
      for (let i = 0; i < res["name"].length; i++) {
        inventors.push(res.name[i]);
      }
      data = res.data;
      echarts.util.each(inventors, function(day, idx) {
        console.log(idx);
        resCo.data.title.push({
          textBaseline: "middle",
          top: ((idx + 0.5) * 100) / 7 + "%",
          text: day["person"],
          link: "#/analysis/person?inventor=" + day["uuid"],
          textStyle: { color: "#42A5F5" }
        });
        resCo.data.singleAxis.push({
          left: 200,
          type: "category",
          boundaryGap: true,
          data: years,
          top: (idx * 100) / 7 + 5 + "%",
          height: 100 / 7 - 10 + "%",
          axisLabel: {
            interval: 1
          }
        });
        resCo.data.series.push({
          singleAxisIndex: idx,
          coordinateSystem: "singleAxis",
          type: "scatter",
          data: [],
          symbolSize: function(dataItem) {
            return 30;
          }
        });
      });

      echarts.util.each(data, function(dataItem) {
        resCo.data.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
      });
    });
    setTimeout(() => {
      console.log(inventor);
      cb(resCo);
    }, 1000);
  },
  getResNet(cb, inventor) {
    request({
      url: "/api/person/netChart/" + inventor,
      method: "get"
    }).then(response => {
      let res = response.data;
      let webkitDep = {
        type: "force",
        categories: [
          //关系网类别，可以写多组
          {
            name: "专利权人", //关系网名称
            keyword: {},
            base: "专利权人"
          },
          {
            name: "专利", //关系网名称
            keyword: {},
            base: "专利"
          },
          {
            name: "发明人", //关系网名称
            keyword: {},
            base: "发明人"
          }
        ],
        nodes: [
          //展示的节点
        ],
        links: [
          //节点之间连接
        ]
      };
      let s = 0;
      let netres = res["data"];
      resNet.cited = res.cited;
      for (let i = 0; i < netres.length; i++) {
        if (netres[i]["uuid"] == inventor) {
          s = i;
          break;
        }
      }
      let node_cnt = 0;
      for (let i = 0; i < netres.length; i++) {
        if (netres[i].categories === 0 && i == s) {
          netres[i]["symbolSize"] = 30;
          netres[i]["itemStyle"] = { normal: { color: "#EEC900" } };
          webkitDep["nodes"].push(netres[i]);
          webkitDep["links"].push({ source: s, target: node_cnt });
          node_cnt = node_cnt + 1;
        } else if (netres[i].categories === 1) {
          netres[i]["symbolSize"] = 20;
          netres[i]["itemStyle"] = { normal: { color: "#6CA6CD" } };
          webkitDep["nodes"].push(netres[i]);
          webkitDep["links"].push({ source: s, target: node_cnt });
          node_cnt = node_cnt + 1;
        } else if (netres[i].categories === 2) {
          webkitDep["nodes"].push(netres[i]);
          netres[i]["itemStyle"] = { normal: { color: "#EE9A49" } };
          webkitDep["links"].push({ source: s, target: node_cnt });
          node_cnt = node_cnt + 1;
        }
      }
      webkitDep.nodes.map((x, idx) => {
        x.id = idx;
      });
      resNet.data.series[0].data = webkitDep.nodes;
      resNet.data.series[0].categories = webkitDep.categories;
      resNet.data.series[0].edges = webkitDep.links;
      cb(resNet);
    });
  }
};
