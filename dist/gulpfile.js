const gulp = require('gulp');
const http = require('http');
const connect = require("gulp-connect");
// const concat = require("gulp-concat");
// const uglify = require("gulp-uglify");
// const babel = require("gulp-babel");
// const rename = require("gulp-rename");
// const cleanCss = require("gulp-clean-css");


//搭建服务器
gulp.task("server", done => {
        connect.server({
            root: "dist",
            livereload: true
        })
        done();
    })
    //拷贝文件夹
gulp.task("copyfile", done => {
        gulp.src("**").pipe(gulp.dest("dist")).pipe(connect.reload());
        done();
    })
    //监听
gulp.task("watch", done => {
    gulp.watch("**"), gulp.series("copyfile");
    done();
})



gulp.task("default", gulp.series("server", "watch"));