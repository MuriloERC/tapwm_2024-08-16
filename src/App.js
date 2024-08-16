import logo from './logo.svg';
import './App.css';

const produtos = [{
  nome: "teste",
  preco: 10.00,
},
{
  nome: "teste2",
  preco: 20.00,
},
];

function App() {
  return (
    <div>
     <h1>Lista produtos</h1>
     <ul>
     {produtos.map((p) => 
     (<li>{p.nome} - {p.preco}</li>))
    }
      </ul>
    </div>
  );
}

export default App;
