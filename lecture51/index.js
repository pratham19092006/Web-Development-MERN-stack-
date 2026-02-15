// js DOM manipulation:
// window object: global object in browser environment above root element that is at the top of hierarchy.
// globar variables and methods are properties of window object means they are under window object. we can access them directly without using window object but they are actually properties of window object.

// this window object is created and removed by browser when we open and close the tab respectively.

// Document Object Model (DOM): suppose we have html page (index.html) amd converting this to js object than this js object is called document , overall structure of this document is called DOM. we can manipulate this DOM using js and we can change the content of html page using js.

// tokenizer: it converts tags(element inside aero) into tokens and those token are get converted into nodes and those nodes are get connected to each other and this whole structure is called DOM tree.



// DOM, BOM, JS Core all are under Window

// BOM (Browser Object Model) : whatever interactions ar done with browser leaving the document (html content) called BOM. for example: alert, prompt, confirm, setTimeout, setInterval, location, history, navigator etc are all part of BOM.


// how we can change html code using js:

// Change html:
// 1. access the element using js (using getElementById, getElementsByClassName, querySelector(), querySelectorAll , getElementByTagName , $0 etc)

// getElementById: it is used to access the element by its id and it will return single element because id is unique for each element in html page.
// getElementsByClassName: it is used to access the element by its class name and it will return multiple element because class name can be same for multiple element in html page.
// querySelector(): it is used to access the element by using css selector and it will return single element because it will return the first element that matches the selector.
// querySelectorAll: it is used to access the element by using css selector and it will return multiple element because it will return all the element that matches the selector.
// getElementByTagName: it is used to access the element by its tag name and it will return multiple element because tag name can be same for multiple element in html page.
// $0: it is used to access the element that we have selected in console and it will return single element because we can select only one element at a time in console.

// (YOU CAN SEE IN IMAGES FOLDER FROM IMAGES 1 TO 3)

// 2. UPDATE EXISTING ELEMENT:

// 2.1 innerHTML: it is used to change the content of html element and it will parse the string as html code and it will update the content of html element. (IMAGE:4)

// 2.2 outerHTML: it is used to change the content of html element and it will parse the string as html code and it will update the content of html element along with the element itself. (IMAGE:5)

// 2.3 textContent: it will show al the content that how you write on your code except tage or element only content . (IMAGE:6)

// 2.4 innerText: it will show only the content that is visible on the page UI and it will ignore the content that is hidden using css. (IMAGE:6)


// ADD ELEMENT:

// 1. createElement: it is used to create new element in html page and it will return the newly created element. (IMAGE:7)

// 2. appendChild: it is used to add the newly created element to the parent element and it will add the element at the end of the parent element. (IMAGE:7)

// 3. insertAdjacentElement: it is used to add the newly created element to the parent element and it will add the element at the specified position of the parent element. (IMAGE:8)

// several position for insertAdjacentElement:
// 1. beforebegin: it will add the new element before the parent element.
// 2. afterbegin: it will add the new element after the opening tag of the parent element.
// 3. beforeend: it will add the new element before the closing tag of the parent element.
// 4. afterend: it will add the new element after the parent element.

let mydiv = document.querySelector("#myDiv");

let newElement= document.createElement('span');
newElement.textContent = 'This is a new element';

mydiv.insertAdjacentElement('beforebegin',newElement); // it will add the new element before the mydiv element


// removal of element:
// 1. removeChild: it is used to remove the child element from the parent element and it will return the removed element. here we have to first access the parent element and then we have to access the child element that we want to remove and then we have to call the removeChild method on the parent element and pass the child element as an argument. 

let parent = document.querySelector("#myDiv");
let child = document.querySelector("#ffpara");

parent.removeChild(child); // it will remove the child element from the parent element


// 2. remove: it is used to remove the element from the html page and it will return nothing. here we have to first access the element that we want to remove and then we have to call the remove method on that element.

// let elementToRemove = document.querySelector("#myDiv");
// elementToRemove.remove(); // it will remove the element from the html page


// removing parent using child
let c = document.querySelector("#ttpara");
c.parentElement.remove(); // it will remove the parent element of the child element from the html page