---
title: Forms
description: 'How we work with forms'
permalink: /forms/
page_title: Forms
---
Making forms accessible is a simple process. Each form element should be associated with its instructions and errors, and everything should be accessible via the keyboard. 

### Testing 

1. Identify each form element
2. Find all instructions associated with each element
  * __If a form element isn't programatically associated with ALL instructions, this is a failure__
3. Ensure all field elements are accessible via the keyboard
  * __If the form cannot be filled out with just a keyboard, this is a failure__
4. Check for title tags
  * Title tags can be a substitute for labels
  * __If the title tag provides all the related information it passes, if it provides extra information it fails.__
    * Title tags are not accessible via keyboard


### Examples
##Passes

<fieldset>
<legend>Name</legend>
<label for="firstname">First&nbsp;</label><input type='text' id='firstname'><br>
<label for="lastname">Last&nbsp;</label><input type='text' id='lastname'>
</fieldset>

<fieldset>
<legend>Favorite Soup?</legend>
<input type='radio' name='soup' value='pea' id='peasoup' title='Pea Soup'>&nbsp;Pea Soup<br>
<input type='radio' name='soup' value='chicken' id='chicken' title='Chicken Noodle'>&nbsp;Chicken Noodle<br>
<input type='radio' name='soup' value='tomato' id='tomato' title='Tomato'>&nbsp;Tomato
</fieldset>
<br>

```html
<fieldset>
<legend>Name</legend>
<label for="firstname">First&nbsp;</label><input type='text' id='firstname'><br>
<label for="lastname">Last&nbsp;</label><input type='text' id='lastname'>
</fieldset>

<fieldset>
<legend>Favorite Soup?</legend>
<input type='radio' name='soup' value='pea' id='peasoup' title='Pea Soup'>&nbsp;Pea Soup<br>
<input type='radio' name='soup' value='chicken' id='chicken' title='Chicken Noodle'>&nbsp;Chicken Noodle<br>
<input type='radio' name='soup' value='tomato' id='tomato' title='Tomato'>&nbsp;Tomato
</fieldset>
```
> ___Name:___ Each form element has a ```label```, and its associated with the ```for``` tag. The ```for``` tag refers to the ```id``` of the ```input```. When looking at this form, 'First' and 'Last' wouldn't make since without 'Name.' This is associated with the ```fieldset``` and ```legend```. All elements are wrapped in a ```fieldset```. There can only be one ```legend``` tag per ```fieldset```. Anything in the ```legend``` tag will be associated.

> ___Favorite Soup:___ ```Fieldset``` and ```legend``` is often used for radio buttons as its the easiest way to associate the radio buttons with the question. Notice there are no ```label```s for the radio buttons, but each button has a ```title``` tag for assistive technology to read. 

##Fails

<fieldset>
<legend>Name</legend>
<label for="first_name">First&nbsp;</label><input type='text' id='firstname'><br>
<label for="1lastname">Last&nbsp;</label><input type='text' id='1lastname'>
</fieldset>

<fieldset>
<legend>Favorite Soup?</legend>
<p><span style='color:red;'>This Question Is Required</span></p>
<input type='radio' name='soup' value='pea' id='peasoup' title='Chick Pea Soup'>&nbsp;Pea Soup<br>
<input type='radio' name='soup' value='chicken' id='chicken' title='Chicken Noodle'>&nbsp;Chicken Noodle<br>
<input type='radio' name='soup' value='tomato' id='tomato' title='Tomato'>&nbsp;Tomato
</fieldset>
<br>

```html
<fieldset>
<legend>Name</legend>
<label for="first_name">First&nbsp;</label><input type='text' id='firstname'><br>
<label for="1lastname">Last&nbsp;</label><input type='text' id='1lastname'>
</fieldset>

<fieldset>
<legend>Favorite Soup?</legend>
<p><span style='color:red;'>This Question Is Required</span></p>
<input type='radio' name='soup' value='pea' id='peasoup' title='Chick Pea Soup'>&nbsp;Pea Soup<br>
<input type='radio' name='soup' value='chicken' id='chicken' title='Chicken Noodle'>&nbsp;Chicken Noodle<br>
<input type='radio' name='soup' value='tomato' id='tomato' title='Tomato'>&nbsp;Tomato
</fieldset>
<br>
```

> ___Failure:___ First name label ```for``` and ```id``` don't match.

> ___Failure:___ Last name has an invalid ```id```.

> ___Failure:___ "This Question Is Required" is not associated with the form fields

> ___Failure:___ The ```title``` tag for Pea Soup indicates it's 'Chick Pea Soup.' This information is not available to keyboard, sighted users.


