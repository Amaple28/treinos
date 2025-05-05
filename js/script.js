// Animação de digitação no título
const titulo = document.querySelector('header h1');
const textoOriginal = titulo.textContent;
titulo.textContent = '';

let i = 0;
const typing = setInterval(() => {
  if (i < textoOriginal.length) {
    titulo.textContent += textoOriginal.charAt(i);
    i++;
  } else {
    clearInterval(typing);
  }
}, 100);

// Efeito hover nos cards
document.querySelectorAll('.card-atleta').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const icon = card.querySelector('.icone-atleta i');
    icon.classList.add('fa-bounce');
  });
  
  card.addEventListener('mouseleave', () => {
    const icon = card.querySelector('.icone-atleta i');
    icon.classList.remove('fa-bounce');
  });
});