**1 - What is the difference between getElementById, getElementsByClassName, querySelector, querySelectorAll?**

**Answer:--**<br> 
Defference between **getElementById, getElementsByClassName, querySelector, querySelectorAll** is:

**Selection ---**<br>
**getElementById():**--- It selects only one element.<br> 
**querySelector():**--- It also selects only one element. But it select only the first element of its given any kind of selector.<br>
**querySelectorAll():**--- It select all Elements of given selector name.<br>
**getElementsByClassName():**--- It selects all element of a common class name. Only Classname can be passed as parameter here.

**Returns ---**

**getElementById():**--- It returns One element object or null (null if the selector does not have any existing element).<br>
**querySelector():**---  It also returns One element object or null(null if the selector does not have any existing element).<br>
**querySelectorAll():**--- It returns static Nodelist of existing elements of selector. Static means,<br>
if there dynamically added more element of same selector, that will not be added to the list.<br>
**getElementsByClassName():**--- It returns dynamic HtmlCollection of existing elements of selector. Dynamic means,<br> 
if there dynamically added more element of same selector, that will be added to the list.<br>



**2 - How to create and insert a new element into DOM?**

**Answer:--**<br>
Creating and Inserting process of DOM is----<br>
**a.** Element creation-- We use **document.createElement()** method to create element dynamically.<br>
**b.** Inset the created element-- we can insert the created element in many ways, such as<br>
**appendChild(), insertBefore()** and so on.<br>
the appendChild() method syntax is---- parent_element_selector.appendChild(created_element_name);<br>



**3 - What is event Bubbling and how does it works?**

**Answer:--**<br>
**Bubbling-** Bubbling concept in JavaScript is almost like as bubbling of boiling water. Bubbls on boiling<br>
water is moving upwords. The event on a element also moving upword to its parent element untill the document <br>
or html element as like the water bubble.<br>


**4 - What is event Delegation and why is it useful?**<br>

**Answer: --**<br>
Event Deligation is a tehnique of handling event through one eventlistner rather than multiple. It is widely<br>
used for reusable and cleaner code. It performs faster and it is more manageable. So it so useful.<br>

**5 - what is the difference between preventDefault() and stopPropagation()?**<br>

In one line, preventDefault() method is used to prevent some default behaviour of <br>
browser or code like form reload and so on.<br>
On the other hand, stopPropagation() method is used to stop event bubbling up to its parent elements.<br>







