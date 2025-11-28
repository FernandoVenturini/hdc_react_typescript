import './App.css';

import Welcome from './components/Welcome';
import BomDia from './components/BomDia';
import Pai from './components/Pai';
import Filho from './components/Filho';
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro';
import Counter from './components/Counter';
import UseInfoForm from './components/UseInfoForm';
import Button from './components/Button';
import PaiFunction from './components/PaiFunction';
import RenderCondicional from './components/RenderCondicional';
import LoginButton from './components/LoginButton';
import Form from './components/Form';
import Warning from './components/Warning';
import NumberList from './components/NumberList';
import BotaoEstilizado from './components/BotaoEstilizado';
import BotaoAzul from './components/BotaoAzul';
import Greeting from './components/Greeting';
import TaskList from './components/TaskList';
import { Component } from 'react';
import ComponentFilho from './contexts/ComponentFilho';
import { MenuContextoProvider } from './contexts/MeuContexto';
import Contador from './components/Contador';
import DisplayWindowSize from './components/DisplayWindowSize';
import Container from './components/Container';
import PerfilDeUsuario from './components/PerfilDeUsuario';
import CalculoPesado from './components/CalculoPesado';
import ContadorCallBack from './components/ContadorCallBack';
import UserProfile from './components/UserProfile';
import Exercicio3 from './components/Exercicio3';

function App() {
  const tasksWithItems = [
    { id: 1, text: 'Estudar React' },
    { id: 2, text: 'Fazer exercicios' },
    { id: 3, text: 'Horas de Codar' },
  ];

  const tasksEmpty = [];

  return (
    <>
      <Welcome />
      <BomDia />
      <Pai />
      <Filho />
      <Descricao nome="Bob" email="contato@lvfcode.com" idade={45} />
      <Cachorro nome="Rex" raca="Pastor Alemao" />
      <Counter />
      <UseInfoForm />
      <Button />
      <PaiFunction />
      <Form />
      <RenderCondicional user="Fernando" />
      <LoginButton loggedIn={false} />
      <LoginButton loggedIn={true} />
      <Warning warning="Temos um warning!" />
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      <BotaoEstilizado />
      <BotaoAzul />
      <Greeting name="Joao!" />
      <TaskList tasks={[1, 'Hora de Codar']} />
      <Contador />
      <DisplayWindowSize />
      <Container>
        {/* Todo este conteúdo vai para o slot {children} */}
        <div>
          <h2>Meu Título</h2>
          <button>Clique aqui</button>
          <span>Texto adicional</span>
        </div>
      </Container>
	  <PerfilDeUsuario usuarioId={1} />
	  <CalculoPesado />
	  <ContadorCallBack />
	  <UserProfile user={user.name}/>
	  <FibCalculator n={10} />
	  <Exercicio3 />

      <hr />

      <h2>Minhas Tarefas</h2>
      <TaskList tasks={tasksWithItems} />

      <h2>Outra Lista</h2>
      <TaskList tasks={tasksEmpty} />

      <MenuContextoProvider>
        <ComponentFilho />
      </MenuContextoProvider>
    </>
  );
}

export default App;
