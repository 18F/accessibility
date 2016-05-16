---
title: Tools
description: 'Tools we use to improve and test accessibility'
permalink: /tools/
page_title: Accessibility-friendly Tools
---

### Color Tools
* [WebAIM color contrast checker](http://webaim.org/resources/contrastchecker/) compares two hex colors and tells you whether they meet WCAG AA and AAA contrast thresholds.
* [Snook's color contrast analyzer](http://snook.ca/technical/colour_contrast/colour.html) lets you adjust RGB and HSV values and reports contrast compliance interactively.
* [NC State palette accessibility evaluator](http://accessibility.oit.ncsu.edu/tools/color-contrast/) lets you compare contrast between 3 or more colors for WCAG AA or AAA compliance.
* [Color Safe](http://colorsafe.co/) is a guide for choosing colors that meet WCAG contrast thresholds.
* [Color Contrast Analyzer](http://www.paciellogroup.com/resources/contrastanalyser/) is a desktop application for contrast checking that also simulates different forms of color impairment.

#### Color Impairment
* [Color Oracle](http://colororacle.org/) is another desktop application for simulating color impairment on your entire screen.
* [Daltonize](http://daltonize.appspot.com/) is a collection of bookmarklets that simulate the three most common forms of color impairment (protanopia, deuteranopia, and tritanopia) on any web page.
* [colourblind](https://github.com/Altreus/colourblind) is another simulation tool similar to Daltonize, but with more options (protanopia, protanomaly, deuteranopia, deuteranomaly, tritanopia, tritanomaly, achromatopsia, and achromatomaly) in a single bookmarklet.
* [postcss-colorblind](https://github.com/btholt/postcss-colorblind) is a CSS build tool that modifies colors in your CSS to simulate [four common impairment groups](https://github.com/skratchdot/color-blind#color-blindness-table).

### Accessibility Review Tools
These tools can be used to test sites for Section 508 and WCAG compliance in browser:

* [achecker](http://achecker.ca/) is an accessibility reporter for HTML only.
* [Google's Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) is a Chrome plugin for running basic accessibility tests from the comfort of your browser.
* [Web Accessibility Toolbar (WAT)](https://www.paciellogroup.com/resources/wat/) is an IE tool that has been developed to aid manual examination of web pages for a variety of aspects of accessibility. It is used by DHS's Trusted Tester program.
* [WAVE](http://wave.webaim.org/) is a comprehensive accessibility auditor with slick document introspection features.
* The [W3C](http://www.w3.org/) maintains a comprehensive [list of web accessibility evaluation tools](http://www.w3.org/WAI/ER/tools/).

### Autocomplete Widgets
These JavaScript widgets produce HTML with [ARIA autocomplete] attributes:

* [Awesomplete](http://leaverou.github.io/awesomplete/) is dependency-free
* [jQuery UI autocomplete](http://jqueryui.com/autocomplete/) requires jQuery
* [Select2](https://select2.github.io/) also requires jQuery

### Automated Testing
These tools can be used in automated tests and with continuous integration
tools to help you ensure that your sites remain accessible throughout the
development process:

* [a11y](https://github.com/addyosmani/a11y) is a Node-based accessibility auditing with both command-line and JavaScript APIs.
* [pa11y](http://pa11y.org/) and is like a11y, but consists of a larger suite of tools, including command-line and JavaScript APIs, a [web service](https://github.com/nature/pa11y-webservice) and a [dashboard](https://github.com/nature/pa11y-dashboard) for monitoring accessibility reports across multiple sites.
* [ra11y](https://github.com/benbalter/ra11y) is a Ruby-based accessibility testing tool tuned for use with [Jekyll](http://jekyllrb.com/) and static sites.
* [webalin](http://webalin.readthedocs.org/en/latest/) is a Python-based 508 compliance linter for HTML.

There are many other [npm](https://www.npmjs.com/) packages tagged [wcag](https://www.npmjs.com/search?q=wcag) and [a11y](https://www.npmjs.com/search?q=a11y).

[ARIA autocomplete]: http://www.w3.org/TR/wai-aria/states_and_properties#aria-autocomplete
