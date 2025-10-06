import React from 'react'

const Descricao = (props) => {
  return (
	<div>
		<p>Seu nome e: {props.nome}</p>
		<p>Seu email e: {props.email}</p>
		<p>Sua idade e: {props.idade}</p>
	</div>
  )
}

export default Descricao