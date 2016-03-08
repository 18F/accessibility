---
title: Links and Repetitive Content
description: 'How we deal with Links and Repetitive Content'
permalink: /links/
page_title: Links and Repetitive Content
---
Links are commonly used to quickly navigate a site when someone is using AT. Often, screen reader users won't read through an entire page to find what they are looking for, they simply move from link to link. 

Things become problematic when links only make sense with context. Links such as 'Click Here' or 'Read more' don't make sense without that visual context. It's important that we inspect our sites for these types of links. These links can be made accessible using ```title``` or ```ARIA``` attributes, but this is not ideal. The ideal method for making these links accessible, is just writing better link text.

The other issue screen reader and keyboard users come across is lengthy nav bars. These are usually made up of a list of links and with compound menus, they can be quite lengthy to tab through. To alleviate these pains, a skip navigation link should be provided. This is the first link on the page and jumps to an anchor with a ```tabindex='-1'```.

### Testing 

#### Unique Links

1. Identify all links on the page
2. Identify links with the same text
  * If they point at the different location, check for ```title``` or ```ARIA``` attributes to distinguish them
3. Identify links with generic text ('Click here', 'Read more')
  * Check for the ```title``` or ```ARIA``` attributes to provide context or additional off-screen text

#### Links that open in a New Window
1. Identify links that open in new windows
2. Check that ```target='_blank'```
3. Verify that some indication is given programatically
  *  ```<a href='#' target='_blank' aria-label='Opens in new window>```
  *  ```<a href='#' target='_blank' title='Opens in new window'>```
  *  ```<a href='#' target='_blank'>Link<span class='sr-only'>Opens in new window</span></a>```

#### Skip Navigation

1. First compare the pages on the site for links that are repeated at the beggining of the tab order
  * `Skip Navigation` is not needed if repetitive nav links are not used
2. If the `Skip Navigation` link is not visible, ensure it becomes visible when it has focus
3. Find the target of the skip navigation link
  * Verify the target is a valid id
  * Verify the target is after the repetive content and before meaningful content
  * Verify the target has a ```tabindex='-1'``` or is included in the tab order (such as a link or a button)
   * This ensures the element will receive focus in chrome and safari
4. Select the `Skip Navigation` link
5. If visual focus is after the repetitive content, the test is complete
6. If there is no visual focus, tab again to verify focus is after the repetitive content

### Examples

#### Passes

Home <a href='../' title='home'>Click Here</a>

Keyboard Access <a href='/keyboard' aria-label="Keyboard Access">Click Here</a>

```html
Home <a href='../' title='home'>Click Here</a>

Keyboard Access <a href='/keyboard' aria-label="Keyboard Access">Click Here</a>
```

> These links are not unique, but the ```title``` attribute in the first link gives a screen reader user context and the ```aria-label``` provides the context in the second link. 

##### Skip Navigation

```html
//This is the code for this very site
<div class="skip-nav">
	<a href="#mainContent">Skip to main content</a>
</div>
...
<h1 id="mainContent" tabindex="-1" class='mainContent'>Links and Repetitive Content</h1>

```
```css
div.skip-nav a {
  position: absolute;
  left: -10000;
  top: 0;
  width: 1px;
  height: auto;
  overflow: hidden;
}
div.skip-nav a:focus, div.skip-nav a:active {
	position: absolute;
	top: 5px;
	left: 5px;
	width: auto; 
	height: auto;
	z-index: 999999;
	background-color: white;
	padding-left: 2px;
	padding-right: 2px;
	overflow: visible;
 }

 .mainContent:focus, .mainContent:active {
 	outline: none;
 }
```

> This is how the 'Skip Navigation' was achieved for the accessiblity site, feel free to use for your own site. 
