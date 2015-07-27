---
layout: default
title: Keyboard Access
description: 'How we work with keyboards only'
permalink: /keyboard/
page_title: Keyboard Access
---

Keyboard access to a website is key to the usability of your site. All interactions and information that can be accessed with a mouse **must** be accessible with just a keyboard. This doesn't mean everyone who can't use a mouse will use a keyboard, but alternative AT inputs use keyboard-like inputs to navigate the web. 

### Testing 

1. Identify all interactions on the page.
2. Using the tab, enter, and space bar, navigate the page and ensure each input/interaction can be triggered.
  * Ensure rollover / hover interactions (help text, etc) can be triggered as well.
  * __If the user cannot interact with something, or get the information another way, this is a failure__.
3. Make sure the tab order of the page is logical and follows the visual order of elements on the page.
  * __If the tab order is confusing, this is a failure__.
4. Check that the focus is always visible when moving through the page with the tab key.
  * __If you lose focus, on a hidden link or other object when simply tabbing through the page, this is a failure__.
5. Make sure you can tab through the page and get back the address bar.
  * __If you ever need your mouse to get back to an element, this is a failure__.
6. Keyboard users must be able to easily use and dismiss modal dialog boxes, lightboxes, or other pop-ups.
  * Modal dialog boxes need to trap the keyboard. When a modal dialog box is triggered, the keyboard focus needs to immediately move to the first actionable element in the modal.
  * The keyboard cannot use the modal dialog box until it is dismissed. When a user moves the keyboard focus past the last element in the modal dialog box, it needs to loop to the beginning of the dialog box.
  * The keyboard user needs to be able to access all controls in the dialog box, especially the controls to dismiss the dialog.
  * __If the keyboard user cannot do all of these things, this is a failure__.
  * Ideally, the keyboard user should also be able to dismiss the modal dialog box with the Escape key.
7. If an interaction reveals hidden content.
  * Ensure the focus is moved to the revealed content.
    * If this does not happen, check for a programatic description of the change.
8. Check for title tags providing information not on the screen.
  * __Title attributes which can only be exposed by hovering the mouse over the element are a failure of keyboard access__.
9. Check that the focus never goes to elements that won't be available to somebody using a mouse.
  * __If the keyboard focus goes to an offscreen element that has been temporarily hidden (items in a non-expanded drop-down menu, offscreen modals which haven't been triggered, etc.), this is a failure__.

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
