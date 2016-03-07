---
title: Headings
description: 'Proper use of heading elements'
permalink: /headings/
page_title: Headings
---

When laying out a page, headings provide a sementaic way to layout sections of content. Heading elements are used by users of AT to navigate a page quickly and to understand the structure of a page. Also see [Landmarks](../landmarks/)

When using headings, it is best practice to reserve `<h1>` for the name of the site, `<h2>` for the page title, and the rest for sections on the page. Heading attributes should be used in order, and "lower" elements should never be nested in higher attributes. i.e. 

```html
<h3>Section</h3> 
lorum ipsum 
<h2>Sub Section</h2>
lorum ipsum
``` 

### Testing

1. Identify visual 'heading' elements 
2. Check that all visual 'heading' elements use an `<h>` tag
3. Verify that all sub heading elements have a higher number

### Examples

#### Passes

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
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h4>Sub Category 1</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h4>Sub Category 2</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
</div>
```

> This section has a main category and two sub categories. The sub categories are on the same level and as such use the the same heading element.

#### Fails

<div>
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
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h2>Sub Category 1</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
  <h5>Sub Category 2</h5>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet auctor lectus. Curabitur non est nibh. Suspendisse vehicula fermentum quam. Donec lobortis diam a ligula faucibus mattis.</p>
</div>
```

> This section has several issues. The first sub category has a lower value than the main category. The second sub category has skipped a heading level which while is better, this can cause confusion as its not clear if this category is the sub category of `Category` or `Sub category 1`
