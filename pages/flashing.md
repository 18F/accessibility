---
layout: default
title: Flashing
description: 'How we deal with flashing'
permalink: /flashing/
page_title: Flashing
---
Flashing is generally a bad idea. It can cause all sorts of issues, from seizures to motion sickness. If you absolutely must have a flashing element there are a few things to consider. 

### Testing 

*Failure at any step constitues a 508 compliance issue*

1. Check if you can determine the frequency of "flashing"
  * Note: Scrolling text is considered flashing for our purposes.
2. Check that the rate of flashing is less than 3hz (3 times a second), or scroll delay is set to >= 400.

### Examples

#### Passes

<marquee scrolldelay = "400">Here is a marquee, I bet you haven't seen this in a while, anyway, the scroll delay is set to 400.</marquee>

```html
<marquee scrolldelay="400">
	Here is a marquee, I bet you haven't seen this in a while, anyway, the scroll delay is set to 400.
</marquee>
```

> This is an example of marquee. The scrolldelay is set and it is equal to 400 meaning it is compliant. 

#### Fails
<button type='button' id='blinkbutton'>Click to see non-compliant flashing</button>
<span class='blink' style='display:none;'>This text is blinking</span>

> ___Failure:___ This blinking text fails because the rate of flashing can't be determined and its greater than 3hz.