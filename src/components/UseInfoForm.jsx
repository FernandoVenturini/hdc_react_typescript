import React from "react";
import { useState } from "react";

const UseInfoForm = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();
		alert("Email enviado com sucesso!");
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={name} 
					placeholder="Digite seu nome..."
					onChange={(e) => setName(e.target.value)}
				/>

				<input
					type="email" 
					name="email" 
					value={email}
					placeholder="Digite seu email..."
					onChange={(e) => setEmail(e.target.value)}
				/>

				<button type="submit">ENVIAR</button>
			</form>
		</>
	);
}

export default UseInfoForm;