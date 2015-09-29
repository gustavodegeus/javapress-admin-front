'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

gulp.task('thirdPartyLibs', function () {

  return gulp.src(config.thirdPartyLibs.src)
    .pipe(gulp.dest(config.thirdPartyLibs.dest));

});
