const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    entry: "./packages/website/src/index.ts",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "templates/index.html")
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "rust"),
            outDir: path.resolve(__dirname, "packages/rust-app"),
        }),
    ],
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".wasm"]
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    experiments: {
        asyncWebAssembly: true,
    }
};