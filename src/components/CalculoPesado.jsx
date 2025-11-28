// Importa a biblioteca React e o hook useMemo para criar o componente e usar memoização
import React, { useMemo } from 'react';

// Define um componente funcional chamado CalculoPesado
const CalculoPesado = () => {
  // useMemo: hook que memoiza o resultado de uma operação pesada
  // Ele recebe uma função que retorna o valor a ser memoizado e um array de dependências
  // Neste caso, a função chama operacaoPesada(2) e o array de dependências vazio [] significa que o cálculo será feito apenas uma vez, na montagem do componente
  const resultadoCalculoPesado = useMemo(() => {
    return operacaoPesada(2); // Chama a função operacaoPesada com o argumento 2 e retorna o resultado
  }, []); // Array de dependências vazio - isso é crucial para que o useMemo funcione corretamente

  // Retorna o JSX que será renderizado, mostrando o resultado do cálculo
  return <div>Resultado: {resultadoCalculoPesado}</div>;
};

// Define uma função chamada operacaoPesada que recebe um parâmetro num
// Esta função simula uma operação computacionalmente custosa (aqui é apenas um exemplo simples)
const operacaoPesada = (num) => {
  return num * 1000; // Multiplica o número por 1000 e retorna o resultado
};

// Exporta o componente CalculoPesado como padrão para ser usado em outros arquivos
export default CalculoPesado;