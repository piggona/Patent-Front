function patent(method, param) {
  let res = null;
  switch (method) {
    case "GET":
      if (param.match("/histogram/citation/") !== null) {
        res = {
          cited: [
            {
              rank: 1,
              title: "买苹果",
              uuid: "2344",
              date: "2019-08-08"
            },
            {
              rank: 2,
              title: "买香蕉",
              uuid: "2345",
              date: "2019-08-09"
            },
            {
              rank: 3,
              title: "买葡萄",
              uuid: "2347",
              date: "2019-08-10"
            }
          ],
          data: [
            {
              time: "2000",
              patent_cnt: "0"
            },
            {
              time: "2001",
              patent_cnt: "1"
            },
            {
              time: "2002",
              patent_cnt: "2"
            },
            {
              time: "2003",
              patent_cnt: "3"
            },
            {
              time: "2004",
              patent_cnt: "60"
            },
            {
              time: "2005",
              patent_cnt: "12"
            }
          ]
        };
      } else if (param.match("/detail/") !== null) {
        res = {
          inventors: [
            {
              name: {
                fullName: "Haohao"
              },
              uuid: "hao"
            },
            {
              name: {
                fullName: "Guanqun"
              },
              uuid: "guanqun"
            }
          ],
          assignees: [
            {
              name: {
                raw: "LG"
              },
              uuid: "lg"
            },
            {
              name: {
                raw: "Samsung"
              },
              uuid: "samsung"
            }
          ],
          classification: {
            ipc: [
              {
                raw: "A0023"
              },
              {
                raw: "V5356"
              },
              {
                raw: "K946"
              }
            ],
            uspc: [
              {
                raw: "32467"
              },
              {
                raw: "25677"
              },
              {
                raw: "3rtyh"
              }
            ],
            cpc: [
              {
                raw: "yudfsf"
              },
              {
                raw: "3io"
              },
              {
                raw: "tydsb"
              }
            ]
          },
          applicationDate: {
            raw: "20191008"
          },
          documentDate: {
            raw: "20190803"
          },
          publishedDate: {
            raw: "20190721"
          },
          description: {
            DETAILED_DESC: {
              plain: "PATENT DESCRIPTION"
            }
          },
          title: "PATENT TITLE",
          documentId: "23455",
          abstract: {
            plain: "PATENT ABSTRACT"
          },
          applicationId: "212455"
        };
      }
      break;
  }
  return res;
}

module.exports = patent;
