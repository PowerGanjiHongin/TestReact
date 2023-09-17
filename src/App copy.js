import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const test = "Travle";
  const[list, setlist] = useState([
    "Sondo central park",
    "paju probangs / heeri twoun",
    "chunchun soyang river sky warlks"
  ]);
  const [count, setcount] = useState(0);
  return (

    <div className='wrap'>
      <header>
        <h2>Hello</h2>
        <h1>
          <span>Go</span>
          <span>Travle</span>
        </h1>
      </header>
      <main>
        <div class="textInput">
            <input 
              type="text" 
              value="Where you Go?" />
            <button >input</button>
        </div>
        <button onClick={() =>(setcount(count + 1))} >Plus Number</button>
        <button
        onClick={()=>{[...list];
          copy[0] = "jejudo";
          setlist(copy);
        }}>몰라시발</button>
        <button
        onClick={()=>{[...list];
          copy[0] = "jejudo";
          setlist(copy);
        }}></button>
        <p class="total"> Total List Number : <span> {count} </span></p>
        <ul class="list">
            <li>
                <p>{list[0]}</p>
                <i class="fa-solid fa-trash-can"></i>
            </li>
            <li>
                <p>{list[1]}</p>
                <i class="fa-solid fa-trash-can"></i>
            </li>
            <li>
                <p>{list[2]}</p>
                <i class="fa-solid fa-trash-can"></i>
            </li>
            
        </ul>
      </main>
    </div>
  );
}

export default App;
