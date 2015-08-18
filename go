#! /usr/bin/env ruby
#
# 18F Guides Jekyll template
#
# Written in 2015 by Mike Bland (michael.bland@gsa.gov)
# on behalf of the 18F team, part of the US General Services Administration:
# https://18f.gsa.gov/
#
# To the extent possible under law, the author(s) have dedicated all copyright
# and related and neighboring rights to this software to the public domain
# worldwide. This software is distributed without any warranty.
#
# You should have received a copy of the CC0 Public Domain Dedication along
# with this software. If not, see
# <https://creativecommons.org/publicdomain/zero/1.0/>.
#
# @author Mike Bland (michael.bland@gsa.gov)
#
# ----
#
# ./go script: unified development environment interface
#
# Inspired by:
# http://www.thoughtworks.com/insights/blog/praise-go-script-part-i
# http://www.thoughtworks.com/insights/blog/praise-go-script-part-ii
#
# Author: Mike Bland (michael.bland@gsa.gov)
# Date:   2015-04-15

MIN_VERSION = "2.1.5"

unless RUBY_VERSION >= MIN_VERSION
  puts <<EOF

*** ABORTING: Unsupported Ruby version ***

Ruby version #{MIN_VERSION} or greater is required to work with the Hub, but
this Ruby is version #{RUBY_VERSION}. Consider using a version manager such as
rbenv (https://github.com/sstephenson/rbenv) or rvm (https://rvm.io/)
to install a Ruby version specifically for Hub development.

EOF
  exit 1
end

require_relative '_go/go'
require_relative '_go/navigation'
require_relative '_go/repository'

BASEDIR = File.dirname(__FILE__)

def init
  begin
    require 'bundler'
  rescue LoadError
    puts "Installing Bundler gem..."
    GoScript.exec_cmd 'gem install bundler'
    puts "Bundler installed; installing gems"
  end
  GoScript.exec_cmd 'bundle install'
end

def update_gems
  GoScript.exec_cmd 'bundle update'
  GoScript.exec_cmd 'git add Gemfile.lock'
end

JEKYLL_BUILD_CMD = "exec jekyll build --trace"
JEKYLL_SERVE_CMD = "exec jekyll serve --trace"

def serve
  exec "bundle #{JEKYLL_SERVE_CMD}"
end

def build
  GoScript.exec_cmd "bundle #{JEKYLL_BUILD_CMD}"
end

def update_nav
  GuidesTemplate.update_navigation_configuration BASEDIR
end

def create_repo
  GuidesTemplate.remove_template_files BASEDIR
  GuidesTemplate.create_new_git_repository BASEDIR
end

def update_theme
  GoScript.exec_cmd 'bundle update guides_style_18f'
end

GoScript::CommandGroup.add_group(
  'Development commands',
  {
    :init => 'Set up the dev environment',
    :create_repo => 'Remove template files and create a new Git repository',
    :update_nav => 'Update the \'navigation:\' data in _config.yml',
    :update_theme => 'Update the guides_style_18f gem',
    :update_gems => 'Execute Bundler to update gem set',
    :serve => 'Serve the site at localhost:4000',
    :build => 'Build the site',
  })

GoScript::CommandGroup.usage(exitstatus: 1) unless ARGV.size == 1
command = ARGV.shift
GoScript::CommandGroup.usage if ['-h', '--help'].include? command

command = command.to_sym
GoScript::CommandGroup.check_command_exists command
send command
