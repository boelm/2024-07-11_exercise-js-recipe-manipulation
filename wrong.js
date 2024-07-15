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
//console.log(ingridientsRef);
ingridientsRef.style.backgroundColor = 'rgb(249,249,249)';

//9. The ingredients are divided in to two parts, one for the bottom and one for the paste. 
//In the list of the ingredients to the bottom, there is a text instead of two list items. 
//Remove the text and add those two list items.
const ingredientsListBottomRef = document.querySelector('.ingredients-list-bottom');
let childRef = ingredientsListBottomRef.children[0];
ingredientsListBottomRef.removeChild(childRef);
//console.log(ingredientsListBottomRef.children);

const listItem1 = document.createElement('li');
listItem1.innerHTML = '15 st digestivekex';
ingredientsListBottomRef.appendChild(listItem1);
const listItem2 = document.createElement('li');
listItem2.innerHTML = 'Lite smör';
ingredientsListBottomRef.appendChild(listItem2);

//10. The third ingredient in the list of ingredients to the paste is wrong. 
//Change that specific ingredient to the correct one.
const ingredientsListPasteRef = document.querySelector('.ingredients-list-paste');
childRef = ingredientsListPasteRef.children[2]; //3rd ingridient
childRef.innerHTML = '3 tsk vaniljsocker';

//11. There is also a missing ingredient in the list of ingredients to the paste. 
//Look and see what it is and add that one the the end of the list.
listItemLast = document.createElement('li');
listItemLast.innerHTML = '400 g naturell philadelphiaost';
ingredientsListPasteRef.appendChild(listItemLast);

//12. The text "Instructions" to the left (=right?), beneath the image, has some shadow styling applied to it. 
//Remove that styling.
const instructionsH3ContainterRef = document.querySelector('.instructions');
instructionsH3ContainterRef.classList.remove('shadow');

//13. Two list elements of the list of instructions are incorrect. 
//Find them and change them to the correct ones.
//-> li 2 och 9 är fel...
const instructionListRef = document.querySelector('.instructions-list');
instructionListRef.children[1].innerHTML = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
instructionListRef.children[8].innerHTML = 'Ställ in i frysen över natten.';



