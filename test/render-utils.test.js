// IMPORT MODULES under test here:
import { renderMenu, renderMenuInfo } from '../render-utils.js';

const test = QUnit.test;

test('time to test break menu render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="./break-info/?id=1"><div class="break-option"><h3 class="title">Yoga with Aidan 🧘</h3><img class="img" src="/assets/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg"><p class="duration">Duration: 14 min</p></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMenu({
        id: '1',
        type: 'movement',
        title: 'Yoga with Aidan 🧘',
        img: '/assets/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg',
        source: 'https://www.youtube.com/embed/M-8FvC3GD8c',
        description: '14 Min Office Break Yoga',
        duration: '14',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderMenuInfo should render a div with the activities info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="activities-div"><h1 class="activity-title">Yoga with Aidan 🧘</h1><iframe class="activity-video" src="https://www.youtube.com/embed/M-8FvC3GD8c"></iframe><p class="activity-description">14 Min Office Break Yoga</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMenuInfo({
        id: '1',
        type: 'movement',
        title: 'Yoga with Aidan 🧘',
        img: '/assets/ginny-rose-stewart-UxkcSzRWM2s-unsplash.jpg',
        source: 'https://www.youtube.com/embed/M-8FvC3GD8c',
        description: '14 Min Office Break Yoga',
        duration: '14',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

