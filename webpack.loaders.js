module.exports = [
    {
        test: /\.css$/,
        exclude: /(src|public)/,
        loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader"
    },
    {
        test: /\.scss$/,
        exclude: /(node_modules|public)/,
        loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader"
    },
    {
        test: /\.tsx?$/,
        exclude: /(node_modules|public)/,
        loader: "awesome-typescript-loader"
    },
    {
        test: /\.(ttf|woff|woff2|eot|svg)(\?.+)?$/,
        exclude: /(public)/,
        loader: "file-loader?name=fonts/[hash].[ext]"
    },
    {
        test: /\.(png|gif)$/,
        exclude: /(public)/,
        loader: "file-loader?name=img/[hash].[ext]"
    }
];