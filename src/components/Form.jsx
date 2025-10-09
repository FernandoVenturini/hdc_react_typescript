import {useState} from "react";

const Form = () => {
	const [value, setValue] = useState("");

	const handleSubmit = (event) => {
		// Manipular dados
		// Validacao
		// Envio ao servidor pela API
		// Loading
		// Chamada da funcao de mensagens de erro ou sucesso.
		event.preventDefault();
		alert("Formulario enviado com sucesso!");
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				type="text" 
				value={value} 
				placeholder="Preencha o campo..." 
				onChange={(e) => setValue(e.target.value)}
			/>

			<button type="submit">Enviar</button>
		</form>
	);
}

export default Form;