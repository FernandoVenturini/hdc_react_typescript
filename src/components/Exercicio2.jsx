// Importa React e os hooks useEffect e useMemo da biblioteca React
// useEffect: para efeitos colaterais
// useMemo: para memorização de valores computados (foco do exercício)
import React, { useEffect, useMemo } from 'react';

// ==========================================================================
// COMPONENTE PRINCIPAL Exercicio2
// ==========================================================================
const Exercicio2 = () => {
  // ==========================================================================
  // FUNÇÃO FIBONACCI - CÁLCULO PESADO (RECURSIVO)
  // ==========================================================================
  
  // Define uma função recursiva para calcular a sequência de Fibonacci
  // Esta implementação é intencionalmente ineficiente (O(2^n)) para demonstrar a necessidade do useMemo
  const fibonacci = (num) => {
    // Caso base: se o número for 0 ou 1, retorna o próprio número
    // Fibonacci(0) = 0, Fibonacci(1) = 1
    if (num <= 1) return num;
    
    // Caso recursivo: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
    // Esta chamada recursiva dupla causa recálculos massivos e redundantes
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  // ==========================================================================
  // COMPONENTE INTERNO FibCalculator
  // ==========================================================================
  
  // Define um componente interno que recebe a prop 'n' (número para calcular Fibonacci)
  const FibCalculator = ({ n }) => {
    // ==========================================================================
    // HOOK useMemo - SOLUÇÃO PARA O PROBLEMA DE PERFORMANCE
    // ==========================================================================
    
    // useMemo memoriza (cache) o resultado do cálculo pesado
    // Recebe dois parâmetros:
    // 1. Função que retorna o valor a ser memorizado
    // 2. Array de dependências - quando mudam, o cálculo é refeito
    const fibResult = useMemo(
      // Função que executa o cálculo pesado - só roda quando necessário
      () => {
        console.log(`Calculando Fibonacci para n=${n}`); // Debug: mostra quando o cálculo acontece
        return fibonacci(n); // Chama a função Fibonacci com o valor n
      },
      [n] // Array de dependências: só recalcula quando 'n' muda
    );
    
    // ==========================================================================
    // RENDERIZAÇÃO DO COMPONENTE FibCalculator
    // ==========================================================================
    
    // Retorna o JSX mostrando o número de entrada e o resultado calculado
    return (
      <div>
        {/* Exibe o número de entrada e o resultado do Fibonacci */}
        Fibonacci de {n} é {fibResult}
      </div>
    );
  };

  // ==========================================================================
  // RENDERIZAÇÃO DO COMPONENTE PRINCIPAL Exercicio2
  // ==========================================================================
  
  return (
    <div>
      {/* Título do exercício */}
      <h1>Exercicio 2: useMemo para Cálculos Pesados</h1>
      
      {/* 
        Renderiza múltiplas instâncias do FibCalculator com diferentes valores 
        Isso demonstra como o useMemo previne recálculos desnecessários
      */}
      <FibCalculator n={5} />   {/* Calcula Fibonacci(5) */}
      <FibCalculator n={10} />  {/* Calcula Fibonacci(10) */}
      <FibCalculator n={5} />   {/* NÃO recalcula - usa resultado memoizado */}
      <FibCalculator n={8} />   {/* Calcula Fibonacci(8) */}
    </div>
  );
};

// Exporta o componente para uso em outros arquivos
export default Exercicio2;

// ==========================================================================
// EXPLICAÇÃO DETALHADA DO USEMEMO:
// ==========================================================================

/*
PROBLEMA SEM useMemo:
- Sem useMemo, a função fibonacci seria chamada em TODA renderização
- Mesmo que o valor de 'n' não mude, o cálculo seria refeito
- Para números grandes, isso causaria travamentos na interface

SOLUÇÃO COM useMemo:
- useMemo armazena em cache o resultado do cálculo
- Só recalcula quando as dependências (n) mudam
- Se 'n' for o mesmo entre renderizações, retorna o valor cacheado

BENEFÍCIOS:
- Performance: Evita cálculos desnecessários
- Responsividade: Mantém a interface fluida
- Eficiência: Reduz processamento redundante

EXEMPLO PRÁTICO:
Suponha que o componente renderize 4 vezes com os mesmos valores:
- Sem useMemo: 4 cálculos completos do Fibonacci
- Com useMemo: Apenas 2 cálculos (um para n=5, outro para n=10)
*/

// ==========================================================================
// VERSÃO ALTERNATIVA COM MAIS DETALHES:
// ==========================================================================

/*
const Exercicio2Otimizado = () => {
  // Versão ligeiramente melhorada da função fibonacci
  // Mas ainda é ineficiente para demonstrar o useMemo
  const fibonacci = (num) => {
    console.log(`Executando fibonacci(${num})`); // Log para debugging
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  const FibCalculator = ({ n, id }) => {
    const fibResult = useMemo(() => {
      console.log(`useMemo ativado para n=${n}`);
      return fibonacci(n);
    }, [n]); // ← A MAGIA ACONTECE AQUI: só recalcula quando n muda

    return (
      <div style={{ border: '1px solid #ccc', margin: '5px', padding: '10px' }}>
        <h3>Calculadora #{id}</h3>
        <p>Entrada: {n}</p>
        <p>Resultado: {fibResult}</p>
        <p>Tempo: {new Date().toLocaleTimeString()}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Demonstração useMemo</h1>
      <FibCalculator n={5} id="A" />
      <FibCalculator n={5} id="B" /> {/* Não recalcula - usa cache */}
      <FibCalculator n={8} id="C" />
    </div>
  );
};
*/

// ==========================================================================
// QUANDO USAR useMemo:
// ==========================================================================

/*
1. CÁLCULOS COMPLEXOS: Operações matemáticas pesadas, processamento de dados
2. OPERAÇÕES EM LISTAS: Filtragem, ordenação, transformação de grandes arrays
3. CRIAÇÃO DE OBJETOS: Quando a criação é custosa e o objeto é reutilizado
4. FUNÇÕES CUSTOSAS: Qualquer operação que cause lag na interface

QUANDO NÃO USAR:
1. Cálculos simples e rápidos
2. Valores primitivos simples
3. Quando o overhead do useMemo é maior que o benefício
*/