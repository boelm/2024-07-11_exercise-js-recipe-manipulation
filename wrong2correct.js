//Exercises on DOM Manipulation Part 1
//Getting data from the DOM.

// 1. What is the name of the recipe?
let nameRef = document.querySelector('#recipe-name');
let nameText = nameRef.innerHTML;
console.log(`1. Name of recipe: ${nameText}`);

// 2. What HTML tag is used to display the Recipe name?
let tagName = nameRef.tagName;
console.log(`2. HTML tag used: ${tagName}`);

// 3. What is the font size of the paragraph tag with the class "description".
let pDescriptionRef = document.querySelector('.description');
//pDescriptionRef.style.fontSize = '3px';
console.log('%c3. font-size (in css set to 16px for *) ','color:orange',pDescriptionRef.style.fontSize);

// 4. What is the value of the alt atrribute on the image?
let imgRef = document.querySelector('img');
console.log(`Value of alt attribute on image: ${imgRef.alt}`);
let altAttributes = imgRef.attributes;

// 5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
// {
//   url: string
//   height: number,
//   width: number,
// }



// 6. How many ingredients has the paste?
// 7. Which is the forth element in the list containing the ingredients for the paste?
// 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
// {
//   order: number;
//   text: instruction;
// }
