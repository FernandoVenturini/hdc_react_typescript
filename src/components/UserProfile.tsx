// Importa o hook useEffect do React para lidar com efeitos colaterais
import { useEffect } from 'react';

// Define a interface TypeScript para as props do componente
// Isso garante que o componente receba um objeto 'user' com as propriedades especificadas
interface UserProps {
  user: {
    name: string;    // Nome do usuário (string)
    email: string;   // Email do usuário (string)
    // Outras propriedades do usuário podem ser adicionadas aqui
  };
}

// Define o componente funcional UserProfile usando React.FC (Function Component)
// Recebe as props desestruturadas - extrai diretamente a propriedade 'user'
const UserProfile: React.FC<UserProps> = ({ user }) => {
  // ==========================================================================
  // HOOK useEffect - PRINCIPAL FUNCIONALIDADE DO EXERCÍCIO
  // ==========================================================================
  
  // useEffect é um hook que lida com efeitos colaterais em componentes funcionais
  // Recebe dois parâmetros:
  // 1. Uma função que contém o código do efeito
  // 2. Um array de dependências que determina quando o efeito deve ser executado
  useEffect(() => {
    // INÍCIO DA LÓGICA DO EFEITO
    
    // Verifica se o objeto user existe E se possui a propriedade name
    // Esta verificação previne erros caso user seja undefined ou null
    if (user && user.name) {
      // Se o usuário existe e tem nome, atualiza o título do documento
      // document.title é a propriedade que controla o texto na aba do navegador
      document.title = `Perfil de ${user.name} - Meu App`;
      // Exemplo: Se user.name = "João", o título será "Perfil de João - Meu App"
    } else {
      // Caso o usuário não exista ou não tenha nome, define um título padrão
      document.title = 'Perfil de Usuário - Meu App';
    }

    // ==========================================================================
    // FUNÇÃO DE CLEANUP (OPCIONAL MAS RECOMENDADA)
    // ==========================================================================
    
    // Esta função é executada quando:
    // 1. O componente é desmontado (remove da tela)
    // 2. Antes da próxima execução do efeito (quando as dependências mudam)
    return () => {
      // Reseta o título do documento para um valor padrão
      // Isso é útil para evitar que títulos antigos permaneçam após o componente sair da tela
      document.title = 'Meu App';
    };
    
    // FIM DA LÓGICA DO EFEITO
  }, [user]); // FIM do useEffect - ARRAY DE DEPENDÊNCIAS
  
  // ==========================================================================
  // ARRAY DE DEPENDÊNCIAS EXPLICAÇÃO:
  // [user] significa que este efeito será executado:
  // 1. Após a primeira renderização (montagem do componente)
  // 2. Toda vez que o objeto 'user' for alterado
  // Se o array estivesse vazio [], executaria apenas na montagem
  // Se não houvesse array, executaria em toda renderização
  // ==========================================================================

  // ==========================================================================
  // RENDERIZAÇÃO DO COMPONENTE (JSX)
  // ==========================================================================
  
  // Retorna o JSX que define a interface do usuário
  return (
    // div principal do componente com classe CSS para estilização
    <div className="user-profile">
      {/* Título interno do componente */}
      <h1>Perfil do Usuário</h1>
      
      {/* Renderização condicional: verifica se user existe */}
      {user ? (
        // Se user existe, renderiza as informações do usuário
        <div>
          {/* Parágrafo com o nome do usuário */}
          <p><strong>Nome:</strong> {user.name}</p>
          {/* Parágrafo com o email do usuário */}
          <p><strong>Email:</strong> {user.email}</p>
          {/* Outras informações do usuário podem ser adicionadas aqui */}
        </div>
      ) : (
        // Se user não existe (null/undefined), mostra mensagem de carregamento
        <p>Carregando informações do usuário...</p>
      )}
    </div>
  );
};

// Exporta o componente como padrão para ser importado em outros arquivos
export default UserProfile;

// ==========================================================================
// EXEMPLO DE USO DO COMPONENTE EM OUTRA PARTE DA APLICAÇÃO:
// ==========================================================================

/*
// Importa o componente
import UserProfile from './UserProfile';

// Componente pai que utiliza o UserProfile
const App = () => {
  // Dados mockados do usuário - em uma aplicação real viriam de uma API
  const userData = {
    name: "João Silva",
    email: "joao@example.com"
  };

  // Retorna o JSX do componente pai
  return (
    <div>
      {/* Renderiza o componente UserProfile passando os dados do usuário via prop * /}
      <UserProfile user={userData} />
    </div>
  );
};
*/