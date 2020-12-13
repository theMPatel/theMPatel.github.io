const path = require('path');
const webpack = require('webpack');

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
        asyncWebAssembly: true
    }
};