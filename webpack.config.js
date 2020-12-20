const path = require('path');

module.exports = {
    entry: "./packages/website/dist/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
};