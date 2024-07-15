//------------PART 2---------------------
// 1. The logo text of the site has the wrong color. Change it to the correct one.
const logoRef = document.querySelector('.logo-text');
logoRef.style.color = 'black';

//2. The alignment of the elements inside the header element are wrong. 
//Change it to the correct one. Hint, check the flex properties for the correct alignment.
const headerRef = document.querySelector('header');
headerRef.style.justifyContent = 'start';

//3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
headerRef.style.borderColor = 'lightgray';

//4. The recipe name is wrong, change it to the correct one.
const titleRef = document.querySelector('#recipe-name');
titleRef.innerHTML = 'Frozen Cheesecake';

//5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. 
//This can be fixed by adding a class to that element.
const timeContainerRef = document.querySelector('.time-container');
//console.log(timeContainerRef);
//console.log(timeContainerRef.firstChild);
timeContainerRef.firstChild.classList.add('material-icons');

//6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
const timeEstimationRef = document.querySelector('.time');
timeEstimationRef.innerHTML = '60+';

//7. The src path to the image is wrong, or atleast it's showing the wrong image. 
//Change it to the correct one. The available images can be found in the assets folder.
const imgRef = document.querySelector('.image-container > img');
//console.log(imgRef);
imgRef.setAttribute('src','assets/frozen-cheesecake-slice.jpg');

//8. The background color of the ingredients list container is wrong. Fix it.
const ingridientsRef = document.querySelector('.ingredients-container');
console.log(ingridientsRef);
ingridientsRef.style.backgroundColor = 'rgb(249,249,249)';

//. The ingredients are divided in to two parts, one for the bottom and one for the paste. 
//In the list of the ingredients to the bottom, there is a text instead of two list items. 
//Remove the text and add those two list items.
