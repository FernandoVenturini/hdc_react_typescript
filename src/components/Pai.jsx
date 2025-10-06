import React from 'react'
import Filho from './Filho'

const Pai = () => {
  return (
	<div>
		<p>Componente Pai</p>
		<Filho />
	</div>
  )
}

export default Pai