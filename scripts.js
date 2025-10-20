// Carousel functionality
class Carousel {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId); //Get the carousel container by id
        this.track = this.container.querySelector('.carousel-track'); // get the element that hold the slids
        this.slides = []; // array for slides 
        this.currentIndex = 0; // slides index 
        this.autoPlayInterval = null; // For autoplay mode

        // Default options
        this.options = {
            autoPlay: true,
            autoPlayDelay: 5000, // 5 seconds 
            ...options
        };

        this.init();
    }

    init() {
        // Create slides from data or use existing ones
        this.createSlides(); // function 

        // Set up navigation
        this.setupNavigation(); //previous and next buttons 

        // Set up indicators
        this.setupIndicators(); 

        // Start autoplay if enabled
        if (this.options.autoPlay) {
            this.startAutoPlay(); 
        }

        // Update carousel to show first slide
        this.updateCarousel(); 
    }

    createSlides() {
        // Use reliable placeholder images that work across all browsers
        const slideData = [
            {
                image: '  https://picsum.photos/800/400?random=1 ', // put the path of the photo here 
                caption: 'Premium Wireless Headphones - Noise Cancelling'
            },
            {
                image: 'https://picsum.photos/800/400?random=2', // put the path of the photo here
                caption: 'Professional Camera - 4K Video Recording'
            },
            {
                image: 'https://picsum.photos/800/400?random=3', // put the path of the photo here
                caption: 'Smart Fitness Watch - Heart Rate Monitor'
            },
            {
                image: 'https://picsum.photos/800/400?random=4', // put the path of the photo here
                caption: 'Running Shoes - Lightweight & Comfortable'
            },
            {
                image: 'https://picsum.photos/800/400?random=5', // put the path of the photo here
                caption: 'Gaming Laptop - High Performance'
            }
        ];

        // Clear existing slides
        this.track.innerHTML = '';

        // Create slides
        slideData.forEach((item, index) => {
            const slide = document.createElement('div'); //createa div element for each slide 
            slide.className = 'carousel-slide';

            // Create image with error handling
            const img = document.createElement('img');
            img.src = item.image; 
            img.alt = item.caption;
            img.className = 'carousel-image';
            img.setAttribute('data-index', index);

            // Add error handling for images
            img.onerror = function () {
                // Fallback to a solid color if image fails to load
                this.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                    `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="${this.getRandomColor()}"/>
                        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="white">${item.caption}</text>
                    </svg>`
                )}`;
            }; //end of error handling 

            slide.appendChild(img); // append image to slide

            const caption = document.createElement('div'); //create caption div
            caption.className = 'carousel-caption'; //add class name 
            caption.textContent = item.caption; //set caption text
            slide.appendChild(caption); //append caption to slide 

            this.track.appendChild(slide); //append slide to track 
            this.slides.push(slide); //add slide to slides array 
        });

        // Add click event to images for modal
        this.track.querySelectorAll('.carousel-image').forEach(img => {
            img.addEventListener('click', () => {
                const index = parseInt(img.getAttribute('data-index')); // get the index of the clicked image 
                this.openModal(index);
            });
        });
    }

    getRandomColor() {
        const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setupNavigation() {
        const prevBtn = this.container.querySelector('.carousel-btn--prev');
        const nextBtn = this.container.querySelector('.carousel-btn--next');

        prevBtn.addEventListener('click', () => {
            this.prevSlide();
            this.resetAutoPlay();
        });

        nextBtn.addEventListener('click', () => {
            this.nextSlide();
            this.resetAutoPlay();
        });

        // Touch events for mobile
        let startX = 0;
        let endX = 0;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });

        this.handleSwipe = () => {
            const diff = startX - endX;
            const swipeThreshold = 50;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
                this.resetAutoPlay();
            }
        };
    }

    setupIndicators() {
        const indicatorsContainer = this.container.querySelector('.carousel-indicators');
        indicatorsContainer.innerHTML = '';

        this.slides.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);

            indicator.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoPlay();
            });

            indicatorsContainer.appendChild(indicator);
        });
    }

    updateCarousel() {
        // Move track to show current slide
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;

        // Update active indicator
        const indicators = this.container.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateCarousel();
    }

    prevSlide() {
        this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
        this.updateCarousel();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.options.autoPlayDelay);
    }

    resetAutoPlay() {
        if (this.options.autoPlay) {
            clearInterval(this.autoPlayInterval);
            this.startAutoPlay();
        }
    }

    openModal(index) {
        const modal = new Modal();
        const img = this.slides[index].querySelector('img');
        modal.open(img.src, img.alt);
    }
}

// Modal functionality
class Modal {
    constructor() {
        this.modal = document.getElementById('imageModal');
        this.modalImage = this.modal.querySelector('.modal-image');
        this.modalCaption = this.modal.querySelector('.modal-caption');
        this.closeBtn = this.modal.querySelector('.modal-close');

        this.init();
    }

    init() {
        // Close modal when clicking close button
        this.closeBtn.addEventListener('click', () => {
            this.close();
        });

        // Close modal when clicking outside the image
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('show')) {
                this.close();
            }
        });
    }

    open(imageSrc, caption) {
        this.modalImage.src = imageSrc;
        this.modalImage.alt = caption;
        this.modalCaption.textContent = caption;

        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    close() {
        this.modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling

        // Reset after transition
        setTimeout(() => {
            this.modalImage.src = '';
            this.modalCaption.textContent = '';
        }, 300);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Carousel('imageCarousel', {
        autoPlay: true, // Enable autoplay
        autoPlayDelay: 5000 //5 seconds
    });
});