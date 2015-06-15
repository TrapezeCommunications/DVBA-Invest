var jekyllSrc         = './';
var jekyllAssets      = 'assets';
var buildAssets       = "_src";
var build             = 'build';
var buildLibraries    = 'libraries'

// Be wary of items using-->
var developmentAssets = 'build/assets';
var production        = 'build/production';
var productionAssets  = 'build/production/assets';

//--
var development       = '_site';
//--
var sassSource        = '_src/sass';
var compiledCSS       = 'assets/css';
var localDevAlias     = 'invest-preview.dev';



// Settings are exported as a nice nested config object>>
module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, './'],
        routes: {
          "/assets": "assets"
        },
      },
      files: [
        compiledCSS + '/*.css',
        jekyllAssets + '/js/*.js',
      ],
      injectChanges: false,
      ui: {
        port: 9999
      }
    },
    production: {
      server: {
        baseDir: [development, './']
      },
      port: 9998
    }
  },
  delete: {
    src: compiledCSS + "/*",
    jekyllAssets: "_site/assets"
  },
  jekyll: {
    development: {
      src:    jekyllSrc,
      dest:   development,
      config: '_config.yml'
    },
    production: {
      src:    jekyllSrc,
      dest:   development,
      config: '_config.yml,_config.build.yml'
    }
  },
  sass: {
    src:  sassSource,
    dest: compiledCSS,
    options: {
      debugInfo: false,
      trace: false,
      quiet: true,
      noCache: false,
      compass: true,
      bundleExec: true,
      sourcemap: true,
      loadPath: [ buildLibraries ],
      require: ['sass-globbing', 'susy', 'breakpoint']
    }
  },
  scsslint: {
    src: [
      sassSource + '/**/*.{sass,scss}',
      '!' + sassSource + '/abstractions/*',
      '!' + sassSource + '/ignored.scss',
      ],
      options: {
        bundleExec: true,
        config: '.scsslint.yml'
      }
  },
  jshint: {
    src: jekyllAssets + '/js/*.js'
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  browserify: {
    // Enable source maps
    debug: false,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    // bundleConfigs: [{
    //   entries:    buildAssets + '/js/application.js',
    //   dest:       jekyllAssets + '/js',
    //   outputName: 'application.js'
    // }, {
    //   entries:    buildAssets + '/js/head.js',
    //   dest:       jekyllAssets + '/js',
    //   outputName: 'head.js'
    // }]
    bundleConfigs: [{
      entries:    buildAssets + '/js/application.js',
      dest:       jekyllAssets + '/js',
      outputName: 'application.js'
    }]
  },
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      'stopwords.txt',
      jekyllSrc + '_data/**/*.{json,yml,csv}',
      jekyllSrc + '_includes/**/*.{html,xml}',
      jekyllSrc + '_layouts/*.html',
      jekyllSrc + '_locales/*.yml',
      jekyllSrc + '_plugins/*.rb',
      jekyllSrc + 'pages/**/*.{html,xml,md}',
      jekyllSrc + '_posts/*.{markdown,md}'
    ],
    sass:    sassSource + '/**/*.{sass,scss}',
    scripts: buildAssets + '/js/**/*.js',
    images:  buildAssets + '/img/**/*',
    sprites: buildAssets + '/images/**/*.png',
    svg:     'vectors/*.svg'
  },
  images: {
    src:  buildAssets + '/img/**/*',
    dest: jekyllAssets + '/img'
  },
  fonts: {
    src:  buildAssets + '/fonts/**/*',
    dest: jekyllAssets + '/fonts'
  },
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/images/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  }
};