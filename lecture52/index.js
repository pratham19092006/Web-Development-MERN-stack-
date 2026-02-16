// JS DOM Manipulation : styling elements   

// run all below this on browser console

// 1. .style property: 
let paraElement = document.getElementById("spara");
console.log(paraElement.style);

// by below lines we can change the style of element but only one property at a time
paraElement.style.color = "red";
paraElement.style.fontSize = "30px"; // [IMAGE 1]


// 2. .style.cssText property:
// we can change multiple properties at a time using .style.cssText property but we have to write all the properties in one line and also we have to write the properties in camelCase format
paraElement.style.cssText = "color: blue; font-size: 40px; background-color: yellow;";
// [IMAGE 2]

// 3. .setAttribute() method:
// we use this to change the value of any attribute of an element like class , id but we can also use this to change the style of an element by passing the style attribute and the value of the style in camelCase format
paraElement.setAttribute("style", "color: green; font-size: 50px; background-color: pink;");
// [IMAGE 3]

// 4. .className property:
// we can use this to change the class of an element and/overwrite then we can define the styles for that class in CSS file and then we can apply that class to the element
paraElement.className = "myClass"; // [IMAGE 4]

// 5. .classList property:
// we can use this to (add or remove or contains or toggle )classes from an element without overwriting the existing classes
paraElement.classList.add("myClass1"); 
paraElement.classList.remove("myClass1"); 
paraElement.classList.contains("myClass"); // true
paraElement.classList.toggle("myClass"); // if class is present then it will remove it and if class is not present then it will add it 
// [IMAGE 5]