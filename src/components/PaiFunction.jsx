import React from 'react'
import FilhoFuncao from './FilhoFuncao';

const PaiFunction = () => {

	const handleChildClick = () => {
		alert("CLICOU NO BOTAO DO ELEMENTO FILHO!");
	}

  return (
	<div>
		<FilhoFuncao onChildClick={handleChildClick}/>
	</div>
  )
}

export default PaiFunction