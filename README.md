## HTML SetUp
1) Three dropdowns
  - WHY? Can tell which image user selected.
  - HOW? `dropdown event listener`, `dropdown.value` for selected image
2) Three images
  - WHY? Display selected image.
  - HOW? `img.src`
3) Input form
  - WHY? User can type slogan.
  - HOW? `array.push(slogan)`, `const slogan = input.value`
4) Button
  - WHY? Submit the slogan.
  - HOW? `button event listener`
5) Div for slogan
  - WHY? Place to hold slogan.
  - HOW? `display() using for loop`

`function displayCatchphrases() {`
    // clear out the DOM for the currently displayed catchphrases
    `catchphrasesEl.textContent = '';`
    // loop through each catchphrase in state
    // and for each catchphrase
    `for (let catchPhrase of catchPhraseArray) {`
        `const p = document.createElement('p');`
        `p.classList.add('catchPhrase');`
        `p.textContent = catchPhrase;`
        `catchphrasesEl.append(p);`
    }
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}

## Events
change of dropdowns:
  - image with change to matching dropdown selection
    - value of dropdown elem -> change img `.src`
  - count of dropdown increases
    - typeCount++
    - DOM change to update new count
button click:
  - get slogan from `input.value`
  - push slogan to array of slogans `array.push(slogan)`
  - update DOM
    - clear old slogan from DOM
    - loop through slogan array
    - append ea slogan
display stats:
  - displayStats(waterfront, skyline, castle) with countElem
  - TDD of func
    - test in example.test.js
    - import from test
    - import test.js to app.js