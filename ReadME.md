**GitHub LINK: https://github.com/Ahmedgamil677/Mini-Code-Snippet-Library-Responsive-Carousel-and-Modal.git**

#### 

#### <i>Responsive Carousel \& Modal Library-:</i>



A lightweight, vanilla JavaScript library for creating responsive image carousels and modal dialogs. Perfect for e-commerce websites and other projects requiring image galleries.



### *Features-:*



* **Responsive Carousel**

  * Automatic sliding with configurable interval
  * Manual navigation with buttons
  * Touch/swipe support for mobile devices
  * Indicator dots for navigation
  * Click on images to open a modal

* **Modal Dialog**

  * Opens when carousel images are clicked
  * Close with the button, overlay click, or Escape key
  * Smooth animations
  * Responsive design
  * 

#### Installation-:

Simply include the three files in your project:

1. `index.html` - Contains the basic structure
2. `styles.css` - All styling for carousel and modal
3. `scripts.js` - JavaScript functionality



## &nbsp;                     \*\*\* ***Usage \*\*\****

##### Basic Carousel Setup-:



1. Add the HTML structure to your page:



```html
<div class="carousel-container">
    <div class="carousel" id="imageCarousel">
        <div class="carousel-track">
            <!-- Slides will be added dynamically -->
        </div>
        
        <button class="carousel-btn carousel-btn--prev" aria-label="Previous image">
            <span>\&#10094;</span>
        </button>
        <button class="carousel-btn carousel-btn--next" aria-label="Next image">
            <span>\&#10095;</span>
        </button>
        
        <div class="carousel-indicators">
            <!-- Indicators will be added dynamically -->
        </div>
    </div>
</div>

2) - Put this at the end of your HTML file. -:

    <!-- Modal -->
    <div class="modal" id="imageModal">
        <div class="modal-content">
            <span class="modal-close">\&times;</span>
            <img class="modal-image" src="" alt="Enlarged view">
            <div class="modal-caption"></div>
        </div>
    </div>

3) - to initiate the carousel photo-path, navigate to scripts.js:

    createSlides() {
        // Use reliable placeholder images that work across all browsers
        const slideData = \[
            {
                image: 'https://picsum.photos/800/400?random=1', =======> PUT THE PHOTO PATH IN HERE
                caption: 'Premium Wireless Headphones - Noise Cancelling'  ====> put caption text in here 
            },
            {
                image: 'https://picsum.photos/800/400?random=2',  =======> PUT THE PHOTO PATH IN HERE
                caption: 'Professional Camera - 4K Video Recording' ====> put caption text in here 
            },
            {
                image: 'https://picsum.photos/800/400?random=3', =======> PUT THE PHOTO PATH IN HERE
                caption: 'Smart Fitness Watch - Heart Rate Monitor'  ====> put caption text in here  
            },
            {
                image: 'https://picsum.photos/800/400?random=4', =======> PUT THE PHOTO PATH IN HERE
                caption: 'Running Shoes - Lightweight \& Comfortable' ====> put caption text in here 
            },
            {
                image: 'https://picsum.photos/800/400?random=5', =======> PUT THE PHOTO PATH IN HERE
                caption: 'Gaming Laptop - High Performance' ====> put caption text in here 
            }
        ];





4\) - To set the settings of the carousel:



document.addEventListener('DOMContentLoaded', () => {

&nbsp;   new Carousel('imageCarousel', {

&nbsp;       autoPlay: true, (tun on/off to play photos on auto.

&nbsp;       autoPlayDelay: 5000  ( set how many seconds for the next photo to play )

&nbsp;   });

});






5\) There is an extra code to change or add more colors to the carousel. 

The file name : Extra carousel background for colors 

copy the code to SCRIPTS.JS and change the colors you want.



&nbsp;               $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$





#### Browser Compatibility-:



This library works in all modern browsers, including:



Chrome 60+



Firefox 55+



Safari 12+



Edge 79+



***--Mobile Responsiveness-:***



&nbsp; The carousel and modal are fully responsive and optimized for:



&nbsp; Desktop (≥ 1024px)



&nbsp; Tablet (768px - 1023px)

&nbsp; 

&nbsp; Mobile (< 768px)



&nbsp; Touch/swipe gestures are supported on mobile devices.



***Customization-:***



***Styling-:***



All styles are contained in styles.css. Key customization points:



Carousel height: Modify .carousel height property



Colors: Update CSS variables and color values



Transitions: Adjust transition timings in CSS



Breakpoints: Modify media queries for different screen sizes



Functionality







