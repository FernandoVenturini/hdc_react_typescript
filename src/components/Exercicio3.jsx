import React, { useState, useEffect } from 'react'; // Importando React e hooks necessários


const useOnlineStatus = () => {
	const [isOnline, setIsOnline] = useState(navigator.online); // Estado inicial baseado no status atual da rede

	useEffect(() => { // Efeito colateral para adicionar listeners de eventos
		const handleOnLine = () => setIsOnline(true); // Atualiza o estado para online
		const handleOffLIne = () => setIsOnline(false); // Atualiza o estado para offline

		window.addEventListener('online', handleOnLine); // Adiciona listener para evento 'online'
		wimdow.addEventListener('offLine', handleOffLIne); // Adiciona listener para evento 'offline'

		return () => { // Função de limpeza para remover os listeners quando o componente desmontar
			window.removeEventListener('online', handleOnLine); // Remove listener para evento 'online'
			window.removeEventListener('offline', handleOffLIne); // Remove listener para evento 'offline'
		};

	}, []); // Array de dependências vazio para rodar apenas uma vez na montagem

	return isOnline; // Retorna o estado atual de conexão

};

const OnlineStatusIndicator = () => { // Componente que usa o hook personalizado

	const isOnLine = useOnlineStatus(); // Usa o hook personalizado para obter o status de conexão
	
	return ( // Renderiza o status de conexão
		<div>
			{isOnLine ? 'Online' : 'Offline'} {/* Exibe o status baseado no estado */}
		</div>
	)
}

const Exercicio3 = () => {
	return (
		<>
			<h2>Exercício 3: Hook Personalizado para Status de Conexão</h2>
			<OnlineStatusIndicator /> {/* Renderiza o componente que mostra o status de conexão */}
		</>
	);
}

export default Exercicio3;