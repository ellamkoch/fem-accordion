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

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS library
- Rsponsive design tested from 320px to desktop screen

### What I learned
This project helped me connect how CSS transitions and JavaScript class toggling work together.
I also practiced breaking the code into a simple modular setup with clear sections:
variables → functions → event listeners → exports.

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


### Continued development
In future projects, I want to:
-Add keyboard navigation (using aria-expanded and Enter/Space keys)
-Experiment with more accessible transitions (prefers-reduced-motion)
-Continue improving my understanding of responsive breakpoints and layout spacing on large screens.

### Useful resources
-[MDN Web Docs – CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) - Helped me understand smooth expanding effects.
-[How to Create a Simple Accordion in JavaScript | Step-by-Step Guide to Build Toggle Sections Easily)](https://www.youtube.com/watch?v=LqpF8fkKOHU) -Explained class toggling and event listeners clearly.
[CSS Media Queries for Beginners (Mobile First)](https://www.youtube.com/watch?v=9vZ7n5ylat0) - explained fundamentals of css media queries with mobile first design approach
W3Schools: How To Create an Accordion - Easy-to-follow base structure that helped shape my JS.
[Accordion Example from W3C web accessibility initiative  ](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/) - to learn how aria works with an accordion
- [W3Schools: How To Create an Accordion](https://www.w3schools.com/howto/howto_js_accordion.asp) - Reference for structure and behavior.

## Author
- Frontend Mentor - [@ellamkoch](https://www.frontendmentor.io/profile/ellamkoch)

## Acknowledgments
Thanks to all the youtube video walkthroughs creators and the reference sites to help explain and learn new functionality.


