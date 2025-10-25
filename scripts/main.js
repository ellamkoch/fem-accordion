//This file toggles the answer and keeps one open at a time
//Variables
const answers = document.querySelectorAll('.faq-item');//query selector all looks in every answer block

// loops through each FAQ item
answers.forEach((item) => {
  item.addEventListener('click', () => { // adds a click event for the div class .faq-item
    // close all others
    answers.forEach((a) => {// loops through them all again
      if (a !== item) a.classList.remove('active');// removes the active marker if its not active
    }); //!== means not equal to the item that was clicked

    // toggle the clicked one so its active
    item.classList.toggle('active');
  });
});
