import React from 'react';
import useWindowSize from './hooks/useWindowSize';

const DisplayWindowSize = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Window Size</h2>
      <p>A largura da janela e: {width}</p>
      <p>A altura da janela e: {height}</p>
    </div>
  );
};

export default DisplayWindowSize;
