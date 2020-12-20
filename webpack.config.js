const path = require('path');

module.exports = {
    entry: "./packages/website/dist/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
};