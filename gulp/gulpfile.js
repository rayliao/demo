'use strict';

var gulp = require('gulp');

gulp.task('connect', function () {
    
    var connect = require('connect'),
        serveStatic = require('serve-static');

    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(serveStatic(__dirname));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', function () {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {

    var livereload = require('gulp-livereload');
    livereload.listen();
    
    gulp.watch([
        '*.html',
        'js/*.js'
    ]).on('change', function (file) {
        livereload.changed(file.path);
    });
});