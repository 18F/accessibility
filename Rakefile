require 'html/proofer'
require 'yaml'

namespace :assets do
  task :precompile do
    sh "bundle exec jekyll build"
  end
end

task :test do
  sh "bundle exec jekyll build -c _config.yml,_config_test.yml --drafts"
  config = YAML.load_file('_config_test.yml')["proofer"]
  config = config.inject({}){|memo,(k,v)| memo[k.to_sym] = v; memo}
  HTML::Proofer.new("./_site", config).run
end