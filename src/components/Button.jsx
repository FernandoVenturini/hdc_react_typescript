import React from 'react'

const Button = () => {

	const handleClick = () => {
		alert("CLICOU!");
	}

  return (
	<div>
		<button onClick={handleClick}>Clique aqui!</button>
	</div>
  )
}

export default Button