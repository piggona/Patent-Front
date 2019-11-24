module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  transpileDependencies: [/\bvue-awesome\b/],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/documents/dynamic/api/"
        },
        bypass: function(req, res) {
          console.log(req.path);
        }
        // bypass: function(req, res) {
        //   if (req.headers.accept.indexOf("html") !== -1) {
        //     console.log("Skipping proxy for browser request.");
        //     return "/index.html";
        //   } else if (process.env.MOCK !== "none") {
        //     const name = req.path
        //       .split("/api/")[1]
        //       .split("/")
        //       .join("_");
        //     var file = name.split("_")[0];
        //     var detail = req.path.split(file)[1];
        //     if (
        //       (file === "patent" ||
        //         file === "fund" ||
        //         file === "assignee" ||
        //         file === "paper" ||
        //         file === "person") &&
        //       detail.match("search") !== null
        //     ) {
        //       detail = file;
        //       file = "search";
        //     }
        //     const mock = require(`./mock/${file}`);
        //     const result = mock(req.method, detail);
        //     delete require.cache[require.resolve(`./mock/${file}`)];
        //     return res.send(result);
        //   }
        //   return false;
        // }
      }
    }
  }
};
