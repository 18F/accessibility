---
layout: default
title: Color and contrast
description: 'How we work with color and contrast'
permalink: /color/
page_title: Color and contrast
---
There are two aspects we need to address when it comes to color: contrast and color dependence. Color contrast is the ratio of the foreground color (text) and the background color. Color dependence is the need to see color to understand the information.  

### Testing 

#### Color Contrast

1. Using a [color contrast checker](http://www.paciellogroup.com/resources/contrastanalyser/), select the darkest or lightest section of the text.
2. Select the darkest or lightest section of the background.
3. Check the ratio and ensure its greater than 4.5:1 (ex 5.3:1 would pass).

Note: Run this test for all states of the text (hover, visted, focused). This test should also be performed on images of text unless the image is a logo, which are exempt. 

#### Color Dependence

1. Identify sections which use color to convey information.
2. Check to see if the information is conveyed in another way visually and programatically.

### Examples

#### Failures

<span style = "color:#58AA02">This text fails. </span>

> This text fails because it's too light. The contrast ratio is (2.93 : 1). 

<span style = "color:#FFFFFF; background:#8D8E90">This text fails.</span>

> This text fails because the background isn't dark enough. The contrast ratio is (3.28 : 1).

<span style="color:red;">Red text indicates a required field</span>

<label for="name">First Name&nbsp;</label><input type"text" id="name">

<label for="lname" style="color:red">Last Name&nbsp;</label><input type"text" id="lname">

> This is a failure because the only indication of which fields are required is the color of the text label.

#### Passes

<span style = "color:#458503">This text passes. </span>

> This text passes. The contrast ratio is (4.56 : 1). 

<span style = "color:#FFFFFF; background:#757679">This text passes.</span>

> This text passes. The contrast ratio is (4.54 : 1).

<span style="color:red;">* indicates a required field</span>

<label for="name">First Name&nbsp;</label><input type"text" id="name">

<label for="lname" style="color:red">* Last Name&nbsp;</label><input type"text" id="lname">

> This example passes because the * and the red text indicates the required field.

