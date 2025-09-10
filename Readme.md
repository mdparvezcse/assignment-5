(1). What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 

Answer: getElementById -> find one element used to Id. Its uniquely identify

getElementsByClassName -> Finds many elements with the same class name.

querySelector -> Finds the first element of the CSS selector

querySelectorAll -> Its similar to querySelector. one different querySelectorAll used to finds the all element of the css selector.

(2). How do you create and insert a new element into the DOM?

    const parent = document.getElementByTagName("boby");

    const child = document.createElement("div");
    child.innerText = "hello";
    parent.appendChild(child);

(3). What is Event Bubbling and how does it work?

answer: When we are click a child element, the event first runs on the child, then up to the parent, then to the grandparent and up to more.

This movement from child → parent → grandparent is called bubbling.

(4). What is Event Delegation in JavaScript? Why is it useful?

answer: 

(5). What is the difference between preventDefault() and stopPropagation() methods?

answer: 

preventDefault() -> used to the Stops a link from opening the URL.
example: we see the form tag . reload the webpage then used to preventDefault stop the loading.

stopPropagation() -> Only the child works, parent events won't run.
