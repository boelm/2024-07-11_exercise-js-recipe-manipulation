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
//TOODO: add class
//timeContainerRef

//material-icons