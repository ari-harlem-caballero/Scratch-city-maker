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
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
