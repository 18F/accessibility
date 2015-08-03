# Author: Mike Bland <michael.bland@gsa.gov>

module GoScript
  def self.exec_cmd(cmd)
    exit $?.exitstatus unless system(cmd)
  end

  # Groups a set of commands by common function.
  class CommandGroup
    attr_accessor :description, :commands
    private_class_method :new
    @@groups = Array.new

    # @param description [String] short description of the group
    # @param commands [Hash<Symbol,String>] mapping from command function name
    #   to a brief description; each key must be the name of a function in this
    #   script
    def initialize(description, commands)
      @description = description
      @commands = commands
    end

    def to_s
      padding = @commands.keys.max_by {|i| i.size}.size + 2
      ["\n#{@description}"].concat(
        @commands.map {|name, desc| "  %-#{padding}s#{desc}" % name}).join("\n")
    end

    def self.add_group(description, commands)
      @@groups << new(description, commands)
    end

    def self.groups
      @@groups
    end

    def self.check_command_exists(command_symbol)
      all_commands = @@groups.map {|i| i.commands.keys}.flatten
      unless all_commands.member? command_symbol
        puts "Unknown option or command: #{command_symbol}"
        usage(exitstatus: 1)
      end
    end

    def self.usage(exitstatus: 0)
      puts <<EOF
Usage: #{$0} [options] [command]

options:
  -h,--help  Show this help
EOF
      GoScript::CommandGroup.groups.each {|s| puts s}
      exit exitstatus
    end
  end
end
