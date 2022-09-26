---
title: Language
description: 'How we tell assistive technology what language a page is in'
permalink: /language/
page_title: Language
layout: post
sidenav: docs
---
Setting the language of your site allows assistive technology to interact with your content correctly. Assistive technology will read foreign languages, but it needs to know the main language of the page and when any content’s language differs from the default language for the page.

## Testing

1. Open the inspector panel.
2. Locate the main ```html``` tag.
  * __If the ```lang``` attribute isn't set to the correct language, this is a failure.__
3. Identify any content that differs from the default language. Make sure the content has its own ```lang``` attribute set with that language.
  * __Any alternate language content not set constitutes a failure__.

## Examples

### Failure

Sus ojos son verdes.

> This text is Spanish and lacks a ```lang``` attribute.

### Passes

<p lang="es">Sus ojos son verdes.</p>

> This text passes because the ```lang="es"``` attribute identifies its content as Spanish.
