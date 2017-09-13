var gulp = require('gulp'),
    liveServer = require('gulp-live-server'),
    clean = require('gulp-clean'),
    usemin = require('gulp-usemin'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    cleanCss = require('gulp-clean-css'),
    replace = require('gulp-replace'),
    rev = require('gulp-rev'),
    es = require('event-stream'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence');


    var path_public = './src/',
        path_deploy = './app/';
        
    /**
     * Server
     */
    gulp.task('serve', function() {
        var server = liveServer.static(['./', path_public]);
        server.start();

        gulp.watch(path_public + 'js/**/*.js', ['jshint']);
        
        gulp.watch([ path_public + 'js/**/*.js', path_public + 'css/**/*.css', path_public + 'index.html', path_public + 'views/**/*.html'], function (file) {
            server.start.bind(server)();
            server.notify.bind(server)(file);
        });
    });



    /**
     * Taks to development and Deploy
     */
    gulp.task('clean', function () {
        return gulp.src(path_deploy)
            .pipe(clean());
    });


    gulp.task('jshint', function () {
        return gulp.src(path_public + 'js/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });


    gulp.task('htmlmin', function () {
        return gulp.src(path_public + 'views/**/*.html')
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest(path_deploy + 'views'))
    });


    gulp.task('imagemin', function () {
        gulp.src(path_public + 'assets/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest(path_deploy + 'assets/img'))
    });

    
    gulp.task('copy', function () {
        return gulp.src(path_public + 'index-prod.html')
            .pipe(rename('index.html'))
            .pipe(gulp.dest(path_deploy));
    });
    
        
    gulp.task('copyFontAwsome', function () {
        return gulp.src('./node_modules/font-awesome/fonts/*.*')
            .pipe(gulp.dest(path_deploy + 'fonts'));
    });
    
    
    gulp.task('usemin', function () {
        return gulp.src(path_public + 'index.html')
            .pipe(usemin({
                clean: [ clean() ],
                html: [ htmlmin([path_public + 'views/**/*.html'], { collapseWhitespace: true }) ],
                css: [ cssmin(), rev() ],
                js: [ uglify({ 
                            mangle: false,
                            compress: { drop_console: true }
                        }), 
                        rev() ],
                inlinejs: [ uglify() ],
                inlinecss: [ cleanCss(), 'concat' ]
            }))
            .pipe(gulp.dest(path_deploy));
    });


    gulp.task('default', function (cb) {
        return runSequence('clean', ['jshint', 'htmlmin', 'usemin', 'imagemin', 'copy', 'copyFontAwsome']);
    });