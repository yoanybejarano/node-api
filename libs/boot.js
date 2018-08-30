module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Node API - Port ${app.get("port")}`);
    });
};