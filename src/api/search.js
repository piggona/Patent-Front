import random from "lodash/random";
import request from "../util/request";

var searchResult = {
  patent: {
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
  },
  fund: {
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
  },
  assignee: {
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
  },
  person: {
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
  },
  paper: {
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
  }
};

function formatCurrency(num) {
  // num = num.toString().replace(/\$|\,/g,'');
  if (isNaN(num)) num = "0";
  let sign = num == (num = Math.abs(num));
  num = Math.floor(num * 100 + 0.50000000001);
  let cents = num % 100;
  num = Math.floor(num / 100).toString();
  if (cents < 10) cents = "0" + cents;
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    num =
      num.substring(0, num.length - (4 * i + 3)) +
      "," +
      num.substring(num.length - (4 * i + 3));
  return "$" + ((sign ? "" : "-") + num + "." + cents);
}

export default {
  getSearchResult(cb, pageType, searchPhrase) {
    request({
      url: "/api/" + pageType + "/search/",
      method: "post",
      data: JSON.stringify(searchPhrase),
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      let res = response.data;
      console.log("收到接口数据", res);
      if (pageType === "patent") {
        res.data.map(x => {
          let date = x["applicationDate"];
          x["applicationDate"] =
            date.substr(0, 4) +
            "/" +
            date.substr(4, 2) +
            "/" +
            date.substr(6, 2);
        });
      }
      if (pageType === "fund") {
        res.data.map(x => {
          let temp = x["amount"];
          x["amount"] = formatCurrency(temp);
        });
      }
      cb(res);
    });
    // setTimeout(() => {
    //   console.log(searchPhrase);
    //   let result = JSON.parse(JSON.stringify(searchResult[pageType]));
    //   switch (pageType) {
    //     case "patent":
    //       result.data.map(x => {
    //         x.documentId = String(random(100));
    //       });
    //       break;
    //     case "fund":
    //       result.data.map(x => {
    //         x.id = String(random(100));
    //       });
    //       break;
    //     case "assignee":
    //       result.data.map(x => {
    //         x.patent_cnt = String(random(2000));
    //       });
    //       break;
    //     case "person":
    //       result.data.map(x => {
    //         x.patents_cnt = String(random(2000));
    //       });
    //       break;
    //     case "paper":
    //       result.data.map(x => {
    //         x.id = String(random(100));
    //       });
    //       break;
    //     default:
    //       break;
    //   }
    //   cb(result);
    // }, 1000);
  }
};
