// Browser Events:
// 1. Events: Events are actions or occurrences that happen in the browser, such as user interactions (clicks, key presses, scroll) or system-generated events (page load, resize).or we can define as announcements done by the browser.

// do on browser console:
// monitorEvents(document);// to monitor all events happening on the document
// unmonitorEvents(document) // to stop monitoring events on the document

// Event Target: The event target is the element on which the event occurred. It can be accessed using the `event.target` property in an event handler function. and by clicking on this , whatever actions we do on this element will be captured by the event listener attached to it.

// Event Listener: When we click on the event target, than the action that performed are listed in the event listener.

// Example:assume we click on the button,and a video played
// Event : Click
// Event Target : Button
// Action/behaviour : Video played
// Event Listener: Action are listed in the event listener. 


// addEventListener() method: It is used to attach an event handler to a specified element. 
// syntax: <event-target>.addEventListener('<event-type>', <function-action>);
// Eg: 
// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Text has been changed by Event Listener";
// }
// let  fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);


// if we directly write the function directly instead of changeText than while removing the eventListener that function will be treated as a different function and we will not be able to remove the event listener. 

// removeEventListener() method: It is used to remove an event handler that was previously attached to a specified element using the addEventListener() method.
// syntax: <event-target>.removeEventListener('<event-type>', <function-action>);
// Eg:
// fpara.removeEventListener('click', changeText);


// another way of adding event listener

// fpara.onclick = changeText; // this will override any previous click event listener attached to fpara element. and only this will work. and if we add another event listener using this method, than the previous one will be overridden. and only the last one will work. and this is the main disadvantage of this method. and we can not add multiple event listeners to the same element using this method. and we can not remove event listener using this method.


// Phase of Event:

// 1. Capturing Phase: In this phase, the event starts from the root of the document and travels down to the target element. The event is captured by each ancestor element along the way until it reaches the target element. This phase is also known as the "trickle-down" phase.

// 2. At-Target Phase: In this phase, the event has reached the target element. The event is processed by the target element and any event listeners attached to it are executed. This phase is also known as the "target" phase.


// 3. Bubbling Phase: In this phase, after the event has been processed by the target element, it starts to bubble up back through the ancestor elements in reverse order. The event is processed by each ancestor element along the way until it reaches the root of the document. This phase is also known as the "bubble-up" phase.

// By default, when we add an event listener using the addEventListener() method, it is added to the bubbling phase. However, we can specify the useCapture parameter as true to add the event listener to the capturing phase.

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click', function(event){
//     event.preventDefault(); // this will prevent the default action of the anchor tag, which is to navigate to the href attribute value.
//     anchorElement.textContent = "Anchor tag clicked";
// });



// Avoiding too many Listeners:

// let paras = document.querySelectorAll('p');
function alertPara(event){
    let target = event.target;
    if(target.nodeName === 'SPAN')
    alert("you have clicked on: " + target.textContent);
}
// for(let i=0; i<paras.length; i++){
//     paras[i].addEventListener('click', alertPara);
// } 

// let myDiv = document.getElementById('wrapper');
document.addEventListener('click', alertPara);
// document is better way instead of myDiv because if we click on any element inside the document, than the event will be captured by the document and the event listener will be executed. and this is called event delegation.

// Dom content loaded event: It is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// dynamically adding scipt for DOM content loaded event:



if(document.readyState === "loading"){

    document.addEventListener("DOMContentLoaded", function(){

        console.log("DOM Loaded");

    });

}
else{

    console.log("DOM already loaded");

}
