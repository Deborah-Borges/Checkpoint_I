import { useState } from 'react'
import './App.css'
import Card from './componentes/Card'

function App() {

  const [coresLista, setCoresLista] = useState([]);
  const [corNome, setCorNome] = useState('');
  const [corCodigo, setCorCodigo] = useState('');

  const handleCoresSubmit = (event) => {
    event.preventDefault();
    const novaCor = {nome: corNome, codigo: corCodigo};
    setCoresLista( (state) => [...state, novaCor] );

  }

  return (
    <main className="App">
     
     <form className="form" onSubmit={handleCoresSubmit}>
      <h3> Adicionar nova Cor </h3>
      <div className="form_input">
        
        <div className="input"> 
          <label > Nome </label>
          <input 
            type="text" 
            name="corNome" 
            id="corNome" 
            placeholder="Digite o nome da cor"
            onChange={(event) => setCorNome(event.target.value)}
            value={corNome}
          />
        </div>

        <div className="input">
          <label> Cor </label>
          <input 
            type="text" 
            name="corCodigo" 
            id="corCodigo" 
            placeholder="Digite o código da cor"
            onChange={(event) => setCorCodigo(event.target.value)}
            value={corCodigo}
          />
        </div>

      </div>

      <div className="form_button">
        <button type="submit" 
        disabled={corNome === '' && corCodigo === ''}>
          Adicionar
        </button>
      </div>


     </form>

     <h1>Cores Favoritas</h1>

      <section id="card" className="listaCores">

        <h3> Lista de Cores </h3>

        <div className="listaContent">
          
          <ul>
              { coresLista && (
                coresLista.map((cores, index) => {
                  return (
                    <Card key={index} cores={cores} />
                  )
                })
              )}
          </ul>

        </div>

      </section>

    </main>
  )
}

export default App