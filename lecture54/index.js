// Performance Improvements:

// 1. measure
// 2 efficient/ good practies

// preformance.now() - js standard way to measure time taken at this moment in time. it is more accurate than Date.now() as it gives time in milliseconds with microsecond precision.

let start = performance.now();
for(let i = 1; i<=100; i++){
    let para = document.createElement('p'); para.textContent = `This is para ${i}`;
    document.body.appendChild(para);
}
let end = performance.now();

console.log(`Time taken to execute 1st the loop: ${end - start}`);

// efficient/ good practies


let mydiv = document.createElement('div');
let start1 = performance.now();
for(let i = 1; i<=100; i++){
    let para = document.createElement('p'); para.textContent = `This is div ${i+100}`;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
let end1 = performance.now();

console.log(`Time taken to execute 2nd the loop: ${end1 - start1}`);

// 2nd one is more efficient because we are not manipulating the DOM in every iteration of the loop. Instead, we are creating a document fragment (mydiv) and appending all the paragraphs to it, and then appending the fragment to the DOM at once. This reduces the number of reflows and repaints, which can significantly improve performance when dealing with a large number of elements.

// reflows: process of calculating position , dimensions of elements and layout of the page. it happens when we manipulate the DOM, such as adding, removing, or changing elements. reflows can be expensive in terms of performance as doing computationally intensive task, especially if they happen frequently or involve a large number of elements.

// repaint: process of displaying content/element pixel by pixel on the screen. it happens when we change the visual appearance of an element, such as changing its color, background, or visibility. repaint can also be expensive in terms of performance, especially if it involves a large number of elements or complex styles. minimizing reflows and repaints can help improve the performance of web applications.

// in 1st case: we are manipulating the DOM in every iteration of the loop, which causes reflows and repaints each time. This is inefficient because each DOM manipulation triggers a reflow and repaint, which can be expensive in terms of performance.

// in 2nd case: we are creating a document fragment (mydiv) and appending all the paragraphs to it, and then appending the fragment to the DOM at once. This reduces the number of reflows and repaints to 1, which can significantly improve performance when dealing with a large number of elements. 


// Document Fragment: light weight document object, when we add elements to it, it does not cause reflows and repaints until we append it to the DOM. it is a temporary container for elements that we want to add to the DOM. (adding 1 time to DOM means 1 reflow and 1 repaint)

// best code:

let fragmet = document.createDocumentFragment();
let start2 = performance.now();

for(let i=1; i<=100; i++){
    let para = document.createElement('p'); para.textContent = `This is fragment ${i+200}`;
    // no reflow and o repaint for below line
    fragmet.appendChild(para);
}
// below line will take 1 reflow and 1 repaint
document.body.appendChild(fragmet);
let end2 = performance.now();
console.log(`Time taken to execute 3rd the loop: ${end2 - start2}`);