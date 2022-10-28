// const path = require("path");
// const express = require("express");
// const { createSSRApp } = require("vue");
// // const { renderToString } = require("vue/server-renderer");
// const { renderToString } = require("@vue/server-renderer");
// const manifest = require("../dist/ssr-manifest.json");

// const server = express();

// const appPath = path.join(__dirname, "../dist", manifest["app.js"]);
// const createApp = require(appPath).default;

// server.use("/img", express.static(path.join(__dirname, "../dist", "img")));
// server.use("/js", express.static(path.join(__dirname, "../dist", "js")));
// server.use("/css", express.static(path.join(__dirname, "../dist", "css")));
// server.use(
//   "/favicon.ico",
//   express.static(path.join(__dirname, "../dist", "favicon.ico"))
// );

// server.get("*", async (req, res) => {
//   const { app } = createApp();
//   const appContent = await renderToString(app);
//   console.log(app, appContent);

//   const html = `
//   <html>
//     <head>
//       <title>Hello</title>
//       <link rel="stylesheet" href="${manifest["app.css"]}" />
//     </head>
//     <body>
//       ${appContent}
//     </body>
//   </html>
//   `;

//   res.send(html);
// });

// server.listen(8080, () => {
//   console.log("서버 실행 8080");
// });
const path = require("path");
const express = require("express");
const fs = require("fs");
const serialize = require("serialize-javascript");
// const { renderToString } = require("@vue/server-renderer");
const { renderToString } = require("vue/server-renderer");
const manifest = require("../dist/server/ssr-manifest.json");

const server = express();

const appPath = path.join(__dirname, "../dist", "server", manifest["app.js"]);
console.log(appPath);
const createApp = require(appPath).default;

server.use(
  "/img",
  express.static(path.join(__dirname, "..dist/client", "img"))
);
server.use("/js", express.static(path.join(__dirname, "../dist/client", "js")));
server.use(
  "/css",
  express.static(path.join(__dirname, "../dist/client", "css"))
);
server.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "../dist/client", "favicon.ico"))
);

server.get("/", async (req, res) => {
  const { app, vuexStore, nativeStore, router } = await createApp();

  router.push(req.url);
  await router.isReady();
  let appContent = await renderToString(app);

  fs.readFile(
    path.join(__dirname, "../dist/client/index.html"),
    (err, html) => {
      if (err) {
        throw err;
      }

      appContent = `<div id="app">${appContent}</div>`;

      html = html.toString().replace('<div id="app"></div>', `${appContent}`);
      res.setHeader("Content-Type", "text/html");
      res.send(html);
    }
  );
});

server.get("/test", async (req, res) => {
  console.log("흠.............");
  res.send("test");
});

server.listen(8282, () => {
  console.log("You can navigate to http://localhost:8282");
});

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   const store = {
//     state: {
//       todoItems: [
//         { id: 1, content: "CSR을 만들어보자", activation: true },
//         { id: 2, content: "CSR 코드 분할", activation: false },
//         { id: 3, content: "SSR을 만들어보자", activation: false },
//       ],
//     },
//   };

//   const html = `
//     <!DOCTYPE html>
//     <html lang="">
//       <head>
//         <meta charset="utf-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width,initial-scale=1.0">
//         <link rel="icon" href="<%= BASE_URL %>favicon.ico">
//         <title><%= htmlWebpackPlugin.options.title %></title>
//       </head>
//       <body>
//         <h1>0</h1>
//         <button class='inc'>증가</button>
//         <button class='dec'>감소</button>
//         <script>
//           window.state = ${JSON.stringify(store.state)}
//           const incButton = document.querySelector('.inc');
//           const decButton = document.querySelector('.dec');
//           const hh = document.querySelector('h1');

//           const counter = () => {
//             let count = 0;
//             const inc = () => {
//               count += 1;
//               return count;
//             }
//             const dec = () => {
//               count -= 1;
//               return count;
//             }

//             return {
//               inc,
//               dec,
//             };
//           }

//           const {inc, dec} = counter();
//           incButton.addEventListener('click',() => {
//             hh.textContent = inc();
//           })

//           decButton.addEventListener('click',() => {
//             hh.textContent = dec();
//           })
//         </script>
//       </body>
//     </html>
//   `;
//   res.send(html);
// });

// app.listen(8080, () => {
//   console.log("서버 실행 8080");
// });
