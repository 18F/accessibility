require 'html/proofer'
require 'yaml'

namespace :assets do
  task :precompile do
    sh "bundle exec jekyll build"
  end
end

task :test do
  sh "bundle exec jekyll build -c _config.yml,_config_test.yml --drafts"
  sh "pa11y http://127.0.0.1:4000/accessibility/"
  HTML::Proofer.new("./_site").run
end
