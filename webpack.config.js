const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    entry: "./packages/website/src/bootstrap.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "templates/index.html")
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "rust"),
            outDir: path.resolve(__dirname, "packages/rust-app"),
        }),
    ],
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bootstrap.js",
    },
};