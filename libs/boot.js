module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Node.js API - Port ${app.get("port")}`);
    });
};

/*Test*/
// var https = require("https"),
//     fs = require("fs");
// module.exports = app => {
//     if (process.env.NODE_ENV !== "test") {
//         const credentials = {
//             key: fs.readFileSync("northwind.key", "utf8"),
//             cert: fs.readFileSync("northwind.cert", "utf8")
//         }
//         app.db.sequelize.sync().done(() => {
//             https.createServer(credentials, app)
//                 .listen(app.get("port"), () => {
//                     console.log(`Node.js API - Port ${app.get("port")}`);
//                 });
//         });
//     }
// };


