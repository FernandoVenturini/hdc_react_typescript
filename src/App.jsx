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


function App() {

  return (
    <>
		<Welcome />
		<BomDia />
		<Pai />
		<Filho />
		<Descricao nome="Bob" email="contato@lvfcode.com" idade={45}/>
		<Cachorro nome="Rex" raca="Pastor Alemao"/>
		<Counter />
		<UseInfoForm />
		<Button />
		<PaiFunction />
		<Form />
		<RenderCondicional user="Fernando"/>
		<LoginButton loggedIn={false}/>
		<LoginButton loggedIn={true}/>
		<Warning warning="Temos um warning!"/>
		<NumberList numbers={[1, 2, 3, 4, 5]}/>
    </>
  );
};

export default App;
