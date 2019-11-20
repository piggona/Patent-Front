function fund(method, param) {
  let res = null;
  switch (method) {
    case "GET":
      if (param.match("/detail/") !== null) {
        res = {
          AwardTitle: "Title",
          AbstractNarration: "Simple Abstract",
          Organization: {
            Directorate: {
              LongName: "北京邮电大学"
            },
            Division: {
              LongName: "计算机学院"
            },
            Code: "10011"
          },
          AwardAmount: "200",
          Institution: [{ Name: "ye" }, { Name: "oh" }, { Name: "fake" }],
          Investigator: [{ FullName: "rich" }, { FullName: "steak" }],
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

module.exports = fund;
