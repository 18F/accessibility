---
title: Hidden Content
description: 'How and when to hide content'
permalink: /hiddencontent/
page_title: Hidden Content
---

Hiding content is very useful for accessibility. We can hide things visually and only display it to screen reader users, we can hide content from screen reader users and only show it visually, or we can hide content from both. 

### Techniques
<table>
<thead>
  <tr>
    <th scop='col'>
      Technique
    </th>
    <th scop='col'>
      Visually Hidden
    </th>
    <th scop='col'>
      Screen reader hidden
    </th>
    <th scope='col'>
      Additional Info
    </th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope='row'>
      CSS:<br> <strong>{border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px;}</strong>
    </th>
    <td>Yes</td>
    <td>No</td>
    <td>There are multiple ways to accomplish this with CSS. This is the current way we are reccomending it.</td>
  </tr>
  <tr>
    <th scope='row'>
      CSS:<br>
      <strong>{display:none;}</strong>
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
    <td>In supported browsers, this is the same as <strong>display:none;</strong></td>
  </tr>
  <tr>
    <th scope='row'>
      aria attribute:<br>
      <strong>aria-hidden='false'</strong>
    </th>
    <td>No</td>
    <td>No</td>
    <td>This is overwritten by other techniques. i.e. Using <strong>display:none;</strong> will cause the element not to be read or seen.</td>
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
 
### Aria Hidden

aria-hidden should be used in combination with these techniques. If we want to hide something from just the screen reader, you can mark it as `aria-hidden='true'`. 

Items with `aria-hidden='true'` are always ignored by the screen reader.
This is useful for: 
- Collapsing Menus
- Repetitive information
- Off screen content

If an element has multiple states, it's visibility should be tracked with `aria-hidden` `true/false`. An element with `aria-hidden='false'` is treated by the screen reader as if it didn't have the `aria-hidden` attribute and is read or not read based on other factors, such as CSS. 

### CSS

CSS can be used to hide content and allow it to still be used with the screen reader. For an example of that, see this code here, 

```css
.visuallyhidden {
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
 - Hidden Labels
 - Error Details
- Provide Context to page elements
- Add aditional instructions for navigation

We can also use CSS to visually hide and Screen reader hide content. 

```css
{
  display: none;
}
```

This will hide completly and is the same as `<div aria-hidden='true' hidden>content</div>` Note that `aria-hidden='true'` should be used for additional compatibility. 

`display: none;` and `hidden` can be used for:
- Collapsing Menus
- Repetitive information
- Off screen content

### Additional Resources

For more information on this topic, see these articles. 

- [HTML5 Accessibility Chops: hidden and aria-hidden](https://www.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)
- [The state of hidden content support in 2016](https://www.paciellogroup.com/blog/2016/01/the-state-of-hidden-content-support-in-2016/)
