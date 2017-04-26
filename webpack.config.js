const webpack = require("webpack");
const loaders = require("./webpack.loaders");

module.exports = {
    entry: [
        "./src/index.tsx"
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    output: {
        path: __dirname + "/public",
        filename: "dashboard.js"
    },
    module: {
        loaders
    }
};