---
title: CSS dependence
description: 'How we deal with CSS'
permalink: /css/
page_title: CSS dependence
layout: post
sidenav: docs
---
CSS dependence refers to sites that rely on CSS to be functional or understandable. This is a concern for accessibility because most assistive technology ignores CSS. 

For example, images displayed through CSS are completely ignored by assistive technology. Images loaded by CSS do not have alt attributes and would require the images content to be displayed in some other manner on the page. It is recommended that all CSS images be decorative and content images be on the page with `<img>` tags.

Another common CSS dependence issue is content order. Content can be reordered with CSS. This can be an issue because assistive technology will read the content in a different order. Content should be ordered without CSS. 

## Testing

1. Disable CSS
2. Check for missing information (images, text, etc)
3. Check for code or other items the developer doesn't want you to see
  * Confusing elements shouldn't be present such as CSS, JavaScript, or other code, etc
4. Check for overlapping text
5. Check that the content order makes sense with and without CSS
