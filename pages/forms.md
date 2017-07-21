---
title: Forms
description: 'How we work with forms'
permalink: /forms/
page_title: Forms
---
Making forms accessible is a simple process. Each form element should be associated with its instructions and errors, and everything should be accessible via the keyboard.

### Recommendations

#### Use a proper `<label>` element

Match all data entry fields with labels so that screen reader users can easily tell what type of information they should enter. When data fields are properly labeled, folks using screen readers can complete the form using forms mode. 

The `<label>` tag associates a single label tag to a single form element (text field, radio button, checklist item, and so on). Use the `for` attribute to associate a label with a form element by matching the value of the `for` attribute to the value of the element's `id` attribute:

```html
<form action="/signup" method="post">
  <label for=”myinput”>Label text</label>
  <input id=”myinput” name=”textfield” type=”text”>
</form>
```

#### Use `<fieldset>` and `<legend>` for grouping

Use `<fieldset>` and `<legend>` tags to group related input elements, particularly with sets of radio buttons and checkboxes. Fieldsets display with a border, which is helpful for all users (especially those living with cognitive disabilities). Be sure to accompany all fieldsets with legend tags, which describe the associations:

```html
<form action="/subscribe" method="post">
  <fieldset>
    <legend>Choose your favorite sport:</legend>
    <input id="soccer" type="checkbox" name="sports" value="soccer">
    <label for="soccer">Soccer</label><br>
    <input id="basketball" type="checkbox" name="sports" value="basketball">
    <label for="basketball">Basketball</label><br>
    <input id="quidditch" type="checkbox" name="sports" value="quidditch">
    <label for="quidditch">Quidditch</label><br>
  </fieldset>
</form>
```

#### Follow a logical tab order

Not everyone uses a mouse; many people navigate forms using their keyboards. By default, the keyboard focuses on form elements, but it’s possible to break this behavior with JavaScript. 

Tabbing should take users from field to field in a logical order. Bouncing from "first name" to "address" to "last name" can cause non-sighted and visually impaired users to wonder if they’ve missed any fields. To prevent confusion, make sure tabbing moves through your form fields in a way that makes sense.

#### Indicate optional fields and use proper error handling

Call out optional fields using a symbol or text, not just a change in color. Embed your chosen symbol in the `<label>` tag. 

Even if you clearly label fields as required or optional, people completing your form may make mistakes (and that’s OK). Provide your users with helpful feedback — your error messages should identify the fields that contain errors and should describe the nature of the error. 

#### Use submission-type buttons

Include a separate Submit (submission-type) button to initiate form submission. As a person is navigating through data-entry form controls, their making a selection should not reload the page; please keep this in mind as you’re creating a form.

Keyboard users should be able to complete the each page of a form sequentially. Their making a selection should not force them to start back at the top of the page and tab back to where they were. Programmatically set focus to the last field they were in so they can continue sequentially tabbing through the page.

### Testing your form

1. Identify each form element.
2. Find all instructions associated with each element.
  * __It is a failure if a form element isn't programatically associated with ALL instructions. This includes legends, labels, hint text and tooltips.__
  * A common way of acheiving this is using `fieldset` and `legend` tags. `Fieldset` is used to group a set of elements. `Legend` is the first child of a `fieldset` tag and provides context for those fields. 
3. Ensure all field elements are accessible via the keyboard.
  * __If the form cannot be filled out with just a keyboard, this is a failure.__
4. Check for title attributes
  * Title attributes can be a substitute for labels.
  * __If the title attributes provides all the related information it passes, if it provides extra information it fails.__
    * Title attributes are not accessible via keyboard.

### Examples
#### Passes

<fieldset>
  <legend>Name</legend>
  <label for="firstname">First&nbsp;</label>
  <input type='text' id='firstname'><br>
  <label for="lastname">Last&nbsp;</label>
  <input type='text' id='lastname'>
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
  <label for="firstname">First&nbsp;</label>
  <input type='text' id='firstname'><br>
  <label for="lastname">Last&nbsp;</label>
  <input type='text' id='lastname'>
</fieldset>

<fieldset>
  <legend>Favorite Soup?</legend>
  <input type='radio' name='soup' value='pea' id='pea' title='Pea Soup'>&nbsp;Pea Soup<br>
  <input type='radio' name='soup' value='chicken' id='chicken' title='Chicken Noodle'>&nbsp;Chicken Noodle<br>
  <input type='radio' name='soup' value='tomato' id='tomato' title='Tomato'>&nbsp;Tomato
</fieldset>
```
> ___Name:___ Each form element has a ```label```, and its associated with the ```for``` attribute. The ```for``` attribute refers to the ```id``` of the ```input```. When looking at this form, 'First' and 'Last' wouldn't make sense without 'Name.' This is associated with the ```fieldset``` and ```legend```. All elements are wrapped in a ```fieldset```. There can only be one ```legend``` tag per ```fieldset```. Anything in the ```legend``` tag will be associated.

> ___Favorite Soup:___ ```Fieldset``` and ```legend``` is often used for radio buttons as its the easiest way to associate the radio buttons with the question. Notice there are no ```label```s for the radio buttons, but each button has a ```title``` attribute for assistive technology to read.

#### Fails

<fieldset>
  <legend>Name</legend>
  <label for="first_name-2">First&nbsp;</label>
  <input type='text' id='firstname-2'><br>
  <label for="1lastname">Last&nbsp;</label>
  <input type='text' id='1lastname'>
</fieldset>

<fieldset>
  <legend>Favorite Soup?</legend>
  <p><span style='color:red;'>This Question Is Required</span></p>
  <input type='radio' name='soup' value='pea' id='pea-2' title='Chick Pea Soup'>&nbsp;Pea Soup<br>
  <input type='radio' name='soup' value='chicken' id='chicken-2' title='Chicken Noodle'>&nbsp;Chicken Noodle<br>
  <input type='radio' name='soup' value='tomato' id='tomato-2' title='Tomato'>&nbsp;Tomato
</fieldset>
<br>

```html
<fieldset>
  <legend>Name</legend>
  <label for="first_name-2">First&nbsp;</label>
  <input type='text' id='firstname-2'><br>
  <label for="1lastname">Last&nbsp;</label>
  <input type='text' id='1lastname'>
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

> ___Failure:___ "This Question Is Required" is not associated with the form fields.

> ___Failure:___ The ```title``` tag for Pea Soup indicates it's 'Chick Pea Soup.' This information is not available to keyboard, sighted users.


#### How ARIA afects form inputs

Screen readers vary on what they read and the additional information they provide by default. This is a broad summary of what is read based on VoiceOver for Mac OSX.

You can test these with your own screen reader. If you have a OSX you can turn voice over on by hitting command+f5.

**Further Information** Using `aria-label` or `aria-labelledby` will cause a screen reader to only read them and not the default label. If you want an input to read from multiple things like an error message, use `aria-labelledby` and pass it the `for` attribute of the label and any aditional `id`s you want read. ex. `aria-labelledby='car1 car_description car-error-message'`

##### No ARIA

Reads just the `label` and not the description

<label for="car_1">Car</label>
<input type="text" id="car_1"/><br/>
<span id='carmakedescription'><i>Please enter Make and Model</i></span>

```html
<label for="car_1">Car</label>
<input type="text" id="car_1"/><br/>
<span id="carmakedescription_1"><i>Please enter Make and Model</i></span>
```

**Screen Reader reads input as:** `Car Edit text`
<hr>

##### With aria-label

Reads the `aria-label` and doesn't read the normal `label`.

<label for="car_2">Car</label>
<input type="text" id="car_2" aria-label="Car, please enter make and model" /><br/>
<span id='carmakedescription_2'><i>Please enter Make and Model</i></span>

```html
<label for="car_2">Car</label>
<input type="text" id="car_2" aria-label="Car, please enter make and model" /><br/>
<span id="carmakedescription_2"><i>Please enter Make and Model</i></span>
```

**Screen Reader reads input as:** `Car, please enter make and model Edit text`
<hr>

##### With aria-labelledby pointing at `carmakedescription`

Reads only the `aria-labelledby` attribute and not the default label

<label for="car_3">Car</label>
<input type="text" id="car_3" aria-labelledby="carmakedescription_3" /><br/>
<span id='carmakedescription_3'><i>Please enter Make and Model</i></span>

```html
<label for="car_3">Car</label>
<input type="text" id="car_3" aria-labelledby="carmakedescription_3" /><br/>
<span id='carmakedescription_3'><i>Please enter Make and Model</i></span>
```

**Screen Reader reads input as:** `Please enter Make and Model Edit text`
<hr>

##### With aria-labelledby pointing at `car carmakedescription`

Reads both labels indicated by the `aria-labelledby` attribute

<label for="car_4">Car</label>
<input type="text" id="car_4" aria-labelledby="car_4 carmakedescription_4" /><br/>
<span id='carmakedescription_4'><i>Please enter Make and Model</i></span>

```html
<label for="car_4">Car</label>
<input type="text" id="car_4" aria-labelledby="car_4 carmakedescription_4" /><br/>
<span id='carmakedescription_4'><i>Please enter Make and Model</i></span>
```

**Screen Reader reads input as:** `Car Please enter Make and Model Edit text`
<hr>

##### With aria-describedby pointing at `carmakedescription`

Jaws reads both the label and the description. So does VoiceOver, but there is a slight delay before it reads the description.

<label for="car_5">Car</label>
<input type="text" id="car_5" aria-describedby="carmakedescription_5" /><br/>
<span id='carmakedescription_5'><i>Please enter Make and Model</i></span>

```html
<label for="car_5">Car</label>
<input type="text" id="car_5" aria-describedby="carmakedescription_5" /><br/>
<span id='carmakedescription_5'><i>Please enter Make and Model</i></span>
```

**Screen Reader reads input as:** `Car Edit text`
<hr>
