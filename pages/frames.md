---
layout: default
title: Frames
description: 'How we deal with Frames'
permalink: /frames/
page_title: Frames
---
When using frames, its important that all content contained in them is accessible. 

### Testing 

1. Identify all `frame`s / `iframe`s on a pages
2. Using the keyboard, navigate each frame to ensure content is accessible
3. Check the `title` or `name` attribute of each for a description of the content

### Examples


#### Failure

<iframe src="../iframeform/"></iframe>

```html
<iframe src="../iframeform/"></iframe>
```

> This `iframe` doesn't have a title or name.

<iframe src="../iframeform/" name='Provide an address form'></iframe>

```html
<iframe src="../iframeform/" name='Provide an address form'></iframe>
```

> This `name` isn't correct

#### Passes

<iframe src="../iframeform/" title='Provide Name Form'></iframe>

```html
<iframe src="../iframeform/" title='Provide Name Form'></iframe>
```

> Correct `title` is provided. This would also pass if this information was in a `name` attribute.

