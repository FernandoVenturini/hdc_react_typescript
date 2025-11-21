// ETAPA 1: Importar hooks necessários do React
import { useReducer } from 'react';

// ETAPA 2: Definir o estado inicial do componente
// Este objeto representa como o estado se parece quando o componente é montado pela primeira vez
const estadoInicial = { contador: 0 };

// ETAPA 3: Criar a função redutora (reducer)
// Esta função é responsável por atualizar o estado baseado nas ações disparadas
function reducer(state, action) {
    // state: representa o estado atual do componente
    // action: objeto que descreve o que aconteceu (deve ter uma propriedade 'type')
    
    // ETAPA 4: Implementar a lógica de atualização de estado usando switch
    switch (action.type) {
        // Caso para incrementar o contador
        case 'incrementar':
            // Retorna um NOVO objeto de estado (nunca modificar o estado atual diretamente)
            return { contador: state.contador + 1 };
        
        // Caso para decrementar o contador
        case 'decrementar':
            // Retorna um novo estado com o contador decrementado
            return { contador: state.contador - 1 };
        
        // Caso para resetar o contador ao valor inicial
        case 'resetar':
            // Retorna o estado inicial definido anteriormente
            return estadoInicial;
        
        // Caso padrão para ações não reconhecidas
        default:
            // Lança um erro para alertar sobre ação não suportada
            throw new Error("Acao nao suportada!");
    }
}

// ETAPA 5: Criar o componente funcional Contador
const Contador = () => {
    // ETAPA 6: Usar o hook useReducer para gerenciar o estado
    // useReducer retorna um array com duas posições:
    // [0]: state - o estado atual
    // [1]: dispatch - função para disparar ações
    const [state, dispatch] = useReducer(reducer, estadoInicial);

    // ETAPA 7: Retornar o JSX do componente
    return (
        <div>
            {/* ETAPA 8: Exibir o valor atual do contador */}
            {/* state.contador acessa o valor atual do contador no estado */}
            <p>Contagem: {state.contador}</p>
            
            {/* ETAPA 9: Criar botões para disparar ações */}
            {/* Cada botão chama dispatch com uma ação específica */}
            
            {/* Botão para incrementar - dispara ação do tipo 'incrementar' */}
            <button onClick={() => dispatch({ type: "incrementar" })}>
                INCREMENTAR
            </button>
            
            {/* Botão para decrementar - dispara ação do tipo 'decrementar' */}
            <button onClick={() => dispatch({ type: "decrementar" })}>
                DECREMENTAR
            </button>
            
            {/* Botão para resetar - dispara ação do tipo 'resetar' */}
            <button onClick={() => dispatch({ type: "resetar" })}>
                RESETAR
            </button>
        </div>
    );
};

// ETAPA 10: Exportar o componente para uso em outros arquivos
export default Contador;