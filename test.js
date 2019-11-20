const path = require("path");

let test = "/api/patent/detail/submit";
console.log(test);
var name = "";
name = test
  .split("/api/")[1]
  .split("/")
  .join("_");
const file = name.split("_")[0];
console.log(file);
const mock = require(`./mock/${file}`);
const detail = test.split(file)[1];
console.log(detail);
console.log(detail.match("/detail/") !== null);
console.log(mock("GET", detail));
// let res = {
//   data: [
//     { institution_name: "institution_name", value: 25 },
//     { institution_name: "institution_name2", value: 75 }
//   ]
// };
// console.log(res["data"].length);
