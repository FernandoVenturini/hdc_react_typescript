import React from 'react'

const BotaoEstilizado = () => {

	const estiloDoBotao = {
		backgroundColor: "#333",
		color: "#fff",
		padding: "15px 32px",
		cursor: "pointer",
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("CLICADO!");
	};

  return (
	<button 
		style={estiloDoBotao} 
		onClick={handleSubmit}>
			CLIQUE AQUI
	</button>
  );
}

export default BotaoEstilizado;