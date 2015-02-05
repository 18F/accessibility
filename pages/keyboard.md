---
layout: default
title: Keyboard Access
description: 'How we work with keyboards only'
permalink: /keyboard/
page_title: Keyboard Access
---

Keyboard access to a website is key to the usability of your site. All interactions and information that can be accessed with a mouse **must** be accessible with just a keyboard. This doesn't mean everyone who can't use a mouse will use a keyboard, but alternative AT inputs use keyboard like inputs to navigate the web. 

### Testing 

1. Identify all interactions on the page
2. Using the tab, enter, and space bar, navigate the page and ensure each input/interaction can be triggered
  * Ensure rollover interactions (help text, etc) can be triggered aswell
3. Ensure the tab order of the page makes sense
4. Ensure the focus is always visible when moving through the page
5. Ensure the tab is never trapped in a loop
6. If a modal dialog box is used, ensure focus is moved to the modal 
7. If an interaction reveals hidden content
  * Ensure the focus is moved to the revealed content
    * If this does not happen, check for a programatic description of the change
8. Check for title tags that provide information not on the screen
  * This is considered a failure of keyboard access

### Examples

<a href="#">Link to nowhere 1</a>

<a href="#">Link to nowhere 2</a>

<a href='javascript:$("#hiddenContent").show().focus();'>Reveal Hidden Content</a>

<div id="hiddenContent" style="display:none;" tabindex='-1'>This div was hidden, now its not!</div>

```html
<a href="#">Link to nowhere 1</a>
<a href="#">Link to nowhere 2</a>
<a href='javascript:$("#hiddenContent").show().focus();'>
	Reveal Hidden Content
</a>
<div id="hiddenContent" 
	 style="display:none;" 
	 tabindex='-1'>
	This div was hidden, now its not!
</div>
```

> Avoid using tabindex of >= 1 as this well disrupt the normal tab order of the page. tabindex of -1 is only appropriate when autofocusing an element not normally interactive.

#### Keyboard Trap

<a class="sr-only moveFocus" href="#">hidden</a>

<a class="keyboardTrap" href="#">Select to disable keyboard trap</a>

<a class="keyboardTrap" href="#">Select to disable keyboard trap</a>

<a class="keyboardTrap" href="#">Select to disable keyboard trap</a>

<a class="keyboardTrap" href="#">Select to disable keyboard trap</a>

<a class="sr-only moveFocus" href="#">hidden</a>

> This is an example of a keyboard trap. Focus moves in a loop making the rest of the page inaccessible. A quick test is to tab through the page quickly and ensure you can get focus back to the address bar.
