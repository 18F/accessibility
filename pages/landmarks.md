---
title: Landmarks
description: 'Proper page layout using Landmarks'
permalink: /landmarks/
page_title: Landmark
layout: post
sidenav: docs
---

All elements on a page should be contained in a landmark element. This helps users of AT quickly navigate a page. HTML5 provides built in landmark elements such as `main`, `nav`, `aside`, `header`, `footer`. When using HTML5 elements, don't define role.

When using HTML4 use ARIA role on divs to define landmark elements such as `role="main"`.

## Testing

1. Identify content in the source code
2. Check that all rendered content is contained by a landmark element

## Examples

### HTML5

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Sample page</title>
  </head>
  <body>
    <header>
      <h1>Site Name</h1>
    </header>
    <nav>
      <ul>
        <li>Home</li>
        <li><a href="./otherpage/">Other Page</a></li>
      </ul>
    </nav>
    <main>
      <article>Here's an article</article>
    </main>
    <footer>Footer</footer>
  </body>
</html>
```

### HTML4

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
        "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Sample page</title>
  </head>
  <body>
    <div role='banner' id='header'>
      <h1>Site Name</h1>
    </div>
    <div role='navigation' id='main-nav'>
      <ul>
        <li>Home</li>
        <li><a href="./otherpage/">Other Page</a></li>
      </ul>
    </div>
    <div role="main">
      <div>Here's an article</div>
    </div>
    <div role='contentinfo'>Footer</div>
  </body>
</html>
```
