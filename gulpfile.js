


var gulp=require("gulp");
//获取插件
var htmlmin=require("gulp-htmlmin");//进行HTNL压缩的插件
var uglify=require("gulp-uglify");
var minifyCSS=require("gulp-minify-css")
var obj={

    removeComments:true,
    collapseWhitespace:true,
    collapseBooleanAttributes:true,
    removeEmptyAttributes:true,
    removeScriptTypeAttributes:true,
    removeStyleLinkTypeAttributes:true,
    minifyJS:true,
    minifyCSS:true

}




//定义任务
// gulp.task("one",function(){
//     //制定要处理的文件
//     console.log("one");
//     gulp.src("src/02_dafeiji.html")
//         .pipe(gulp.dest("dest/html")) //处理完后存放的目录

// });


//任务的依赖
// gulp.task("two",function(){
//     console.log("two");
// })

gulp.task("htmlTask",function(){
    gulp.src("src/02_dafeiji.html")
        .pipe( htmlmin(obj) ) //使用插件
        .pipe(gulp.dest("dest/html"))
})

try{
    gulp.task("jsTask",function(){
        gulp.src("src/js/gameEngine.js")
            .pipe( uglify() ) //使用插件
            .pipe(gulp.dest("dest/js"))
    })
}catch(error){
    console.log(error)
}

gulp.task("cssTask",function(){

    gulp.src("src/css/*.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("dest/css"))
})




//默认任务
gulp.task("default",["cssTask"]);