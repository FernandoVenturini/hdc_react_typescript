import './App.css';
import Welcome from './components/Welcome';
import BomDia from './components/BomDia';
import Pai from './components/Pai';
import Filho from './components/Filho';
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro';


function App() {

  return (
    <>
		<Welcome />
		<BomDia />
		<Pai />
		<Filho />
		<Descricao nome="Bob" email="contato@lvfcode.com" idade={45}/>
		<Cachorro nome="Rex" raca="Pastor Alemao"/>
    </>
  );
};

export default App;
