# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/Screenshot%20desktop.png)
![](./assets/images/Screenshot%20mobile.png)


### Links

- [Solution URL: ](https://github.com/ellamkoch/fem-accordion)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS library
- Rsponsive design tested from 320px to desktop screen

### What I learned
This project really helped me connect how CSS transitions and JavaScript class toggling work together to create a smooth accordion effect. I did a mobile first approach, similar to what we did in the Mortgage Calculator challenge. At first, I ran into a few issues — the icons were swapping correctly, but the answers weren’t opening. After some digging, I realized my CSS selector didn’t actually match the structure of my HTML. The answer elements weren’t direct siblings of the button I was toggling, so the rule never triggered. Switching to toggle the .active class on the parent container instead of the button fixed it instantly.

Then I noticed the answer text still faintly showed even when “closed.” That one turned out to be padding — the box had max-height: 0 but still had space inside, so the text peeked out. Removing padding while hidden and restoring it on open made the transition look clean.

The icon visibility also tripped me up. I mistakenly used a comma selector that hid the entire button instead of just the image inside it. Once I changed to descendant selectors (like .faq-toggle-btn.active .faq-close__img), everything behaved the way it should. Removing the inline display: none on the minus icons in the HTML also helped the CSS fully control visibility.

Later, when I started styling for desktop, the background only stretched halfway across the screen. I learned that my .main container’s max-width was restricting it, so I switched it to width: 100% and adjusted margins. That small fix pulled the background full width and kept the card nicely centered.

Through the process, resources like the W3Schools Accordion tutorial and the YouTube “Simple Accordion in JavaScript” video really helped me visualize how toggling works, while the CSS Media Queries for Beginners tutorial gave me clarity on responsive adjustments. MDN’s CSS transitions guide was also key for understanding why certain properties animate smoothly and others don’t.

By the end, I had a much deeper understanding of how to control state visually and logically — not just making something “work,” but making it work cleanly.

Some Code snippets that I'm proud of in this one.
JS snippet:
const questions = document.querySelectorAll('.faq-item');

questions.forEach((item) => {
  item.addEventListener('click', () => {
    questions.forEach((q) => {
      if (q !== item) q.classList.remove('active'); // removes active from others
    });
    item.classList.toggle('active'); // toggles active on clicked item
  });
});

This simple CSS logic makes it all work visually:
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

.faq-item.active + .faq-answer {
  max-height: 200px;
  padding: 0 1rem 1rem;
}

#### After Presentation Updates
Learned during the presentation with Ulises that hover styles are not for mobile. Decided I would take a second look at the styles of the page to try and update them a lil bit more so it was closer to the design from Front End Mentor. Moved the hover to the desktop styles, removed some padding and margins in some areas such as the hr to make the question heading more aligned in the cells. Tried to put in comments for the ones I adjusted after the fact. Also made the font size a lil bigger on the faq__title a lil bigger for the mobile side.

### Continued development
In future projects, I want to:
-Add keyboard navigation (using aria-expanded and Enter/Space keys)
-Experiment with more accessible transitions
-Continue improving my understanding of responsive breakpoints and layout spacing on large screens.

### Useful resources
-[MDN Web Docs – CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) - Helped me understand smooth expanding effects.
-[How to Create a Simple Accordion in JavaScript | Step-by-Step Guide to Build Toggle Sections Easily)](https://www.youtube.com/watch?v=LqpF8fkKOHU) -Explained class toggling and event listeners clearly.
-[CSS Media Queries for Beginners (Mobile First)](https://www.youtube.com/watch?v=9vZ7n5ylat0) - explained fundamentals of css media queries with mobile first design approach
-[W3Schools: How To Create an Accordion](https://www.w3schools.com/howto/howto_js_accordion.asp) - Easy-to-follow base structure that helped shape my JS.
-[Accordion Example from W3C web accessibility initiative](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/) - to learn how aria works with an accordion


## Author
- Frontend Mentor - [@ellamkoch](https://www.frontendmentor.io/profile/ellamkoch)

## Acknowledgments
Thanks to all the youtube video walkthroughs creators and the reference sites to help explain and learn new functionality. And a big thanks to Ulises for being so patient with us as we code last minute and providing great feedback. I'm sure you could tell I was nervous to start, but once you get me talking its a bit easier for me to explain what's going on with the code and page. 
