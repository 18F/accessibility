---
layout: default
title: Web Text Properties
description: 'How we deal with Web Text Properties'
permalink: /properties/
page_title: Web Text Properties
---
Having the HTML properties of your website set properly ensures assitive technology interacts with your site correctly. _AT_ will read foreign languages, but they need to know when the language differs from the page's default. 

### Testing 

1. Open the inspector panel
2. Locate the main ```html``` tag
  * __If the ```lang``` attribute isn't set to the correct language, this is a failure.__
3. Identify any content that differs from the default language, make sure the content has its own ```lang``` attribute set with that language
  * __Any alternate language content not set constitues a failure__

### Examples

#### Failure

Sus ojos son verdes.

> This text is Spanish and lacks a ```lang``` attribute.

#### Passes 

<p lang="es">Sus ojos son verdes.</p>

> This text passes because the ```lang="es"``` attribute identifies its content as Spanish.
