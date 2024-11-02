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

function limpar() {
  nome.value = "";
  mail.value = "";
  MSG.value = "";
  alert("Mensagem enviada!");
}





// Função para definir o tema com base no armazenamento da sessão
function setThemeFromSession() {
  const savedTheme = sessionStorage.getItem('theme');
  const lampImage = document.getElementById('LampC');
  const themeStylesheet = document.getElementById('themeStylesheet');

  if (savedTheme) {
      themeStylesheet.href = savedTheme;
      lampImage.src = savedTheme === 'white.css' ? 'Img/lampAlt.png' : 'Img/lampC.png';
      updateIconImages(savedTheme === 'white.css');
  }
}

function troca() {
  const lampImage = document.getElementById('LampC');
  const AltB = document.getElementById('barra');
  const themeStylesheet = document.getElementById('themeStylesheet');

  console.log('Initial image src:', lampImage.src);

  if (lampImage.src.includes('Img/lampC.png')) {
      lampImage.src = 'Img/lampAlt.png'; // Change to alternative lamp image
      AltB.src = 'Img/alt.png';
      themeStylesheet.href = 'white.css'; // Apply white theme
      sessionStorage.setItem('theme', 'white.css'); // Store theme
      updateIconImages(true); // Update icons for white theme
  } else {
      lampImage.src = 'Img/lampC.png'; // Revert to original lamp image
      themeStylesheet.href = 'dark.css'; // Apply dark theme
      AltB.src = 'Img/list_check_fill.png';
      sessionStorage.setItem('theme', 'dark.css'); // Store theme
      updateIconImages(false); // Update icons for dark theme
  }

  console.log('Updated image src:', lampImage.src);
  console.log('Updated theme:', themeStylesheet.href);
}


// Função para atualizar as imagens dos ícones
function updateIconImages(isWhiteTheme) {
  const terminalImage = document.getElementById('Term');
  const codeImage = document.getElementById('Cod');
  const bracketImage = document.getElementById('Brack');

  if (isWhiteTheme) {
      terminalImage.src = 'Img/terminalAlt.png';
      codeImage.src = 'Img/codeAlt.png';
      bracketImage.src = 'Img/brackAlt.png';
  } else {
      terminalImage.src = 'Img/Terminal.png';
      codeImage.src = 'Img/Code.png';
      bracketImage.src = 'Img/Bracket.png';
  }
}

// Definir o tema quando a página carregar
window.onload = setThemeFromSession;



function resizeSVG() {
  const svg = document.getElementById('Desgraca');
  const maxWidth = 550;

  if (window.innerWidth <= maxWidth) {
      svg.setAttribute('width', '232');  // Adjusted width
      svg.setAttribute('height', '304'); // Adjusted height
  } else {
      svg.setAttribute('width', '464');  // Original width
      svg.setAttribute('height', '608'); // Original height
  }
}

// Initial check
resizeSVG();

// Event listener for window resize
window.addEventListener('resize', resizeSVG);

// Toggle sidebar on click
document.getElementById("barra").addEventListener("click", function() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden"); // Toggles the 'hidden' class
});

// Auto-hide sidebar on scroll for smaller screens
window.addEventListener("scroll", function() {
  const sidebar = document.getElementById("sidebar");
  if (window.innerWidth <= 550 && !sidebar.classList.contains("hidden")) {
      sidebar.classList.add("hidden"); // Hide if visible on scroll
  }
});
