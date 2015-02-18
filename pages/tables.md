---
layout: default
title: Tables
description: 'How we deal with tables'
permalink: /tables/
page_title: Tables
---
Sed eros purus, egestas eu risus sit amet, sodales posuere eros. Ut porta lorem lorem, in ultrices est porta hendrerit. Nam vitae porttitor neque. Vestibulum in leo porta, feugiat nisl vestibulum, dignissim ligula. Morbi hendrerit, enim et faucibus sollicitudin, libero turpis pretium tellus, sit amet dapibus nunc sem vel eros. Proin felis velit, varius vel tellus nec, viverra tristique leo. Integer mattis mollis orci, ut maximus mi varius vitae.

### Testing 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur efficitur metus non porta. Aenean fringilla sodales dolor eget sodales. Sed semper nunc in lectus fermentum congue. Ut quis nulla arcu. Pellentesque sit amet erat nec lectus posuere facilisis eu ac libero. Proin cursus feugiat accumsan. Proin eget maximus libero, in ultrices est. Aliquam semper mi porta nisi mattis aliquam.

### Examples

#### Passes

##### Simple Table

<table>
	<tr>
		<th scope="col">
			Name
		</th>
		<th scope="col">
			Height
		</th>
		<th scope="col">
			Age
		</th>
	</tr>
	<tr>
		<td scope='row'>
			Walter
		</td>
		<td>6'4</td>
		<td>34</td>
	</tr>
	<tr>
		<td scope='row'>
			Steve
		</td>
		<td>5'4</td>
		<td>30</td>
	</tr>
</table>

```html
<table>
	<tr>
		<th scope="col">
			Name
		</th>
		<th scope="col">
			Height
		</th>
		<th scope="col">
			Age
		</th>
	</tr>
	<tr>
		<td scope='row'>
			Walter
		</td>
		<td>6'4</td>
		<td>34</td>
	</tr>
	<tr>
		<td scope='row'>
			Steve
		</td>
		<td>5'4</td>
		<td>30</td>
	</tr>
</table>
```

> Looking at this table, the column headers all relate to the cells below. This is done programatically with ```scope="col"```. Each height and age value is related to the person and this is done programatically with ```scope="row"```.

##### Complex table

<table>
	<tr>
		<th rowspan='2' id='name'>
			Name
		</th>
		<th colspan='2' id='height'>
			Height
		</th>
		<th rowspan='2' id='age'>
			Age
		</th>
	</tr>
	<tr>
		<th id='feet'>
			Feet
		</th>
		<th id='inches'>
			Inches
		</th>
	<tr>
		<td headers='name'>
			Walter
		</td>
		<td headers='height feet'>6</td>
		<td headers='height inches'>4</td>
		<td headers='age'>34</td>
	</tr>
	<tr>
		<td headers='name'>
			Steve
		</td>
		<td headers='height feet's>5</td>
		<td headers='height inches'>4</td>
		<td headers='age'>30</td>
	</tr>
</table>

```html
<table>
	<tr>
		<th rowspan='2' id='name'>
			Name
		</th>
		<th colspan='2' id='height'>
			Height
		</th>
		<th rowspan='2' id='age'>
			Age
		</th>
	</tr>
	<tr>
		<th id='feet'>
			Feet
		</th>
		<th id='inches'>
			Inches
		</th>
	<tr>
		<td headers='name' id='walter'>
			Walter
		</td>
		<td headers='height feet walter'>6</td>
		<td headers='height inches walter'>4</td>
		<td headers='age walter'>34</td>
	</tr>
	<tr>
		<td headers='name' id='steve'>
			Steve
		</td>
		<td headers='height feet steve's>5</td>
		<td headers='height inches steve'>4</td>
		<td headers='age steve'>30</td>
	</tr>
</table>
```

> This is an example of a complex table, all the cells are associated to their respective headers with the ```headers``` attribute. Most tables don't require this level of complexity. 
