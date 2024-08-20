/*
    Given an array containing a list of five images. 
    Create a carousel with attached photos.
    You can also use different images if you want, the important thing is the logic!
*/

// Milestones 1
  //Create the static elements in DOM.

// --- Preparation phase
// Retrieve the interested elements in DOM
const chvronUpElement = document.getElementById('chevron-up')
const chvronDownElement = document.getElementById('chevron-down')
const images = document.querySelectorAll('.carousel img')

// Create the current variable index
let currentActiveIndex = 0;
// Add the active class in current img
const image = images[currentActiveIndex]
image.classList.add('active')

// --- Processing phase