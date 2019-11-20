function person(method, param) {
  let res = null;
  switch (method) {
    case "GET":
      if (param.match("/detail/") !== null) {
        res = {
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
      } else if (param.match("/histogram/") !== null) {
        res = {
          data: [
            {
              time: "2000",
              patent_cnt: "10"
            },
            {
              time: "2001",
              patent_cnt: "43"
            },
            {
              time: "2002",
              patent_cnt: "76"
            }
          ],
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
      } else if (param.match("/coopChart/") !== null) {
        res = {
          year_min: 1991,
          year_max: 2000,
          name: [
            {
              person: "Haohao",
              uuid: "haohao"
            },
            {
              person: "Guanqun",
              uuid: "guanqun"
            }
          ],
          data: [[0, 0, 1]]
        };
      }
      break;
  }
  return res;
}

module.exports = person;
