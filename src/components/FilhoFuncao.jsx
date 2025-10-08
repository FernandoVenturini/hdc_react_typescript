import React from 'react'

const FilhoFuncao = ({ onChildClick }) => {
	
  return (
	<div>
		<button onClick={onChildClick}>BOTAO FILHO</button>
	</div>
  )
}

export default FilhoFuncao