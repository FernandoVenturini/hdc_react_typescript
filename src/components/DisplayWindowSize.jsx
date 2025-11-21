// ETAPA 1: Importar a biblioteca React
// Necessária para criar componentes e usar JSX
import React from 'react';

// ETAPA 2: Importar o custom hook useWindowSize
// Este hook foi criado anteriormente e retorna o tamanho atual da janela
import useWindowSize from './hooks/useWindowSize';

// ETAPA 3: Criar o componente funcional DisplayWindowSize
// Este componente irá exibir as dimensões atuais da janela do navegador
const DisplayWindowSize = () => {
  
  // ETAPA 4: Utilizar o custom hook useWindowSize
  // O hook retorna um objeto com propriedades width e height
  // Usamos destructuring para extrair essas propriedades diretamente
  const { width, height } = useWindowSize();

  // ETAPA 5: Retornar o JSX que será renderizado na tela
  return (
    <div>
      {/* ETAPA 6: Adicionar um título para a seção */}
      <h2>Window Size</h2>
      
      {/* ETAPA 7: Exibir a largura atual da janela */}
      {/* {width} é uma expressão JavaScript que será interpolada no JSX */}
      <p>A largura da janela e: {width}</p>
      
      {/* ETAPA 8: Exibir a altura atual da janela */}
      {/* {height} mostra o valor atual da altura em pixels */}
      <p>A altura da janela e: {height}</p>
    </div>
  );
};

// ETAPA 9: Exportar o componente como padrão
// Permite que outros arquivos importem e usem este componente
export default DisplayWindowSize;