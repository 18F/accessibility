---
title: Headings
description: 'Proper use of heading elements'
permalink: /headings/
page_title: Headings
layout: post
sidenav: docs
---

When laying out a page, headings provide a semantic way to lay out sections of content. A heading element briefly describes the topic of the section it introduces. Heading elements are used by users of AT to navigate a page quickly and to understand the structure of a page. Also see [Landmarks](../landmarks/).

When using heading elements, reserve the `<h1>` element for the page title. On the home page, this is usually the title of the site and on other pages, this may be the page title. Use the `<h1>` element once per page—some assistive technology may be unable to read multiple `<h1>`s on a single page correctly. Other heading levels may be used more than once following document outline order.

**Note:** `<section>` and `<article>` elements may allow you to reset the heading order allowing you to "restart" heading levels at `<h1>` according to the HTML5 spec. At this point, we are unaware of any browsers that support this feature beyond general HTML5 conformance checkers. For this reason, we recommend developers maintain the document outline with `h1-h6` when using HTML5 outline elements.

For sub sections, use `<h2>` to `<h6>` in document outline order. `<h1>` is the most important and `<h6>` is the least. Avoid skipping headings. Avoid breaking document outline order (you may go from `<h1>` to `<h3>`, but never `<h3>` to `<h1>`).

For logos that are text-based, use `<em>` element. 

If your logo is an image and acting as the main heading of the page, add an `<h1>` element for its text and use a `sr-only` rule so it's visibly hidden but accessible to screen reader users.

The following code snippet shows one example of proper section and subsection heading hierarchy.

```html
<h2>Section</h2> 
lorum ipsum 
<h3>Sub Section</h3>
lorum ipsum
``` 

## Testing

1. Identify visual 'heading' elements 
2. Check that all visual 'heading' elements use an `<h>` tag
3. Verify that all sub heading elements have a higher number

## Examples

### Passes

<div>
  <h3>Category</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h4>Sub Category 1</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h4>Sub Category 2</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
</div>

```html
<div>
  <h3>Category</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. 
    Donec lobortis diam a ligula faucibus mattis.
   </p>
  <h4>Sub category 1</h4>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam sit amet auctor lectus. Curabitur non est nibh. 
    Suspendisse vehicula fermentum quam. 
    Donec lobortis diam a ligula faucibus mattis.
   </p>
  <h4>Sub category 2</h4>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam sit amet auctor lectus. Curabitur non est nibh. 
    Suspendisse vehicula fermentum quam. 
    Donec lobortis diam a ligula faucibus mattis.
  </p>
</div>
```

> This section has a main category and two sub categories. The sub categories are on the same level and as such use the the same heading element.

### Fails

<div class="exampleFailure">
  <h3>Category</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h2>Sub Category 1</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h5>Sub Category 2</h5>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
</div>

```html
<div>
  <h3>Category</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam sit amet auctor lectus. Curabitur non est nibh. 
    Suspendisse vehicula fermentum quam. 
    Donec lobortis diam a ligula faucibus mattis.
  </p>
  <h2>Sub category 1</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam sit amet auctor lectus. Curabitur non est nibh. 
    Suspendisse vehicula fermentum quam. 
    Donec lobortis diam a ligula faucibus mattis.
   </p>
  <h5>Sub category 2</h5>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nam sit amet auctor lectus. Curabitur non est nibh. 
    Suspendisse vehicula fermentum quam. 
    Donec lobortis diam a ligula faucibus mattis.
  </p>
</div>
```

> This section has several issues. The first sub category has a lower value than the main category. The second sub category has skipped a heading level which while is better, this can cause confusion as it's not clear if this category is the sub category of `Category` or `Sub category 1`
