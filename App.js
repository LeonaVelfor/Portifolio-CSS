
import './App.css';
import { useState } from 'react';

function App(props) {
  const [usuario, setUsuario] = useState('')
  return (
    <>
      <h1>{ usuario }</h1>
      <input className="usuarioInput" placeholder="Digite o nome de Usuário" onChange={e => setUsuario[e.target.value]}/>
      <button>Pesquisar</button>
    </>
    
  );
}

export default App;
