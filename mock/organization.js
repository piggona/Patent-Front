function assignee(method, param) {
  let res = null;
  switch (method) {
    case "GET":
      if (param.match("/detail/") !== null) {
        res = {
          title: {
            fullName: "AssigneeTitle",
            createTime: "2019-08-08"
          },
          statics: {
            inventors: [
              {
                rank: 1,
                person_name: "haohao",
                title: "respect",
                patent_num: "34"
              },
              {
                rank: 2,
                person_name: "guanqun",
                title: "respect112",
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
      } else if (param.match("/histogram/") !== null) {
        res = {
          data: [
            {
              time: "2000",
              patent_cnt: "0"
            },
            {
              time: "2001",
              patent_cnt: "23"
            },
            {
              time: "2002",
              patent_cnt: "56"
            }
          ],
          recent: [
            {
              rank: 1,
              uuid: "A234",
              title: "论持久战",
              date: "2019-08-29"
            },
            {
              rank: 2,
              uuid: "A267",
              title: "论吃饭",
              date: "2019-08-19"
            }
          ]
        };
      } else if (param.match("/pieChart/patentClass/") !== null) {
        res = {
          data: [
            { value: 335, name: "G05D" },
            { value: 310, name: "G05C" },
            { value: 234, name: "G64C" },
            { value: 135, name: "864C" },
            { value: 1548, name: "864D" }
          ],
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
      } else if (param.match("/netChart/") !== null) {
        res = {
          data: [
            {
              uuid: "google",
              categories: 0,
              symbolSize: 10,
              itemStyle: {}
            },
            {
              uuid: "faceBook",
              categories: 1,
              symbolSize: 10,
              itemStyle: { normal: { color: "#EE9A49" } }
            },
            {
              uuid: "Apple",
              categories: 1,
              symbolSize: 10,
              itemStyle: { normal: { color: "#EE9A49" } }
            }
          ],
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
      } else if (param.match("/cloudChart/keywords/") !== null) {
        res = {
          data: [
            {
              name: "汽车",
              value: 10000
            },
            {
              name: "光学",
              value: 6181
            },
            {
              name: "相机",
              value: 4386
            },
            {
              name: "调色",
              value: 4055
            },
            {
              name: "电子",
              value: 2467
            },
            {
              name: "中华人民共和国",
              value: 2244
            },
            {
              name: "三星电子",
              value: 1898
            },
            {
              name: "苹果",
              value: 1484
            },
            {
              name: "诺基亚",
              value: 1112
            },
            {
              name: "北京邮电大学",
              value: 965
            },
            {
              name: "Macbook Pro",
              value: 847
            },
            {
              name: "Elasctic Search",
              value: 582
            },
            {
              name: "食品安全",
              value: 555
            },
            {
              name: "少儿教育",
              value: 550
            },
            {
              name: "诺贝尔奖",
              value: 462
            },
            {
              name: "区块链技术",
              value: 366
            },
            {
              name: "数字货币",
              value: 360
            },
            {
              name: "汽车制造",
              value: 282
            },
            {
              name: "智能驾驶",
              value: 273
            },
            {
              name: "飞行",
              value: 273
            },
            {
              name: "计算机技术",
              value: 265
            }
          ],
          cited: {}
        };
      }
      break;
  }
  return res;
}
module.exports = assignee;
