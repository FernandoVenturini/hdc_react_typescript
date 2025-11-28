// ETAPA 1: Importar hooks e bibliotecas necessárias do React
// useState: para gerenciar o estado dos dados do usuário
// useEffect: para executar efeitos colaterais (buscar dados da API)
import React, { useState, useEffect } from 'react';

// ETAPA 2: Criar o componente funcional PerfilDeUsuario
// Este componente recebe usuarioId como prop para buscar dados específicos
// { usuarioId } - desestruturação das props para acessar diretamente o ID do usuário
const PerfilDeUsuario = ({ usuarioId }) => {
  
  // ETAPA 3: Definir o estado para armazenar os dados do usuário
  // useState(null) - inicializa o estado como null (sem dados)
  // usuario: valor atual do estado (dados do usuário ou null)
  // setUsuario: função para atualizar o estado
  const [usuario, setUsuario] = useState(null);

  // ETAPA 4: Usar useEffect para buscar dados da API quando o componente montar ou usuarioId mudar
  // O efeito será executado após a renderização e quando usuarioId mudar
  useEffect(() => {
    // ETAPA 5: Definir função assíncrona para buscar dados do usuário na API
    // async/await permite trabalhar com promises de forma síncrona
    const buscarUsuarios = async () => {
      // ETAPA 6: Fazer requisição HTTP para a API usando fetch
      // await fetch() - espera a resposta da requisição
      // Template string permite inserir o usuarioId dinamicamente na URL
      const resposta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${usuarioId}`
      );
      
      // ETAPA 7: Converter a resposta para JSON
      // await resposta.json() - converte os dados da resposta para objeto JavaScript
      const dadosUsuario = await resposta.json();
      
      // ETAPA 8: Atualizar o estado com os dados recebidos da API
      // setUsuario() - atualiza o estado 'usuario' com os novos dados
      setUsuario(dadosUsuario);
    };

    // ETAPA 9: Verificar se usuarioId existe antes de fazer a requisição
    // Evita fazer requisições desnecessárias se não houver ID
    if (usuarioId) {
      // Se usuarioId existe, executa a função de busca
      buscarUsuarios();
    }
  }, [usuarioId]); // ETAPA 10: Array de dependências - efeito executa quando usuarioId muda

  // ETAPA 11: Retornar o JSX que será renderizado na tela
  return (
    <div>
      {/* ETAPA 12: Renderização condicional baseada no estado 'usuario' */}
      {/* Se usuario existe (não é null), mostra o perfil */}
      {/* Se usuario é null, mostra mensagem de carregamento */}
      {usuario ? (
        // ETAPA 13: Renderizar os dados do usuário quando disponíveis
        <div>
          {/* ETAPA 14: Mostrar nome do usuário */}
          {/* usuario.name - a API retorna 'name' não 'nome' (correção necessária) */}
          <h2>Perfil de {usuario.name}</h2>
          
          {/* ETAPA 15: Mostrar email do usuário */}
          <p>Email: {usuario.email}</p>
          
          {/* ETAPA 16: Mostrar idade do usuário */}
          {/* CORREÇÃO: A API não retorna idade, precisaríamos calcular ou usar outro campo */}
          <p>Telefone: {usuario.phone}</p>
        </div>
      ) : (
        // ETAPA 17: Mostrar mensagem de carregamento enquanto dados não estão disponíveis
        <p>Carregando perfil do usuário...</p>
      )}
    </div>
  );
};

// ETAPA 18: Exportar o componente como padrão
// Permite que outros arquivos importem e usem este componente
export default PerfilDeUsuario;