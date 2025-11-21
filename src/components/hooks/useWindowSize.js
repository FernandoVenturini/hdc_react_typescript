// ETAPA 1: Importar hooks necessários do React
// useState: para gerenciar o estado do tamanho da janela
// useEffect: para executar efeitos colaterais (adicionar/remover event listeners)
import { useState, useEffect } from 'react';

// ETAPA 2: Criar o custom hook useWindowSize
// Custom hooks permitem reutilizar lógica de estado entre componentes
export default function useWindowSize() {
  
  // ETAPA 3: Definir o estado inicial para armazenar o tamanho da janela
  // useState retorna um array com [valorAtual, funçãoParaAtualizar]
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,  // Largura atual da janela do navegador
    height: window.innerHeight, // Altura atual da janela do navegador
  });

  // ETAPA 4: Usar useEffect para gerenciar side effects
  // Este efeito será executado após a renderização do componente
  useEffect(() => {
    // ETAPA 5: Definir a função que será chamada quando a janela for redimensionada
    // Esta função atualiza o estado com as novas dimensões da janela
    function handleResize() {
      // Atualiza o estado com os valores atuais da janela
      setWindowSize({
        width: window.innerWidth,   // Nova largura da janela
        height: window.innerHeight, // Nova altura da janela
      });
    }

    // ETAPA 6: Adicionar o event listener para o evento 'resize'
    // Quando a janela for redimensionada, a função handleResize será chamada
    window.addEventListener('resize', handleResize);

    // ETAPA 7: Retornar a função de cleanup
    // Esta função será executada quando o componente for desmontado
    // ou quando as dependências do useEffect mudarem
    return () => {
      // Remove o event listener para evitar memory leaks
      window.removeEventListener('resize', handleResize);
    };
  }, []); // ETAPA 8: Array de dependências vazio - efeito executa apenas uma vez

  // ETAPA 9: Retornar o estado atual do tamanho da janela
  // Este valor será disponibilizado para os componentes que usarem este hook
  return windowSize;
}