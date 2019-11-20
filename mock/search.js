function search(method, param) {
  let res = null;
  switch (method) {
    case "POST":
      if (param.match("patent") !== null) {
        res = {
          count: 60,
          data: [
            {
              documentId: "1",
              patent_uuid: "machine",
              title: "机械研究",
              applicationDate: "2019-08-01"
            },
            {
              documentId: "2",
              patent_uuid: "bio",
              title: "生物研究",
              applicationDate: "2019-08-02"
            },
            {
              documentId: "3",
              patent_uuid: "computer",
              title: "计算机研究",
              applicationDate: "2019-08-03"
            },
            {
              documentId: "1",
              patent_uuid: "machine",
              title: "机械研究",
              applicationDate: "2019-08-01"
            },
            {
              documentId: "2",
              patent_uuid: "bio",
              title: "生物研究",
              applicationDate: "2019-08-02"
            },
            {
              documentId: "3",
              patent_uuid: "computer",
              title: "计算机研究",
              applicationDate: "2019-08-03"
            },
            {
              documentId: "1",
              patent_uuid: "machine",
              title: "机械研究",
              applicationDate: "2019-08-01"
            },
            {
              documentId: "2",
              patent_uuid: "bio",
              title: "生物研究",
              applicationDate: "2019-08-02"
            },
            {
              documentId: "3",
              patent_uuid: "computer",
              title: "计算机研究",
              applicationDate: "2019-08-03"
            },
            {
              documentId: "1",
              patent_uuid: "machine",
              title: "机械研究",
              applicationDate: "2019-08-01"
            },
            {
              documentId: "2",
              patent_uuid: "bio",
              title: "生物研究",
              applicationDate: "2019-08-02"
            },
            {
              documentId: "3",
              patent_uuid: "computer",
              title: "计算机研究",
              applicationDate: "2019-08-03"
            },
            {
              documentId: "1",
              patent_uuid: "machine",
              title: "机械研究",
              applicationDate: "2019-08-01"
            },
            {
              documentId: "2",
              patent_uuid: "bio",
              title: "生物研究",
              applicationDate: "2019-08-02"
            },
            {
              documentId: "3",
              patent_uuid: "computer",
              title: "计算机研究",
              applicationDate: "2019-08-03"
            }
          ]
        };
      } else if (param.match("fund") !== null) {
        res = {
          count: 60,
          data: [
            {
              key: "1",
              id: "1",
              uuid: "BUPT rev",
              title: "北邮奖学金",
              start: "2017-01-01",
              end: "2019-01-01"
            },
            {
              key: "2",
              id: "2",
              uuid: "PKU rev",
              title: "北大奖学金",
              start: "2001-01-01",
              end: "2019-02-01"
            },
            {
              key: "3",
              id: "3",
              uuid: "THU rev",
              title: "清华奖学金",
              start: "2001-01-01",
              end: "2019-01-02"
            }
          ]
        };
      } else if (param.match("assignee") !== null) {
        res = {
          count: 60,
          data: [
            {
              uuid: "google",
              fullName: "Google .Inc",
              patent_cnt: "2000",
              location: "USA",
              years_active: "15"
            },
            {
              uuid: "facebook",
              fullName: "FaceBook .Inc",
              patent_cnt: "1000",
              location: "USA",
              years_active: "5"
            },
            {
              uuid: "Alibaba",
              fullName: "Alibaba .Inc",
              patent_cnt: "3000",
              location: "China",
              years_active: "10"
            }
          ]
        };
      } else if (param.match("person") !== null) {
        res = {
          count: 60,
          data: [
            {
              uuid: "haohao",
              fullName: "Yuanhao Jin",
              patents_cnt: "20",
              location: "China",
              years_active: "23"
            },
            {
              uuid: "guanqun",
              fullName: "Guanqun Zhang",
              patents_cnt: "30",
              location: "China",
              years_active: "22"
            },
            {
              uuid: "liuchang",
              fullName: "Chang Liu",
              patents_cnt: "10",
              location: "China",
              years_active: "22"
            }
          ]
        };
      } else if (param.match("paper") !== null) {
        res = {
          count: 60,
          data: [
            {
              uuid: "respect",
              id: "122345",
              title: "论猪可以活多少年",
              year: "2007",
              publisher: "AAAI"
            },
            {
              uuid: "bullrespect",
              id: "122365",
              title: "论牛可以活多少年",
              year: "2008",
              publisher: "AIAI"
            },
            {
              uuid: "monkeyrespect",
              id: "122678",
              title: "论猴子可以活多少年",
              year: "2003",
              publisher: "AIII"
            }
          ]
        };
      }
  }
  return res;
}

module.exports = search;
