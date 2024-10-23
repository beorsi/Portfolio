/*--------------------
Vars
--------------------*/
const $carousel = document.querySelector('.CARROSSEL--wrapper');
const $items = document.querySelectorAll('.CARROSSEL--item');
let itemWidth = $items[0].clientWidth;
let wrapWidth = $items.length * itemWidth;

let scrollX = 0; // Current scroll position
let scrollSpeed = 1; // Adjust this value to change the scroll speed

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


// Select all anchor links in the #Secoes
const links = document.querySelectorAll('#Secoes a');

// Add click event listeners to each link
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior

        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Select the target element

        // Scroll to the target element with smooth behavior
        targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scroll behavior
            block: 'start' // Align to the start of the target
        });
    });
});
//clear func

const nome = document.getElementById("nome");
const mail = document.getElementById("mail");
const MSG = document.getElementById("msg");

function limpar(){
  nome.value = "";
  mail.value = "";
  MSG.value = "";
  alert("Mensagem enviada!");
}
