module.exports = {
    devServer: {
        port: 3000,
        proxy: {
            '/apis': {
                target: 'http://localhost:3000/shop',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
};
