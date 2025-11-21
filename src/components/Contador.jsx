import { useReducer } from 'react';

const estadoInicial = { contador : 0 }; // Estado inicial do contador

// Função redutora para gerenciar as ações do contador
function reducer(state, action) { // state: estado atual, action: ação a ser executada

	switch (action.type) { // Tipo da ação
		case 'incrementar': // Ação de incrementar o contador
			return { contador: state.contador + 1 }; // Retorna o novo estado com o contador incrementado
		case 'decrementar':
			return { contador: state.contador - 1 };
		case 'resetar': // Ação de resetar o contador
			return estadoInicial; // Retorna o estado inicial
		default:  // Caso a ação não seja reconhecida
			throw new Error("Acao nao suportada!"); // Lança um erro
	}

}

const Contador = () => {

	const [state, dispatch] = useReducer(reducer, estadoInicial); // useReducer retorna o estado atual e a função dispatch


  return <div>
	<p>Contagem: { state.contador }</p>
	
	<button onClick={() => dispatch({ type: "incrementar"})}>INCREMENTAR</button>
	<button onClick={() => dispatch({ type: "decrementar"})}>DECREMENTAR</button>
	<button onClick={() => dispatch({ type: "resetar"})}>RESETAR</button>
  </div>;
};

export default Contador;
