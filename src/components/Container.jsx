// ETAPA 1: Importar a biblioteca React
// Necessária para criar componentes React e usar JSX
import React from 'react';

// ETAPA 2: Criar o componente funcional Container
// Este é um componente de layout que recebe children como prop
// { children } - desestruturação das props para acessar diretamente a prop children
const Container = ({ children }) => {
  
  // ETAPA 3: Retornar a estrutura JSX do componente
  // O componente renderiza uma div container com conteúdo fixo e dinâmico
  return (
    // ETAPA 4: Criar a div principal com classe CSS para estilização
    // className="container" - permite estilizar este elemento via CSS
    <div className="container">
      
      {/* ETAPA 5: Adicionar título fixo do container */}
      {/* Este h1 sempre será renderizado com o texto "TESTANDO" */}
      <h1>TESTANDO</h1>
      
      {/* ETAPA 6: Renderizar o conteúdo dinâmico (children) */}
      {/* {children} - renderiza qualquer conteúdo passado entre as tags do componente */}
      {/* Este é o slot onde conteúdo externo será inserido */}
      <div>{children}</div>
      
      {/* ETAPA 7: Adicionar subtítulo fixo no final */}
      {/* Este parágrafo sempre será renderizado após o conteúdo children */}
      <p>Este e o meu subtitulo 2</p>
    
    </div>
  );
};

// ETAPA 8: Exportar o componente como padrão
// Permite que outros arquivos importem e usem este componente Container
export default Container;