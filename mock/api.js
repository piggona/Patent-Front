var api = {
  "/api/organization/detail/": {
    title: {
      fullName: "",
      createTime: ""
    },
    statics: {
      inventors: [
        {
          rank: 0,
          person_name: "",
          title: "",
          patent_num: ""
        }
      ],
      ipcClass: [
        {
          rank: 0,
          ipc: "",
          patent_num: ""
        }
      ],
      cpcClass: [
        {
          rank: 0,
          cpc: "",
          patent_num: ""
        }
      ]
    }
  },
  "/api/organization/histogram/": {
    data: [
      {
        time: "",
        patent_cnt: ""
      }
    ],
    recent: [
      {
        rank: 0,
        uuid: "",
        title: "",
        date: ""
      }
    ]
  },
  "/api/organization/pieChart/patentClass/": {
    data: [{ value: 0, name: "" }],
    ipc_explain: [
      {
        ipc: "",
        explain: "",
        count: ""
      }
    ]
  },
  "/api/organization/netChart/": {
    data: [
      {
        uuid: "",
        categories: 0,
        symbolSize: 0,
        itemStyle: {}
      }
    ],
    cited: [
      {
        rank: 0,
        uuid: "",
        title: "",
        count: ""
      }
    ]
  },
  "/api/organization/cloudChart/keywords/": {
    data: [
      {
        name: "",
        value: 0
      }
    ],
    cited: {}
  },
  "/api/patent/histogram/citation/": {
    cited: [
      {
        rank: 0,
        title: "",
        uuid: "",
        date: ""
      }
    ],
    data: [
      {
        time: "",
        patent_cnt: ""
      }
    ]
  },
  "/api/patent/detail/": {
    inventors: [
      {
        name: {
          fullName: ""
        },
        uuid: ""
      }
    ],
    assignees: [
      {
        name: {
          raw: ""
        },
        uuid: ""
      }
    ],
    classification: {
      ipc: [
        {
          raw: ""
        }
      ],
      uspc: [
        {
          raw: ""
        }
      ],
      cpc: [
        {
          raw: ""
        }
      ]
    },
    applicationDate: {
      raw: ""
    },
    documentDate: {
      raw: ""
    },
    publishedDate: {
      raw: ""
    },
    description: {
      DETAILED_DESC: {
        plain: ""
      }
    },
    title: "",
    documentId: "",
    abstract: {
      plain: ""
    },
    applicationId: ""
  },
  "/api/person/detail/": {
    title: {
      createTime: "",
      fullName: ""
    },
    statics: {
      assignees: [
        {
          rank: 0,
          name: "",
          uuid: "",
          patent_num: ""
        }
      ],
      ipcClass: [
        {
          rank: 0,
          ipc: "",
          patent_num: ""
        }
      ],
      cpcClass: [
        {
          rank: 0,
          cpc: "",
          patent_num: ""
        }
      ]
    }
  },
  "/api/person/histogram/": {
    data: [
      {
        time: "",
        patent_cnt: ""
      }
    ],
    recent: [
      {
        rank: 0,
        uuid: "",
        title: "",
        date: ""
      }
    ]
  },
  "/api/person/pieChart/patentClass/": {
    data: [{ value: 0, name: "" }],
    ipc_explain: [
      {
        ipc: "",
        explain: "",
        count: ""
      }
    ]
  },
  "/api/person/netChart/": {
    data: [
      {
        uuid: "",
        categories: 0,
        symbolSize: 0,
        itemStyle: {}
      }
    ],
    cited: [
      {
        rank: 0,
        uuid: "",
        title: "",
        count: ""
      }
    ]
  },
  "/api/person/coopChart/": {
    year_min: 0,
    year_max: 0,
    name: [
      {
        person: "",
        uuid: ""
      },
      {
        person: "",
        uuid: ""
      }
    ],
    data: [[0, 0, 1]]
  },
  "api/patent/search": {
    count: 0,
    data: [
      {
        documentId: "",
        patent_uuid: "",
        title: "",
        applicationDate: ""
      }
    ]
  },
  "api/fund/search": {
    count: 60,
    data: [
      {
        key: "",
        id: "",
        uuid: "",
        title: "",
        start: "",
        end: ""
      }
    ]
  },
  "api/assignee/search": {
    count: 0,
    data: [
      {
        uuid: "",
        fullName: "",
        patent_cnt: "",
        location: "",
        years_active: ""
      }
    ]
  },
  "api/person/search": {
    count: 0,
    data: [
      {
        uuid: "",
        fullName: "",
        patents_cnt: "",
        location: "",
        years_active: ""
      }
    ]
  },
  "api/paper/search": {
    count: 0,
    data: [
      {
        uuid: "",
        id: "",
        title: "",
        year: "",
        publisher: ""
      }
    ]
  }
};
