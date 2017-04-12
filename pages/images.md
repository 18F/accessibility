---
title: Images
description: 'How we work with images'
permalink: /images/
page_title: Images
---
When using images on a page, you must provide an alternate method for that content. This can be provided in multiple ways. You can provide this information with a caption, alt attribute (alt tag), title attribute, or aria label attribute. If an image has text, all the text in the image must be provided in the alternate content. No matter which method is used, an alt or title attribute must be provided, even if the attribute is blank.

### Testing

1. Using the web developer tool, select images > Display Alt Attributes & Outline All Images.
2. Inspect each Alt attribute for the following:
  * A unique description of the image is provided
  * Repeated images used for controls, status indicators, or other programmatic elements have consistent alt text
  * All text in the image is included in the alt text
  * "Image of" or "Photo of" is not used
  * If the alt attribute is empty, ensure the image is purely decorative
    * If the image is not decorative, make sure the image is described on the page
3. Check outlined images without alt attribute by doing the following:
  * Right click the image
  * Select 'Inspect Element'
  * Check for a title attribute for the information normally found on the alt attribute

### Examples

### Correct

<img src="{{site.baseurl}}/images/sign.jpg" alt="Sign that reads Warning do not read this sign">

```html
<img src="{{site.baseurl}}/images/sign.jpg" alt="Sign that reads Warning do not read this sign">
```

> Preffered method for providing alternate content.
> Clear alt attribute with all text included.

---

<img src="{{site.baseurl}}/images/sign.jpg" title="Sign that reads Warning do not read this sign">

```html
<img src="{{site.baseurl}}/images/sign.jpg" title="Sign that reads Warning do not read this sign">
```

> Acceptable, but less compatible with certain assistive technologies.
> Clear title attribute with all text included.

---

<img src="{{site.baseurl}}/images/sign.jpg" alt="">
<span>Sign that reads Warning do not read this sign</span>

```html
<img src="{{site.baseurl}}/images/sign.jpg" alt="">
<span>Sign that reads Warning do not read this sign</span>
```

> Information contained in the image is provided on the page.
> In most instances, an alt attribute would be preferred.
> Images marked with an empty alt (alt="") are considered "Decorative" and not read by AT.

---

#### Incorrect

<img src="{{site.baseurl}}/images/sign.jpg" >

```html
<img src="{{site.baseurl}}/images/sign.jpg">
```

> Image is missing an alt attribute and alternative content

---

<img src="{{site.baseurl}}/images/sign.jpg" alt="sign">

```html
<img src="{{site.baseurl}}/images/sign.jpg" alt="sign">
```

> Alt attribute is missing text from image

---

<img src="{{site.baseurl}}/images/sign.jpg" alt="Image of sign that says WARNING DO NOT READ THIS SIGN">

```html
<img src="{{site.baseurl}}/images/sign.jpg" alt="Image of sign that says WARNING DO NOT READ THIS SIGN">
```

> Avoid using "Image of" or "Picture of" as the screen reader will notify the user that it's an image. Also avoid using all caps as some screen readers will read each letter. ie. W-A-R-N-I-N-G
