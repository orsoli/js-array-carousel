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
images[currentActiveIndex].classList.add('active')

// --- Processing phase
// Create click events for elements chevron up/down

// Chevron-down
chvronDownElement.addEventListener('click', function(){
    //Remove the current active class in img element
    images[currentActiveIndex].classList.remove('active')
    //Increment currentActiveIndex to go back in next image 
    currentActiveIndex++;
    // Add the 'active'class in the previous img element
    images[currentActiveIndex].classList.add('active')
})
// Chevron-up
chvronUpElement.addEventListener('click', function(){
    //Remove the current active class in img element
    images[currentActiveIndex].classList.remove('active')
    //Decrement currentActiveIndex to go back in previous image 
    currentActiveIndex--;
    // Add the 'active'class in the previous img element
    images[currentActiveIndex].classList.add('active')
})