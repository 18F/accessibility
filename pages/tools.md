---
layout: default
title: Tools
description: 'Tools we use to improve and test accessibility'
permalink: /tools/
page_title: Accessibility-friendly Tools
---

### Tools

#### Autocomplete Widgets
These JavaScript widgets produce HTML with [ARIA autocomplete] attributes:

* [Awesomplete](http://leaverou.github.io/awesomplete/) is dependency-free
* [jQuery UI autocomplete](http://jqueryui.com/autocomplete/) requires jQuery
* [Select2](https://select2.github.io/) also requires jQuery

### Testing Tools
These tools can be used to test sites for Section 508 and WCAG compliance:

* [achecker](http://achecker.ca/) is an accessibility reporter for HTML only.
* [Google's Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) is a Chrome plugin for running basic accessibility tests from the comfort of your browser.
* [WAVE](http://wave.webaim.org/) is a comprehensive accessibility auditor with slick document introspection features.
* The [W3C](http://www.w3.org/) maintains a comprehensive [list of web accessibility evaluation tools](http://www.w3.org/WAI/ER/tools/).

#### Automated Testing
These tools can be used in automated tests and with continuous integration
tools to help you ensure that your sites remain accessible throughout the
development process:

* [a11y](https://github.com/addyosmani/a11y) is a Node-based accessibility auditing with both command-line and JavaScript APIs.
* [pa11y](http://pa11y.org/) and is like a11y, but consists of a larger suite of tools, including command-line and JavaScript APIs, a [web service](https://github.com/nature/pa11y-webservice) and a [dashboard](https://github.com/nature/pa11y-dashboard) for monitoring accessibility reports across multiple sites.
* [ra11y](https://github.com/benbalter/ra11y) is a Ruby-based accessibility testing tool tuned for use with [Jekyll](http://jekyllrb.com/) and static sites.
* [webalin](http://webalin.readthedocs.org/en/latest/) is a Python-based 508 compliance linter for HTML.

There are many other [npm](https://www.npmjs.com/) packages tagged [wcag](https://www.npmjs.com/search?q=wcag) and [a11y](https://www.npmjs.com/search?q=a11y).

[ARIA autocomplete]: http://www.w3.org/TR/wai-aria/states_and_properties#aria-autocomplete
