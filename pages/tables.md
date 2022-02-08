---
title: Tables
description: 'How we deal with tables'
permalink: /tables/
page_title: Tables
layout: post
sidenav: docs
---

When tables are used to show data, the header cells that relate to the data cells need to be programmatically linked. This makes table navigation for screen readers more accurate and meaningful.

**Simple tables** can have up to two levels of headings; one row of headers and/or one column of headings. A table with more than one row or more than one column of headings is considered to be a complex table. Each table header cell should have `<th scope='col'>` or `<th scope='row'>`.

**Note:** Simple tables with headers in the first row and/or column don’t actually need the scope attribute for assistive technology to read them correctly. However, 508 test procedures within the federal government require table headings to have either `scope` or `id` attributes. 

**Complex tables** are tables with more than two levels of `headers`. Each header (`th`) should be given a unique `id`, and each data cell (`td`) should have a `headers` attribute with each related header cell’s `id` listed.

If a table has text associated with it, ensure the text is programmatically linked to the table. This is usually accomplished with a `<caption>` element. This element should be the first element under the `<table>` element. While a `caption` is not required, it can be very helpful to screen reader users navigating the page. A `caption` element is **strongly** encouraged on data tables to give context to the data.

## Testing

1. Identify 'data' tables (layout tables are exempt).
2. View the table source code.
3. Identify the table `headers`.
  * Check for `scope` on simple tables.
  * Check for `id` and headers on complex tables.

## Examples

### Passes

#### Simple table

<table>
  <caption>User’s Height and Age</caption>
  <tr>
    <th scope='col'>
      Name
    </th>
    <th scope='col'>
      Height
    </th>
    <th scope='col'>
      Age
    </th>
  </tr>
  <tr>
    <th scope='row'>
      Walter
    </th>
    <td>6'4</td>
    <td>34</td>
  </tr>
  <tr>
    <th scope='row'>
      Steve
    </th>
    <td>5'4</td>
    <td>30</td>
  </tr>
</table>

```html
<table>
  <caption>User’s Height and Age</caption>
  <tr>
    <th scope='col'>
      Name
    </th>
    <th scope='col'>
      Height
    </th>
    <th scope='col'>
      Age
    </th>
  </tr>
  <tr>
    <th scope='row'>
      Walter
    </th>
    <td>6'4</td>
    <td>34</td>
  </tr>
  <tr>
    <th scope='row'>
      Steve
    </th>
    <td>5'4</td>
    <td>30</td>
  </tr>
</table>
```

> Looking at this table, the column `headers` all relate to the cells below. This is done programmatically with ```scope='col'```. Each height and age value is programmatically related to the person via ```scope="row"```.

#### Complex table

<table>
  <caption>User’s Height and Weight</caption>
  <tr>
    <th rowspan='2' id='name' scope='col'>
      Name
    </th>
    <th colspan='2' id='height' scope='col'>
      Height
    </th>
    <th rowspan='2' id='age' scope='col'>
      Age
    </th>
  </tr>
  <tr>
    <th id='feet' headers='height' scope='col'>
      Feet
    </th>
    <th id='inches' headers='height' scope='col'>
      Inches
    </th>
  </tr>
  <tr>
    <th headers='name' scope='row'>
      Walter
    </th>
    <td headers='height feet'>6</td>
    <td headers='height inches'>4</td>
    <td headers='age'>34</td>
  </tr>
  <tr>
    <th headers='name' scope='row'>
      Steve
    </th>
    <td headers='height feet'>5</td>
    <td headers='height inches'>4</td>
    <td headers='age'>30</td>
  </tr>
</table>

```html
<table>
  <caption>User's Height and Weight</caption>
  <tr>
    <th rowspan='2' id='name'>
      Name
    </th>
    <th colspan='2' id='height'>
      Height
    </th>
    <th rowspan='2' id='age'>
      Age
    </th>
  </tr>
  <tr>
    <th id='feet' headers='height'>
      Feet
    </th>
    <th id='inches' headers='height'>
      Inches
    </th>
  </tr>
  <tr>
    <th headers='name' id='walter'>
      Walter
    </th>
    <td headers='height feet walter'>6</td>
    <td headers='height inches walter'>4</td>
    <td headers='age walter'>34</td>
  </tr>
  <tr>
    <th headers='name' id='steve'>
      Steve
    </th>
    <td headers='height feet steve'>5</td>
    <td headers='height inches steve'>4</td>
    <td headers='age steve'>30</td>
  </tr>
</table>
```

> This is an example of a complex table. All the cells are associated with their respective headers via the ```headers``` attribute. Most tables don’t require this level of complexity.
