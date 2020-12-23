const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./packages/website/dist/index.js",
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    process.env.NODE_ENV !== "production"
                    ? "style-loader"
                    : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed"
                            },
                            includePaths: [
                                path.resolve(__dirname, 'node_modules')
                            ],
                        }
                    },
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
};