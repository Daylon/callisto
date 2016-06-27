'use strict'

const GULP = require( 'gulp' )
, SEQUENCE = require( 'gulp-sequence' ).use( GULP )

let designSystemBuild = function(){
  return GULP.start( 'styles-compile' )
}
, defaultGulpTask = () => SEQUENCE( 'build', 'core-watch' )()

GULP.task(
  'build'
  , designSystemBuild
)

GULP.task(
  'default'
  , defaultGulpTask
)

module.exports = defaultGulpTask
