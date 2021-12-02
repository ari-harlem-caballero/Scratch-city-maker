// IMPORT MODULES under test here:
import {
    displayStats
} from '../test.js';

const test = QUnit.test;

test('should display number of times clicked for 3 dropdown types', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You've changed the waterfront 3 times, the skyline 4 times, and the castle 6 times`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayStats(3, 4, 6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'should say youve changed the waterfront 3 times, the skyline 4 times, and the castle 6 times');
});
