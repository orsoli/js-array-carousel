/*
    Given an array containing a list of five images. 
    Create a carousel with attached photos.
    You can also use different images if you want, the important thing is the logic!
*/

// Milestone 1
  //Create the static elements in DOM.

// Milestone 2
    // Remove static elements from DOM and create the dinamically process by JS

// --- Preparation phase
// Create image sources array
const sources = ['./img/01.webp','./img/02.webp','./img/03.webp','./img/04.webp','./img/05.webp']
// Retrieve the interested elements in DOM
const chvronUpElement = document.getElementById('chevron-up')
const chvronDownElement = document.getElementById('chevron-down')
const carouselItemElement = document.getElementById('carousel-item')


// --- Processing phase

// Create img element for each source in array sources
for(let i = 0; i < sources.length; i++){
    const src = sources[i] // Save each sources
    const image = document.createElement('img') // Create Img element
    image.src = src // Add the src attribute with 'src' value for img element already created
    image.alt = `image-${i + 1}` // add alt attribute for img element
    carouselItemElement.appendChild(image) // imageElement append like child of carouselItemElement
}

// Retrieve this image element already created from DOM to add the active class
const imageElement = document.querySelectorAll('.carousel img')
// Create the current variable index
let currentActiveIndex = 0;
imageElement[currentActiveIndex].classList.add('active')

// Create click events for elements chevron up/down
// Chevron-down
chvronDownElement.addEventListener('click', function(){
    //Remove the current active class in img element
    imageElement[currentActiveIndex].classList.remove('active')
    //Increment currentActiveIndex to go back in next image 
    currentActiveIndex++;
    // Add the 'active'class in the previous img element
    imageElement[currentActiveIndex].classList.add('active')
})
// Chevron-up
chvronUpElement.addEventListener('click', function(){
    //Remove the current active class in img element
    imageElement[currentActiveIndex].classList.remove('active')
    //Decrement currentActiveIndex to go back in previous image 
    currentActiveIndex--;
    // Add the 'active'class in the previous img element
    imageElement[currentActiveIndex].classList.add('active')
})