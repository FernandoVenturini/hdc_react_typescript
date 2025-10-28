import { useState, createContext } from "react";

export const MeuContexto = createContext();

export const MeuProvider = ({ children }) => {
	// Estado compartilhado
	const [mensagem, setMensagem] = useState("Olá do Contexto!");

	// Valor do contexto
	const valorDoContexto = {
		mensagem,
		setMensagem,
	};

	return (
		<MenuContexto.Provider value={valorDoContexto}>
			{children}
		</MenuContexto.Provider>
	);
};