---
title: Tools
description: 'Tools we use to improve and test accessibility'
permalink: /tools/
page_title: Accessibility-friendly Tools
layout: post
sidenav: docs
---

## Color tools
* [WebAIM color contrast checker](https://webaim.org/resources/contrastchecker/) compares two hex colors and tells you whether they meet WCAG AA and AAA contrast thresholds.
* [Snook's color contrast analyzer](https://snook.ca/technical/colour_contrast/colour.html) lets you adjust RGB and HSV values and reports contrast compliance interactively.
* [Color Safe](http://colorsafe.co/) is a guide for choosing colors that meet WCAG contrast thresholds.
* [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/) is a desktop application for contrast checking that also simulates different forms of color impairment.

### Color impairment
* [Color Oracle](https://colororacle.org/) is a desktop application for simulating color impairment on your entire screen.
* [colourblind](https://github.com/Altreus/colourblind) is another simulation tool similar to Daltonize, but with more options (protanopia, protanomaly, deuteranopia, deuteranomaly, tritanopia, tritanomaly, achromatopsia, and achromatomaly) in a single bookmarklet.
* [postcss-colorblind](https://github.com/btholt/postcss-colorblind) is a CSS build tool that modifies colors in your CSS to simulate [four common impairment groups](https://github.com/skratchdot/color-blind#color-blindness-table).

## Accessibility review tools
These tools can be used to test sites for Section 508 and WCAG compliance in browser:

* [Accessibility Insights](https://accessibilityinsights.io/) - Browser plugin (Chrome, Edge), Android and Windows applications for automated and guided manual testing for accessibility including WCAG 2.0 and 2.1. 
* Accessibility Management Platform (AMP): [GSA-specific info](https://insite.gsa.gov/employee-resources/information-technology/508-accessibility/accessibility-management-platform-amp) and [general product info](https://www.levelaccess.com/solutions/software/amp/)
* [Google's Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) is a Chrome plugin for running basic accessibility tests from the comfort of your browser.
* [Web Accessibility Toolbar (WAT)](https://www.dhs.gov/publication/web-accessibility-toolbar) is an IE tool that has been developed to aid manual examination of web pages for a variety of aspects of accessibility. It is used by [DHS's Trusted Tester program](https://www.dhs.gov/trusted-tester).
* [WAVE](https://wave.webaim.org/) is an accessibility auditor and browser extension with document inspection features.
* The [W3C](https://www.w3.org/) maintains a comprehensive [list of web accessibility evaluation tools](https://www.w3.org/WAI/ER/tools/).

## Autocomplete widgets
These JavaScript widgets produce HTML with [ARIA autocomplete](https://www.w3.org/TR/wai-aria/#aria-autocomplete) attributes:

* [Awesomplete](https://projects.verou.me/awesomplete/) is dependency-free
* [jQuery UI autocomplete](http://jqueryui.com/autocomplete/) requires jQuery
* [Select2](https://select2.org/) also requires jQuery

## Automated testing

Automated testing tools can help you find some of the more common accessibility mistakes quickly, however no automated tool can detect all accessibility issues. [A recent experiment by the UK's Government Digital Service](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/) found that the best automated tools only caught about 40 percent of the errors on a test site; some of the most popular tools caught less than 20 percent. Whatever automated tool you use, be sure to also do manual testing. 

These tools can be used in automated tests and with continuous integration
tools to help you ensure that your sites remain accessible throughout the
development process:

* [Accessibility Insights](https://accessibilityinsights.io/) - Browser plugin (Chrome, Edge), Android and Windows applications for automated and guided manual testing for accessibility including WCAG 2.0 and 2.1. 
* [axe](https://www.deque.com/axe/) - Suite of automated accessibility testing tools built around the open source [axe-core testing engine/ruleset](https://github.com/dequelabs/axe-core), by Deque.
* [pa11y](http://pa11y.org/) consists of a suite of tools including command-line and JavaScript APIs, a [web service](https://github.com/nature/pa11y-webservice), and a [dashboard](https://github.com/nature/pa11y-dashboard) for monitoring accessibility reports across multiple sites. [Pa11y with axe-core is recommended in the 18F Engineering Practices Guide](https://engineering.18f.gov/accessibility-scanning/) for automated accessibility scans.

There are many other [npm](https://www.npmjs.com/) packages tagged [wcag](https://www.npmjs.com/search?q=wcag) and [a11y](https://www.npmjs.com/search?q=a11y).