require 'html/proofer'
require 'yaml'

namespace :assets do
  task :precompile do
    sh "bundle exec jekyll build"
  end
end

task :test do
  sh "bundle exec jekyll build -c _config.yml,_config_test.yml --drafts"
  HTML::Proofer.new("./_site").run
end
