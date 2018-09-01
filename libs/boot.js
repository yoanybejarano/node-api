module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Node API - Port ${app.get("port")}`);
    });
};

/*Test*/
// module.exports = app => {
//     if (process.env.NODE_ENV !== "test") {
//         app.listen(app.get("port"), () => {
//             console.log(`Node.js API - Port ${app.get("port")}`);
//         });
//     }
// };