// import functions and grab DOM elements
const skylineDropdown = document.querySelector('#skyline-dropdown');
const castleDropdown = document.querySelector('#castle-dropdown');
const waterfrontDropdown = document.querySelector('#waterfront-dropdown');
const skylineImg = document.querySelector('#skyline-image');
const castleImg = document.querySelector('#castle-image');
const waterfrontImg = document.querySelector('#waterfront-image');
const sloganInputElem = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');
const countElem = document.querySelector('.count');

// let state
let skylineCount = 0;
let castleCount = 0;
let waterfrontCount = 0;
let sloganArray = 0;

// set event listeners 
skylineDropdown.addEventListener('change', () => {
// get value from dropdown elem
    const id = skylineDropdown.value;
// value of dropdown elem -> change img `.src`
    skylineImg.src = `./assets/skyline-${id}.jpeg`;
// count of dropdown increases
    skylineCount++;
// DOM change to update new count
    countElem.textContent = `You changed the skyline ${skylineCount} times`;
});

castleDropdown.addEventListener('change', () => {

    const id = castleDropdown.value;

    castleImg.src = `./assets/castle-${id}.jpeg`;

    castleCount++;

    countElem.textContent = `You changed the castle ${castleCount} times`;
});

waterfrontDropdown.addEventListener('change', () => {

    const id = waterfrontDropdown.value;

    waterfrontImg.src = `./assets/waterfront-${id}.jpeg`;

    waterfrontCount++;

    countElem.textContent = `You changed the waterfront ${waterfrontCount} times`;
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
