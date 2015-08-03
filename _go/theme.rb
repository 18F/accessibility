# Author: Mike Bland <michael.bland@gsa.gov>

require_relative 'go'
require 'fileutils'
require 'tmpdir'

module GuidesTemplate
  SOURCE_REPO = '18F/guides-template'
  SOURCE_REPO_ADDRESS = "git@github.com:#{SOURCE_REPO}.git"
  THEME_COMPONENTS = %w(go _go _includes _layouts assets)

  def self.update_theme_from_guides_template(basedir)
    puts 'update_theme: Cloning 18F/guides-template into a temporary directory'
    clone_guides_template_repo do |source_repo|
      puts 'update_theme: Copying files over from 18F/guides-template'
      GoScript.exec_cmd('rsync -av --exclude .DS_Store ' +
        "#{THEME_COMPONENTS.map { |i| File.join source_repo, i }.join(' ')} " +
        "#{basedir}")
    end

    puts 'update_theme: Committing updated files'
    GoScript.exec_cmd "git add '#{basedir}'"

    system "git commit -m 'Import theme updates from #{SOURCE_REPO}'"
    puts 'update_theme: No updates found' if $?.exitstatus != 0
    puts 'update_theme: Style update complete'
  end

  def self.clone_guides_template_repo(&block)
    begin
      tmpdir = Dir.mktmpdir
      repo_dir = File.join tmpdir, 'guides-template'
      GoScript.exec_cmd "git clone #{SOURCE_REPO_ADDRESS} #{repo_dir}"
      yield repo_dir
    ensure
      FileUtils.rm_rf tmpdir
    end
  end
end
