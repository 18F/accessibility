# Author: Mike Bland <michael.bland@gsa.gov>

require 'safe_yaml'

module GuidesTemplate
  # Automatically updates the `navigation:` field in _config.yml.
  #
  # Does this by parsing the front matter from files in `pages/`. Preserves the
  # existing order of items in `navigation:`, but new items may need to be
  # reordered manually.
  def self.update_navigation_configuration(basedir)
    config_path = File.join basedir, '_config.yml'
    config_data = SafeYAML.load_file config_path, safe: true
    nav_data = config_data['navigation']
    update_navigation_data nav_data, pages_front_matter_by_title
    write_navigation_data_to_config_file config_path, nav_data
  end

  def self.pages_front_matter_by_title
    Dir[File.join BASEDIR, 'pages', '**', '*.md'].map do |f|
      front_matter = SafeYAML.load_file f, safe: true
      [front_matter['title'], front_matter]
    end.to_h
  end

  def self.update_navigation_data(nav_data, pages_front_matter_by_title)
    nav_data_by_title = nav_data.map { |nav| [nav['text'].downcase, nav] }.to_h

    pages_front_matter_by_title.each do |title, front_matter|
      page_nav = {
        'text' => title,
        'url' => "#{front_matter['permalink'].split('/').last}/",
        'internal' => true,
      }
      title = title.downcase
      parent = (front_matter['parent'] || '').downcase

      if nav_data_by_title.member? title
        nav_data_by_title[title].merge! page_nav

      elsif parent
        unless nav_data_by_title.member?(parent)
          raise StandardError.new("Parent page not present in existing " +
            "config: #{front_matter['parent']}\n" +
            "Needed by: #{front_matter['text']}")
        end

        children = nav_data_by_title[parent]['children']
        children_by_title = children.map { |i| [i['text'].downcase, i] }.to_h

        if children_by_title.member? title
          children_by_title[title].merge! page_nav
        else
          children << page_nav
        end

      else
        nav_data << page_nav
      end
    end
  end

  def self.write_navigation_data_to_config_file(config_path, nav_data)
    lines = []
    in_navigation = false
    open(config_path).each_line do |line|
      if !in_navigation && line.start_with?('navigation:')
        lines << line
        lines << nav_data.to_yaml["---\n".size..-1]
        in_navigation = true
      elsif in_navigation
        if !(line.start_with?(' ') || line.start_with?('-'))
          in_navigation = false
          lines << line
        end
      else
        lines << line
      end
    end
    File.write config_path, lines.join
  end
end
