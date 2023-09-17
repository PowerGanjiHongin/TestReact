import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Popup from "./common/PopUp"
import ListLi from "./common/ListLi"

function App() {
  const test = "test"
  const[list, setlist] = useState([
    "Sondo central park",
    "paju probangs / heeri twoun",
    "chunchun soyang river sky warlks"
  ]);
  const [count, setcount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [titleNo, setTitleNo] = useState(0);
  const [inText, SetinText] = useState("");
  
  const writeList = () => {
    if(inText == ""){
      alert("input Text");
      return;
    }
    let copy = [...list];
    // copy.push(inText);
    copy.unshift(inText);
    setlist(copy);
    SetinText(copy);
  }

  const delList = (i) => {
    console.log("test", i);
    let copy = [...list];
    copy.splice(i,1);
    setlist(copy);
  }

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
        <div className="textInput">
          <input
            type="text"
            value= {inText}
            onChange = {(e) => {
              SetinText(e.target.value);
            }}
            placeholder = "where We Go?"
          />
          <button
            onClick ={() => {
              writeList();
          }}
          >Input</button>
        </div>
        <button>
          Open
        </button>
        <p class="total"> Total List Number : <span> {list.length} </span></p>
        <ul class="list">
          <p>
                {list.map((a, i)=>{ 
                  return  <ListLi list = {a}
                  setIsOpen = {setIsOpen}
                  setTitleNo = {setTitleNo}
                  i = {i}
                  delList ={delList}
                  />
                })}
                </p>
        </ul>
        {list.length <= 0 ? <p> List not exit</p> : null}
      </main>
      {isOpen == false ? null : 
      <Popup list = {list}
      titleNo = {titleNo}
      setIsOpen={setIsOpen}
      />}
    </div>
  );
}

export default App;
