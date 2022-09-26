---
title: Checklist
description: 'A simple checklist for determining if your site is accessible'
permalink: /checklist/
page_title: checklist
layout: post
sidenav: docs
---
This checklist helps developers identify potential accessibility issues affecting their websites or applications. It's broken down into three sections of decreasing importance: A, B and C. Please check and address these issues in the order in which they appear.

For more detail on accessibility standards, please see [WCAG2.0 AA](https://www.w3.org/TR/WCAG20/) 

 * A - Critical issues that will cause serious problems and/or stop most users of assistive technology from using the site
 * B - Issues that may cause problems or increased frustration for certain users
 * C - Minor issues that will cause problems or frustration for a small number of users

It is important to note, while B and C are noted as less critical, they are still required to be truly 508 compliant. This checklist should be used as a reference for development and is not a substitute for compliance checks by a section 508 coordinator.

##  A - Critical

1. <a href='../keyboard/'>Site is keyboard accessible</a>
 * All interactions can be accessed with a keyboard
2. <a href='../keyboard/#keyboard-trap'>Site is free of keyboard traps</a>
 * The keyboard focus is never trapped in a loop
4. <a href='../forms/'>All `form` inputs have explicit labels</a>
6. <a href='../images/'>All relevant images use an `img` tag</a>
5. <a href='../images/'>All images have `alt` attributes</a>
6. <a href='../multimedia/'>Multimedia is tagged</a>
 * All multimedia has appropriate captioning and audio description
7. <a href='../color/'>Text has sufficient color contrast</a>
 * All text has a contrast ratio of 4.5:1 with the background

## B - Less Critical

1. <a href='../keyboard/'>Site never loses focus</a>
 * Focus is always visible when moving through the page with the keyboard
2. <a href='../keyboard/'>Tab order is logical</a>
3. <a href='../forms/'>Form instructions are associated with inputs</a>
4. <a href='../timeouts/'>Site doesn't timeout unexpectedly</a>
 * Identify elements that may "timeout" and verify that the user can request more time
5. <a href='../tables/'>Tables are coded properly</a>
 * Tables have proper headers and column attributes
6. <a href='../headings/'>Headings are nested properly</a>
 * Heading elements are nested in a logical way

## C - Minor
1. <a href='../iframes/'>Frames are named</a>
 * All frames have a name element
2. <a href='../flashing/'>Flashing elements are compliant</a>
 * Elements that flash on screen do so at a rate of less than 3 Hz
3. <a href='../language/'>Language is set</a>
 * The language for the page is set
 * The language for sections on the page that differ from the site language are set
4. <a href='../css/'>CSS is not required to use the page</a>
 * The page makes sense with or without CSS
5. <a href='../links/'>Links are unique and contextual</a>
 * All links can be understood taken alone, e.g., 'Read more - about 508'
6. <a href='../page-titles/'>Page titles are descriptive</a>
7. <a href='../plugins/'>Required plugins are linked on the page</a>
