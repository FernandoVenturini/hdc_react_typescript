import React from 'react'

import { useState } from 'react';

const Counter = () => {
	const [counter, setCounter] = useState(0);

  return (
	<div>
		<p>Voce clicou {counter} vezes no botao!</p>
		
		<button onClick={() => setCounter(counter + 1)}>INCREASE</button>
		<button onClick={() => setCounter(counter - 1)}>DECREASE</button>
	</div>	
  )
}

export default Counter;