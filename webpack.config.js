const path = require('path');
const postCssPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

module.exports = {
    // where webpack looks initially
    entry: './app/assets/scripts/App.js',
    // where to out files when webpack is done
    output: {
        // new name of bundled js
        filename: 'bundled.js',
        // so that the file sits next to the index file
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function (app, server) {
            server._watch('./app/**/*.html')
        },
        // where the server will look
        contentBase: path.join(__dirname, 'app'),
        // allows reload
        hot: true,
        // localhost
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                // webpack look for css files
                test: /\.css$/i,
                // when you find css files do this
                use: ['style-loader','css-loader?url=false', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: postCssPlugins    
                    }
                }]
            }
        ]
    }
    
}