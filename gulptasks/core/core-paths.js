'use strict';

const PATHS = {
  dir : {
    base : './'
    , styles : {
      source : './design/'
      , dist : './dist/stylesheets/'
    }
  }
  , file : {
    template : '.+(tpl|hbs)'
    , lessStylesheets : '.less'
    , sassStylesheets : '.scss'
    , stylesheet : '.css'
    , production : '.html'
  }
}

module.exports = PATHS;
