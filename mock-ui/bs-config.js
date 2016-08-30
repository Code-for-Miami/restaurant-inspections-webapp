module.exports = function (bs) {
    return {
        port: 8000,
        files: ['./mock-ui/**/*.{html,htm,css,js}'],
        server: {
            baseDir: './mock-ui/',
            index: 'mock-ui/index.html'
        }
    }
}
