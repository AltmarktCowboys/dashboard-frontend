module.exports = [
    {
        test: /\.css$/,
        include: /(node_modules\\react-toolbox)/,
        loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader"
    },
    {
        test: /\.css$/,
        include: /(node_modules\\font-awesome)/,
        loader: "style-loader!css-loader"
    },
    {
        test: /\.scss$/,
        include: /(src)/,
        loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader"
    },
    {
        test: /\.tsx?$/,
        include: /(src)/,
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