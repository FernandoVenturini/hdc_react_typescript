import React from "react";
import { useState } from "react";

const UseInfoForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Formulario enviado com sucesso!");
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					value={name} 
					onChange={(e) => setName(e.target.value)} placeholder="Digite o seu nome..." 
				/>
				<input 
					type="email" 
					value={email} 
					onChange={(e) => setEmail(e.target.value)} placeholder="Digite o seu email..." 
				/>
				<button type="submit">Enviar</button>
			</form>
		</>
	);
}

export default UseInfoForm;