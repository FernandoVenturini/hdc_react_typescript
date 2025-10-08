import React from 'react'

import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

  return (
	<div>
		<p>Counter: {count}</p>
		<button onClick={() => setCount(count - 1)}>DECREASE</button>
		<button onClick={() => setCount(count + 1)}>INCREASE</button>
	</div>	
  )
}

export default Counter