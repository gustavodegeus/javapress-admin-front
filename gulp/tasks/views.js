'use strict';

var config = require('../config');
var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var htmlreplace = require('gulp-html-replace');
var gulpif = require('gulp-if');

// Views task
gulp.task('views', function () {

  // Put our index.html in the dist folder
  gulp.src('app/index.html')
    //Replace <base> value to work in gh-pages
    .pipe(gulpif(global.isProd, htmlreplace({
      basetag: {
        src: ['/javapress-admin-front/'],
        tpl: '<base href="%s">'
      }
    })))
    .pipe(gulp.dest(config.dist.root));

  // Process any other view files from app/views
  return gulp.src(config.views.src)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest));

});
