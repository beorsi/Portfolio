/*--------------------
Vars
--------------------*/
const $carousel = document.querySelector('.CARROSSEL--wrapper');
const $items = document.querySelectorAll('.CARROSSEL--item');
let itemWidth = $items[0].clientWidth;
let wrapWidth = $items.length * itemWidth;

let scrollX = 0; // Current scroll position
let scrollSpeed = 0.5; // Adjust this value to change the scroll speed

/*--------------------
Dispose
--------------------*/
const dispose = (scroll) => {
  $carousel.style.transform = `translateX(${scroll}px)`;
};

/*--------------------
Automatic Scroll
--------------------*/
const autoScroll = () => {
  scrollX -= scrollSpeed; // Move to the left
  if (Math.abs(scrollX) >= wrapWidth) {
    scrollX = 0; // Reset to the beginning when reaching the end
  }
  dispose(scrollX);
};

/*--------------------
Render
--------------------*/
const render = () => {
  autoScroll();
  requestAnimationFrame(render);
};
render();

/*--------------------
Resize
--------------------*/
window.addEventListener('resize', () => {
  itemWidth = $items[0].clientWidth;
  wrapWidth = $items.length * itemWidth;
  dispose(scrollX); // Update position on resize
});
