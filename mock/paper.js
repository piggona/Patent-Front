function paper(method, param) {
  let res = null;
  switch (method) {
    case "GET":
      if (param.match("/detail/") !== null) {
        res = {
          title: "Title",
          abstract: "Simple Abstract",
          authors: [
            {
              name: "haohao",
              person_uuid: "haohao",
              org: "BUPT"
            },
            {
              name: "guanqun",
              person_uuid: "guanqun",
              org: "BUPT"
            }
          ],
          keywords: ["ye", "oh", "fake"],
          fos: ["yo", "steak"],
          venue: "respect",
          description: {
            DETAILED_DESC: {
              plain: "Detail Text"
            }
          }
        };
      }
      break;
  }
  return res;
}

module.exports = paper;
