---
title: Flashing
description: 'How we deal with flashing'
permalink: /flashing/
page_title: Flashing
scripts:
- assets/js/flashing.js
---
Flashing is generally a bad idea. It can cause all sorts of issues, from seizures to motion sickness. If you absolutely must have a flashing element there are a few things to consider.

### Testing

* Failure at any step constitutes a 508 compliance issue

1. Check if you can determine the frequency of "flashing."
  * Note: Scrolling text is considered flashing for our purposes.
2. Check that the rate of flashing is less than 3hz (3 times a second), or scroll delay is set to >= 400.

### Examples

#### Fails
<button type='button' id='blinkbutton'>Click to see non-compliant flashing</button>
<span class='blink' style='display:none;'>This text is blinking</span>

> ___Failure:___ This blinking text fails because the rate of flashing can't be determined and its greater than 3hz.
