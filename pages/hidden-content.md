---
title: Hidden Content
description: 'How and when to hide content'
permalink: /hidden-content/
page_title: Hidden Content
---

{% capture css_sr_only %}
  ```css
  .sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  ```
{% endcapture %}
{% assign css_sr_only = css_sr_only | markdownify %}

Hiding content is very useful for accessibility. We can hide things visually
and only display it to screen reader users, we can hide content from screen
reader users and only show it visually, or we can hide content from both.

### Techniques

| Technique | Visually Hidden | Screen reader hidden | Additional info
| :--- | :--- | :--- | :---
| <nobr>[`.sr-only` class](#sr-only)</nobr> | Yes | No | There are multiple ways to accomplish this with CSS. This is the current way we are reccomending it.
| <nobr>CSS `display: none`</nobr> | Yes | Yes |
| <nobr>`hidden` attribute</nobr> | Yes | Yes | In [supported browsers][hidden support], this has the same effect as CSS `display: none`
| <nobr>`aria-hidden="false"`</nobr> | No | No | This is overridden by other techniques. For instance, using CSS `display: none` will cause the element not to be read or seen.
| <nobr>`aria-hidden="true"`</nobr> | No | Yes |

### ARIA hidden

The `aria-hidden` HTML attribute should be used in combination with these
techniques. To hide something from _just_ the screen reader, you can mark it as
`aria-hidden="true"`.

Items with `aria-hidden="true"` are **always** ignored by the screen reader.
This is useful for:

- Collapsing menus
- Repetitive information
- Off-screen content

If an element has multiple states, its visibility should be tracked with
the `aria-hidden` HTML attribute. An element with `aria-hidden="false"` is treated
by the screen reader as if it didn't have the `aria-hidden` attribute and is
read or not read based on other factors, such as CSS.

### CSS

CSS can be used to hide content and allow it to still be used with the screen
reader.

#### <a name="css-offscreen"></a> Off-screen positioning

{{ css_sr_only }}

We can use this to:

- Provide additional details about a form element
- Hide labels
- Provide error details
- Provide context to page elements
- Add aditional instructions for navigation

We can also use CSS `display: none` to visually hide and screen reader content.
This will hide the content completely, and is the equivalent of `<div
aria-hidden="true" hidden>content</div>`. Note that `aria-hidden="true"` should
be used for additional compatibility.

CSS `display: none` and the `hidden` attribute can be used for:

- Collapsing menus
- Repetitive information
- Off-screen content

### Additional Resources

For more information on this topic, see these articles:

- [HTML5 Accessibility Chops: hidden and aria-hidden](https://www.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)
- [The state of hidden content support in 2016](https://www.paciellogroup.com/blog/2016/01/the-state-of-hidden-content-support-in-2016/)
