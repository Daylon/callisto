'use strict'

const GULP = require( 'gulp' )
, SASS = require( 'gulp-sass' )
, CHROMATIC_SASS = require( 'chromatic-sass' )
, STYLE_LINT = require( 'sass-lint' )
, GROUP_MEDIA_QUERIES = require( 'gulp-group-css-media-queries' )
, CSSO = require( 'gulp-csso' )
, AUTOPREFIXER = require( 'gulp-autoprefixer' )
, PATHS = require( '../core/core-paths' )


let stylesCompile = function(){
  let autoprefixerOptions = {
    browsers: [ 'last 3 versions' ]
    , cascade: false
  }

  return GULP.src(
    `${PATHS.dir.styles.source}*${PATHS.file.sassStylesheets}`
  )
  .pipe( SASS({functions: Object.assign({}, CHROMATIC_SASS)}) )
  /*
  .pipe( STYLE_LINT({
    reporters: [
      {
        formatter: 'string'
        , console: true
      }
    ]
    , syntax: 'scss'
  }) )
  */
  .pipe( GROUP_MEDIA_QUERIES() )
  .pipe( AUTOPREFIXER( autoprefixerOptions ) )
  .pipe( CSSO() )
  .pipe( GULP.dest(
      `${PATHS.dir.styles.dist}`
    )
  )
}

GULP.task(
  'styles-compile'
  , stylesCompile
)

module.exports = stylesCompile
