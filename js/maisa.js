document.addEventListener('DOMContentLoaded', function() {
    // Atualiza a data no footer
    const dataAtual = document.getElementById('data-atual');
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    dataAtual.textContent = new Date().toLocaleDateString('pt-BR', options);
  
    // Navegação entre treinos
    const botoesNav = document.querySelectorAll('.nav-btn');
    const secoesTreino = document.querySelectorAll('.treino-section');
  
    botoesNav.forEach(botao => {
      botao.addEventListener('click', () => {
        // Remove a classe active de todos os botões
        botoesNav.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe active apenas ao botão clicado
        botao.classList.add('active');
        
        // Oculta todas as seções de treino
        secoesTreino.forEach(sec => sec.classList.remove('active'));
        
        // Mostra apenas a seção correspondente
        const treinoId = botao.dataset.treino;
        document.getElementById(treinoId).classList.add('active');
        
        // Rola para o topo da seção
        document.getElementById(treinoId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Toggle dos detalhes dos exercícios
    document.querySelectorAll('.exercicio-header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('ativo');
        
        // Atualiza o ícone
        const icone = header.querySelector('.toggle-detalhes i');
        if (card.classList.contains('ativo')) {
          icone.classList.remove('fa-chevron-down');
          icone.classList.add('fa-chevron-up');
        } else {
          icone.classList.remove('fa-chevron-up');
          icone.classList.add('fa-chevron-down');
        }
      });
    });
  
    // Botões marcar como completo
    document.querySelectorAll('.botao-marcar').forEach(botao => {
      botao.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Alterna o estado do botão
        this.classList.toggle('completo');
        
        if (this.classList.contains('completo')) {
          this.innerHTML = '<i class="fas fa-check"></i> Exercício completo';
        } else {
          this.innerHTML = '<i class="far fa-circle"></i> Marcar como completo';
        }
        
        // Atualiza o progresso geral
        atualizarProgresso();
      });
    });
  
    // Função para atualizar o progresso
    function atualizarProgresso() {
      secoesTreino.forEach(secao => {
        if (secao.classList.contains('active')) {
          const botoesSecao = secao.querySelectorAll('.botao-marcar');
          const completos = secao.querySelectorAll('.botao-marcar.completo').length;
          const total = botoesSecao.length;
          const porcentagem = Math.round((completos / total) * 100);
          
          const barra = secao.querySelector('.progresso-barra');
          const texto = secao.querySelector('.progresso-texto');
          
          barra.style.width = `${porcentagem}%`;
          texto.textContent = `${porcentagem}% completo`;
        }
      });
    }
  
    // Animação de digitação no título
    const titulo = document.querySelector('.header-content h1');
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
  });