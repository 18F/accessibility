---
title: Color and contrast
description: 'How we work with color and contrast'
permalink: /color/
page_title: Color and contrast
layout: post
sidenav: docs
---
There are two main accessibility concerns for color, contrast and color dependence. Color contrast is the ratio of the foreground color(text) and the background color. Text should have a ratio of 4.5:1 or greater with the background.

Color dependence is the need to see color to understand the information. An example of this would be `The required fields are red.` Some users may not be able to distinguish red from other colors and would lack information to fill out this form.

Links that only rely on color also fail this requirement. Links must be distinguished by more than just color (hue). Links can be distinguished by underlines, symbols, context (in a menu for example), or lightness. If the contrast between the surrounding text and a link is greater than 3:1 it is acceptable. Also note, the link text itself still needs to have a contrast ratio of 4.5:1 or greater with the background. [More information about link color dependence.](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F73)

## Testing

### Color contrast

1. Using a [color contrast checker](https://www.tpgi.com/color-contrast-checker//), compare the color of the text with the color of the background.
2. In situations where the color is a gradient or cannot be determined programmatically, compare the lightest part of the text with the lightest part of the background using the color picker. Then compare the darkest part of the text with the darkest part of the background.
3. Check that the ratios are greater than [4.5:1][https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#contrast-minimum] (ex 5.3:1 would pass).

**Note:** Run this test for all states of the text (hover, visited, focused). This test should also be performed on images of text.

**Note:** Logos, disabled form fields, and disabled buttons are **exempt** from this test and don't need to be tested for contrast.

### Color dependence

1. Identify sections which use color to convey information.
2. Check to see if the information is conveyed in another way visually and programmatically.
3. If links are only distinguished by color surrounded by normal text
  1. Check if the link has a contrast ratio of 3:1 with the surrounding text

## Examples

### Failures

<span style = "color:#58AA02" class="exampleFailure">This text fails. </span>

> This text fails because it's too light. The contrast ratio is (2.93 : 1).

<span style = "color:#FFFFFF; background:#8D8E90" class="exampleFailure">This text fails.</span>

> This text fails because the background isn't dark enough. The contrast ratio is (3.28 : 1).

<span style="color:#AA0000;">Red text indicates a required field</span>

<label for="name">First Name&nbsp;</label><input type="text" id="name">

<label for="lname" style="color:#AA0000">Last Name&nbsp;</label><input type="text" id="lname">

> This is a failure because the only indication of which fields are required is the color of the text label.

<span><a href="#" style="color:#006061; text-decoration:none; border-bottom-style: none;">I'm a link.</a> I'm just normal text  </span>

> This fails because the contrast ratio between the link and surrounding text is less than 3:1.

### Passes

<span style = "color:#458503">This text passes. </span>

> This text passes. The contrast ratio is (4.56 : 1).

<span style = "color:#FFFFFF; background:#757679">This text passes.</span>

> This text passes. The contrast ratio is (4.54 : 1).

<span style="color:#AA0000;">* indicates a required field</span>

<label for="name-2">First Name&nbsp;</label><input type="text" id="name-2">

<label for="lname-2" style="color:#AA0000">* Last Name&nbsp;</label><input type="text" id="lname-2">

> This example passes because the * and the red text indicates the required field.

<span><a href="#" style="color:#006465; text-decoration:none; border-bottom-style: none;">I'm a link.</a> I'm just normal text  </span>

> This passes because the link and the black text have a contrast(lightness) ratio of 3:1, but we would recommend a greater contrast ratio for links without other visual indicators

<span><a href="#" style="color:#000000; text-decoration:none; border-bottom-style: none;">I'm a link.</a> I'm just normal text  </span>

> This passes because all users see the link as normal text.

[WCAG 2.0 AA]: https://www.w3.org/WAI/WCAG20/quickref/#visual-audio-contrast-contrast
