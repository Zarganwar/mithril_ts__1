module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './build/build.js',
        library: 'applicationZero',
        libraryTarget: 'var'
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.less$/, loader: "style!css!less" }
        ]
    }
}