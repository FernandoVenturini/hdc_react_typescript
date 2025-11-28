// 1. Importa React, useState (para estado) e useCallback (para memoização de funções)
import React, { useState, useCallback } from 'react';

// 2. Define um componente Botao que é memoizado para evitar re-renderizações desnecessárias
//    React.memo compara as props e só re-renderiza se mudarem
// 3. A função Botao recebe as props onClick e children
// 4. Note: use parênteses para desestruturar as props em uma arrow function com corpo implícito
const Botao = React.memo(({ onClick, children }) => {
  // 5. Log para verificar quando o Botão é renderizado
  console.log('Renderizou o Botao:', children);
  // 6. Retorna um botão com a função onClick e o children (texto do botão)
  return <button onClick={onClick}>{children}</button>;
});

// 7. Define o componente principal ContadorCallBack
const ContadorCallBack = () => {
  // 8. Define o estado 'contador' e a função 'setContador' com valor inicial 0
  const [contador, setContador] = useState(0);

  // 9. useCallback para memoizar a função incrementar
  //    A função incrementar é memoizada e só será recriada se as dependências mudarem
  //    Neste caso, o array de dependências está vazio, então a função é criada uma vez
  const incrementar = useCallback(() => {
    // 10. Usa a forma funcional de setContador para evitar dependência do estado atual
    setContador((contadorAnterior) => contadorAnterior + 1);
  }, []); // 11. Array de dependências vazio: a função não depende de nenhum valor externo

  // 12. Retorna o JSX do componente
  return (
    <div>
      {/* 13. Exibe o valor do contador */}
      <p>Contagem: {contador}</p>
      {/* 14. Renderiza o componente Botao passando a função incrementar e o children */}
      <Botao onClick={incrementar}>Incrementar</Botao>
    </div>
  );
};

// 15. Exporta o componente ContadorCallBack como padrão
export default ContadorCallBack;