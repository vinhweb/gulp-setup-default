const { series } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var concat = require('gulp-concat');
// var pug = require('gulp-pug');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('pug', function() {
  return gulp.src('app/pug/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('html', function () {
  return gulp.src(['app/partials/header.html', 'app/partials/indexBody.html', 'app/partials/footer.html'])
    .pipe(concat("index.html"))
    .pipe(gulp.dest("app"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // .pipe(cache(imagemin({
  //     interlaced: true
  //   })))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('clean:dist', function(cb) {
  del.sync('dist');
  cb();
})


gulp.task('watch', gulp.parallel('browserSync','sass', 'html', function (){
  gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
  // gulp.watch('app/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('app/partials/**/*.html', gulp.series('html'));

  gulp.watch('app/*.html', browserSync.reload);
  // gulp.watch('app/partials/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
}));

gulp.task('build', gulp.series(`clean:dist`, `sass`, `html`, `useref`, `images`, `fonts`), function (){
  console.log('Building files');
})

exports.default = series('watch')
