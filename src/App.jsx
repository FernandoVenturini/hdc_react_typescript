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
};

export default App;
