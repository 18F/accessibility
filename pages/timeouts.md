---
title: Timeouts
description: 'How we deal with Time Outs'
permalink: /timeouts/
page_title: Timeouts
layout: post
sidenav: docs
scripts:
- assets/js/time-outs.js
---
If timeouts are used, you must give the user at least 20 seconds to easily request more time.

## Testing

1. Identify any timeouts on the page.
  * Contact the developer to find these.
2. Trigger the time out.
  * __If you're not able to request more time or the request lasts less than 20 seconds, it's a failure__.

## Examples

### Passes

Fill out this form

<form id='pForm'>
<label for='t1'>Field 1</label>&nbsp;<input type='text' id='t1'><br>
<label for='t2'>Field 2</label>&nbsp;<input type='text' id='t2'><br>
<label for='t3'>Field 3</label>&nbsp;<input type='text' id='t3'><br>
<label for='t4'>Field 4</label>&nbsp;<input type='text' id='t4'><br>
<label for='t5'>Field 5</label>&nbsp;<input type='text' id='t5'><br>
</form>

> This passes because a timeout does occur, but you are given more than 20 seconds to request more time.
