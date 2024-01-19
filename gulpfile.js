const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar SASS
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss') // Ajuste o caminho conforme sua estrutura de diretórios
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css')); // Ajuste o destino conforme necessário
});

// Tarefa para comprimir imagens
gulp.task('images', function() {
    return gulp.src('EBAC_E13/images/*') 
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images')); // Ajuste o destino conforme necessário
});

// Tarefa para comprimir JavaScript
gulp.task('compress', function() {
    return gulp.src('src/js/**/*.js') // Ajuste o caminho conforme sua estrutura de diretórios
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')); // Ajuste o destino conforme necessário
});

// Tarefa padrão que executa tudo
gulp.task('default', gulp.parallel('sass', 'images', 'compress'));
