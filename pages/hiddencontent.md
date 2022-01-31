---
title: Hidden content
description: 'How and when to hide content'
permalink: /hidden-content/
page_title: Hidden Content
layout: post
sidenav: docs
---

Hiding content is very useful for accessibility. We can hide things visually and only display it to screen reader users, we can hide content from screen reader users and only show it visually, or we can hide content from both. 

## Techniques
{% capture css_display_none %}
  ```css
    {
      display:none;
    }
  ```
{% endcapture %}

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
<table>
<thead>
  <tr>
    <th style="width:40%;" scope='col'>
      Technique
    </th>
    <th scope='col'>
      Visually hidden
    </th>
    <th scope='col'>
      Screen reader hidden
    </th>
    <th scope='col'>
      Additional info
    </th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope='row'>
      CSS:<br> {{ css_sr_only | markdownify }}
    </th>
    <td>Yes</td>
    <td>No</td>
    <td>There are multiple ways to accomplish this with CSS. This is the current way we are recommending it.</td>
  </tr>
  <tr>
    <th scope='row'>
      CSS:<br>
      {{ css_display_none | markdownify }}
    </th>
    <td>Yes</td>
    <td>Yes</td>
    <td></td>
  </tr>
  <tr>
    <th scope='row'>
      HTML5 attribute:<br>
      <strong>hidden</strong>
    </th>
    <td>Yes</td>
    <td>Yes</td>
    <td>In supported browsers, this is the same as {{ css_display_none | markdownify }}</td>
  </tr>
  <tr>
    <th scope='row'>
      aria attribute:<br>
      <strong>aria-hidden='false'</strong>
    </th>
    <td>No</td>
    <td>No</td>
    <td>This is overwritten by other techniques. i.e. Using {{ css_display_none | markdownify }} will cause the element not to be read or seen.</td>
  </tr>
  <tr>
    <th scope='row'>
      aria attribute:<br>
      <strong>aria-hidden='true'</strong>
    </th>
    <td>No</td>
    <td>Yes</td>
    <td></td>
  </tr>
</tbody>
</table>
 
## Aria hidden

aria-hidden should be used in combination with these techniques. If we want to hide something from just the screen reader, you can mark it as `aria-hidden='true'`. 

Items with `aria-hidden='true'` are always ignored by the screen reader.
This is useful for:

- Collapsing Menus
- Repetitive information
- Off screen content

If an element has multiple states, its visibility should be tracked with `aria-hidden` `true/false`. An element with `aria-hidden='false'` is treated by the screen reader as if it didn't have the `aria-hidden` attribute and is read or not read based on other factors, such as CSS. 

## CSS

CSS can be used to hide content and allow it to still be used with the screen reader. For an example of that, see this code here, 

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

Using this we can:

- Provide additional details about a form element
  - Hidden labels
  - Error details
- Provide context to page elements
- Add additional instructions for navigation

We can also use CSS to hide content visually and from screen readers. 

```css
{
  display: none;
}
```

This will hide completely and is the same as `<div aria-hidden='true' hidden>content</div>` Note that `aria-hidden='true'` should be used for additional compatibility. 

`display: none;` and `hidden` can be used for:

- Collapsing menus
- Repetitive information
- Off-screen content

## Additional resources

For more information on this topic, see these articles. 

- [HTML5 Accessibility Chops: hidden and aria-hidden](https://www.tpgi.com/html5-accessibility-chops-hidden-and-aria-hidden/)
- [The state of hidden content support in 2016](https://www.tpgi.com/the-state-of-hidden-content-support-in-2016/)
