# Author: Mike Bland <michael.bland@gsa.gov>

require_relative 'go'
require 'fileutils'

module GuidesTemplate
  TEMPLATE_FILES=%w(
    pages/child-page.md
    pages/config.md
    pages/github.md
    pages/images.md
    pages/new-page.md
    pages/posting.md
    images/18f-pages.png
    images/description.png
    images/gh-add-guide.png
    images/gh-branches-link.png
    images/gh-default-branch.png
    images/gh-settings-button.png
    images/gh-webhook.png
    images/images.png
    )

  def self.remove_template_files(basedir)
    puts 'Clearing Guides Template files'
    files = GuidesTemplate::TEMPLATE_FILES.map { |f| File.join basedir, f }
    File.delete *files
  end

  def self.create_new_git_repository(basedir)
    puts 'Removing old git repository'
    FileUtils.rm_rf File.join(BASEDIR, '.git')
    puts 'Creating a new git repository'
    GoScript.exec_cmd "git init '#{BASEDIR}'"
    puts 'Adding files for initial commit'
    GoScript.exec_cmd "git add '#{BASEDIR}'"
    puts "All done! Run \'git commit\' to create your first commit."
  end
end
