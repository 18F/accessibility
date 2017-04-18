# Accessibility
This repo will contain the guidelines and best practices for 508 accessibility for the City and County of San Francisco. 
The site is in draft.

## This site is built using the 18F Guides Template

See the [guides template repo](https://github.com/18f/guides-template) for more information.

## Generating the accessibility site/hosting locally

### Cloning and running 18F/accessibility

You will need [Ruby](https://www.ruby-lang.org) ( > version 2.1.5 ). You may
consider using a Ruby version manager such as
[rbenv](https://github.com/sstephenson/rbenv) or [rvm](https://rvm.io/) to
help ensure that Ruby version upgrades don’t mean all your
[gems](https://rubygems.org/) will need to be rebuilt.

On OS X, you can use [Homebrew](http://brew.sh/) to install Ruby in
`/usr/local/bin`, which may require you to update your `$PATH` environment
variable:

```shell
$ brew update
$ brew install ruby
```

To serve 18F Accessibility Guide locally, using `accessibility` as the name of your new repository:

```shell
$ git clone https://github.com/18F/accessibility.git accessibility
$ cd accessibility
$ ./go serve
```

This will check that your Ruby version is supported, install the [Bundler
gem](http://bundler.io/) if it is not yet installed, install all the gems
needed by the template, and launch a running instance on
`http://localhost:4000/`. (Make sure to include the trailing slash! The built-in
Jekyll webserver doesn’t redirect to it.) You can see how your local copy of accessibility renders
at any time by going to that URL. To stop serving locally, simply type `Ctrl+C`
into the terminal again.

After going through these steps, run `./go` to see a list of available
commands. The `serve` command is the most common for routine development.

### Forking into your own repository

If you haven’t already followed the cloning instructions above, the easiest way to do this is simply to go to https://github.com/18F/accessibility and click `Fork`, then set up the repository under your own username. Then follow the instructions above to clone locally, subbing in MY-USER-NAME for 18F’s in the URL that follows `git clone`.

If you _have_ already cloned locally from 18F and want to maintain your own accessibility repository, do the following.

You’ll need to create a new repository on Github. To do this, go to github.com/MY-USER-NAME and click the "New Repository" button. Enter the title and description for your new guide and then click `Create Repository`. It’s easiest if you use `accessibility` as the name, as it will match back to the 18F accessibility you’re building from.

After the repository is created, you’ll see the repository URL at the top. Copy this url by hitting the handy `Copy to Clipboard` button next to the text box.

Go back to the directory where you cloned the repository. We’re going to change this repo to point to the one you just created (which is empty), instead of back to 18F’s, and push to it.
```
git remote set-url origin https://github.com/MY-USER-NAME/accessibility.git
git push origin 18f-pages-staging
```

Now you can edit your own fork of accessibility freely, and push up changes as you need.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.
