const $menu = document.querySelector('.CARROSSEL--wrapper');
const $items = document.querySelectorAll('.CARROSSEL--item');

// Clone the first three and last three items for infinite looping effect
const cloneCount = 3;
for (let i = 0; i < cloneCount; i++) {
    const firstItem = $items[i].cloneNode(true);
    const lastItem = $items[$items.length - 1 - i].cloneNode(true);
    $menu.appendChild(firstItem);
    $menu.insertBefore(lastItem, $items[0]);
}

let scrollX = 0;
let itemWidth = $items[0].clientWidth; // Width of a single item
const autoScrollSpeed = 2.5; // Adjust scroll speed (higher value = faster)

// Disable transition for jump
const jumpToItem = (position) => {
    $menu.classList.remove('smooth-transition'); // Remove smooth transition for instant jump
    $menu.style.transform = `translateX(-${position}px)`;
};

// Initialize the carousel position
const initCarousel = () => {
    scrollX = itemWidth * cloneCount; // Start at the first real item
    jumpToItem(scrollX); // Initial position without transition
};

// Update the carousel position with smooth transition
const updateCarousel = () => {
    $menu.classList.add('smooth-transition'); // Add smooth transition for regular updates
    $menu.style.transform = `translateX(-${scrollX}px)`;

    // Infinite scroll handling
    if (scrollX >= $menu.scrollWidth - itemWidth * (cloneCount + 1)) {
        scrollX = itemWidth * cloneCount; // Jump to the first real item after the cloned ones
        jumpToItem(scrollX); // Use instant jump
    } else if (scrollX <= itemWidth) {
        scrollX = $menu.scrollWidth - itemWidth * (cloneCount + 1); // Jump to the last real item before the cloned ones
        jumpToItem(scrollX); // Use instant jump
    }
};

// Automatic scrolling
const autoScroll = () => {
    scrollX += autoScrollSpeed; // Move to the right
    updateCarousel();
};

// Recalculate itemWidth on resize
window.addEventListener('resize', () => {
    itemWidth = $items[0].clientWidth;
    updateCarousel();
});

// Initialize carousel on page load
initCarousel();

// Start automatic scrolling
setInterval(autoScroll, 30); // Adjust interval speed as needed


// Smooth scrolling for section links
const smoothScrollLinks = document.querySelectorAll('aside a');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section
        const offsetTop = targetSection.offsetTop; // Get the offset top position of the target section

        // Scroll to the target section smoothly
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // This enables the smooth scrolling behavior
        });
    });
});
