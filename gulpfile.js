const gulp = require("gulp");
const $ = require("gulp-load-plugins")();


let listaDirToWatch = ["./public/*.*", "./public/css/*.*"];

function crearPublic() {
    console.log("crear public");
    $.livereload.listen();

    return gulp
        .src(listaDirToWatch)
        .pipe($.livereload())
        ;
}


function validar() {
    return gulp
        .src("./public/index.html")
        .pipe($.w3cHtmlValidator())
        .pipe($.w3cHtmlValidator.reporter())
        ;
}


gulp.task("watch", () => {
    gulp.watch(["./public/*.*", "./public/css/*.*"], crearPublic)
});

gulp.task("validar", validar);