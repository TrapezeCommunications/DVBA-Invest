# A sample Gemfile
source "https://rubygems.org"

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']

gem "jekyll"
gem "sass"
gem "compass"
gem "scss-lint"
gem "susy"
gem "sass-globbing"