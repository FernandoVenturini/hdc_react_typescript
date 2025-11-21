import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container">
      <h1>TESTANDO</h1>
      <div>{children}</div>
      <p>Este e o meu subtitulo 2</p>
    </div>
  );
};

export default Container;
