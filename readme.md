# Invest in Victoria
A Microsite for the Downtown Victoria Business Association
Design and Development by Trapeze Communications, Victoria BC

[INSERT a paragraph or two here about what the Invest Project is all about.]



## Credits:
Design - Laura Gordon
Development - Jem Bezooyen


## Development:
This theme was developed using the Jekyll static site builder, and utilizing Gulp to optimize various stages of the build workflow. To get started:

- Clone the code repository locally.
- From within the project folder, run `bundle install` to install dependent ruby gems.
- Then run `npm install` to install dependent node.js modules (for gulp)
- When that's all been completed, simply type `gulp` and a development copy should load on your system.
- Take note while working on the site that you are limited in what plugins will run, and that the project directory structure is set up for github pages.
- Once the changes look good on your local system, simply commit back to the `gh-pages` branch on github to take the site live.





*****

## Some misc development notes (to be removed)

The `_src` folder compiles into the `assets` folder which becomes a part of the finished site. If you make changes to theme assets, make sure it's done in `_src` first, then run `gulp build` to have the assets compiled properly.

`files` is specifically for page files (images) and downloads (pdfs).

## Workflow 
Workflow Requirements - things I'd like integrated in the build (to consider). Working with Gulp for compilation, so most of these are integrated via the appropriate gulp tasks.

Styles:
--
X* SASS / Compass 
X* Autoprefixer
X* CSS lint testing.
X* Sourcemaps (in dev)
* Minified (in production)
X* Susy - grid systems

Javascript:
--
X* JShint - linting and verifying things don't break
* minification / uglify
* browserify - wrap everything up (including dependencies)
* ?? only import files that don't have an underscore (includes methodology)

Images:
* Optimized
* small images inlined as base64
* grumpicon? takes a folder of svgs and outputs css, etc

Dev:
* BrowserSync (for testing)

Production:
<!-- * gulp-rev for some simple cache busting -->



*****

Some todos to consider (optimization, etc) --
- Remove JQuery in favour of static html.
- 