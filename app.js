// SLIDER
const gallery = document.querySelector('.gallery');
const slides = gallery.querySelectorAll('.gallery__item');
const arrowLeft = document.querySelector('.gallery__nav--left');
const arrowRight = document.querySelector('.gallery__nav--right');
let slideCount = 1;

class Slider {
  constructor(slider, slides, arrowLeft, arrowRight) {
    this.slider = slider;
    this.slides = slides;
    this.arrowLeft = arrowLeft;
    this.arrowRight = arrowRight;
    this.numOfSlides = this.slides.length;

    this.init();
  }

  init() {
    this.arrowLeft.addEventListener('click', this.slideLeft.bind(this));
    this.arrowRight.addEventListener('click', this.slideRight.bind(this));

    this.resetSlider();
  }

  resetSlider() {
    this.slides.forEach(slide => {
      slide.style.transform = `translateX(-200%)`;
    });
  }

  slideLeft() {
    slideCount--;

    if (slideCount === -2) {
      slideCount = 1;
      this.resetSlider();
      return;
    }

    this.slides.forEach(slide => {
      slide.style.transform = `translateX(-${100 * (slideCount + 1)}%)`;
    });
  }

  slideRight() {
    slideCount++;

    if (slideCount === 5) {
      slideCount = 1;
      this.resetSlider();
      return;
    }

    this.slides.forEach(slide => {
      slide.style.transform = `translateX(-${100 * (slideCount + 1)}%)`;
    });
  }
}

const slider = new Slider(gallery, slides, arrowLeft, arrowRight);

// Hide last slide
// On right click show last slide and hide first slide
// On second right click
