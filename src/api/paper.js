import request from "../util/request";

var titleData = {
  title: "",
  abstract: "",
  firstAuthor: "",
  firstAuthoruuid: "",
  firstAuthororg: "",
  secondAuthor: "",
  secondAuthoruuid: "",
  secondAuthororg: "",
  keywords: [""],
  fos: ["", ""],
  venue: "",
  description: {
    DETAILED_DESC: {
      plain: ""
    }
  },
  authors: [
    {
      name: "",
      person_uuid: "",
      org: ""
    }
  ]
};

import $ from "jquery";
export default {
  getTitle(cb, uuid) {
    request({
      url: "api/paper/detail/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      res = $.extend(true, titleData, res);
      if (res) {
        // 接收页面信息
        if (res["authors"].length == 1) {
          res["firstAuthor"] = res["authors"][0]["name"];
          res["firstAuthoruuid"] = res["authors"][0]["person_uuid"];
          res["firstAuthororg"] = res["authors"][0]["org"];
        } else if (res["authors"].length >= 2) {
          res["firstAuthor"] = res["authors"][0]["name"];
          res["firstAuthoruuid"] = res["authors"][0]["person_uuid"];
          res["firstAuthororg"] = res["authors"][0]["org"];
          res["secondAuthor"] = res["authors"][1]["name"];
          res["secondAuthoruuid"] = res["authors"][1]["person_uuid"];
          res["secondAuthororg"] = res["authors"][1]["org"];
        }
      }
      cb(res);
    });
    // request({
    //   url: "/api/patent/detail/" + uuid,
    //   method: "get"
    // }).then(response => {
    //   let res = response.data;
    //   var inventor = res.inventors;
    //   var inventor_name = get_name(inventor);
    //   var assignees = res.assignees;
    //   var assignees_name = get_assignees(assignees);
    //   var classification = res.classification;
    //   var classification_name = get_classification(classification);
    //   var date = get_date(res);
    //   res["inventor_name"] = inventor_name;
    //   res["assignees_name"] = assignees_name;
    //   res["classification_name"] = classification_name;
    //   res["date"] = date;
    //   cb(res);
    // });
    // console.log(uuid);
    // cb(titleData);
  }
};
