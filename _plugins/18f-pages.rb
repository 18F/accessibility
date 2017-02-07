PAGES_BRANCHES = ['18f-pages']

if PAGES_BRANCHES.include? ENV['BRANCH']
    Jekyll::Hooks.register :site, :pre_render do |site|
        site.config['baseurl'] = '/accessibility'
    end
end
