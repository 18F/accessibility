---
title: Links and repetitive content
description: 'How we deal with links and repetitive content'
permalink: /links/
page_title: Links and Repetitive Content
layout: post
sidenav: docs
---
Links are commonly used to quickly navigate a site when someone is using assistive technology. Often, screen reader users won’t read through an entire page to find what they are looking for. They may simply move from link to link.

Things become problematic when links only make sense with additional context. Links such as ‘Click Here’ or ‘Read more’ don’t make sense without that visual context. It’s important that we inspect our sites for these types of links. These links can be made accessible using ```title``` or ```ARIA``` attributes, but this isn’t ideal. **The best method for making links accessible is to write better link text.**

The other issue screen reader and keyboard users come across is lengthy nav bars. These are usually made up of a list of links and compound menus. They can be quite lengthy to tab through. To alleviate these pains, a skip navigation link should be provided. This is the first focusable element on the page and jumps to an anchor with a ```tabindex='-1'```.

## Testing

### Unique links

1. Identify all links on the page.
2. Identify links with the same text.
  * If the link destinations are different, check for ```title``` or ```ARIA``` attributes that distinguish them.
3. Identify links with generic text (‘Click here’, ‘Read more’).
  * Check for the ```title``` or ```ARIA``` attributes to provide context or additional off-screen text.

### Links that open in a new window
1. Identify links that open in new windows.
2. Check for links with ```target='_blank'```.
3. Verify that an indication is given accessibly. Some examples are:
  *  ```<a href='#' target='_blank' aria-label='Opens in new window'>```
  *  ```<a href='#' target='_blank' title='Opens in new window'>```
  *  ```<a href='#' target='_blank'>Link<span class='sr-only'>Opens in new window</span></a>```

### Skip navigation

1. First, compare the pages on the site for links that are repeated at the beginning of the tab order.
  * `Skip Navigation` is not needed if repetitive nav links are not used.
2. If the `Skip Navigation` link is not visible, ensure it becomes visible when it has focus.
3. Find the target of the skip navigation link.
  * Verify the target is a valid `id`.
  * Verify the target is after the repetitive content and before meaningful content.
  * Verify the target has a ```tabindex='-1'``` or is included in the tab order (such as a link or a button).
   * This ensures the element will receive focus when used.
4. Activate the `Skip Navigation` link.
5. If visual focus is after the repetitive content, the test is complete.
6. If there is no visual focus, tab again to verify focus is after the repetitive content.

## Examples

### Passes

Home <a href='../' title='home'>Click Here</a>

Keyboard Access <a href='../keyboard/' aria-label="Keyboard Access">Click Here</a>

```html
Home <a href='../' title='home'>Click Here</a>

Keyboard Access <a href='../keyboard/' aria-label="Keyboard Access">Click Here</a>
```

> These links are not unique, but the ```title``` attribute in the first link gives a screen reader user context and the ```aria-label``` provides the context in the second link.

#### Skip navigation

```html
//This is the code used on this guide
<a class="usa-skipnav" href="#main-content">Skip to main content</a>
...
<main id="main-content" tabindex="-1" ...>

```
```css
.usa-skipnav {
    font-family: Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
    font-size: 1.08rem;
    line-height: 1.6;
    color: #005ea2;
    text-decoration: underline;
    background: transparent;
    left: 0;
    padding: 0.5rem 1rem;
    position: absolute;
    top: -3.8rem;
    transition: 0.2s ease-in-out;
    z-index: 100;
}

.usa-skipnav:focus {
    z-index: 9999;
}

.usa-skipnav:focus, .usa-skipnav.usa-focus {
    background: #fff;
    left: 0;
    position: absolute;
    top: 0;
    transition: 0.2s ease-in-out;
}

.usa-skipnav:focus {
    outline: 0.25rem solid #2491ff;
    outline-offset: 0;
}

.usa-skipnav:active {
    color: #11181d;
}
```

> This is how the 'Skip Navigation' was achieved for the accessibility site. Feel free to use for your own site.
