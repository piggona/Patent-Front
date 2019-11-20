import request from "../util/request";

var titleData = {
  AwardTitle: "",
  AbstractNarration: "",
  Organization: {
    Directorate: {
      LongName: ""
    },
    Division: {
      LongName: ""
    },
    Code: ""
  },
  AwardAmount: "",
  Institution: [{ Name: "" }, { Name: "" }, { Name: "" }],
  Investigator: [{ FullName: "" }, { FullName: "" }],
  venue: "",
  description: {
    DETAILED_DESC: {
      plain: ""
    }
  }
};

function formatCurrency(num) {
  num = num.toString().replace(/\$|\,/g, "");
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

import $ from "jquery";
export default {
  getTitle(cb, uuid) {
    request({
      url: "api/fund/detail/" + uuid,
      method: "get"
    }).then(response => {
      let res = response.data;
      res = $.extend(true, titleData, res);
      if (res) {
        if (res["AwardAmount"]) {
          res["AwardAmount"] = formatCurrency(res["AwardAmount"]);
        }
      }
      cb(res);
    });
  }
};
