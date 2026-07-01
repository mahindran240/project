import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';
function App() {
  const [Name, setName] = useState("");
  const [Store, setStore] = useState("");
  const [Alert, setAlert] = useState("");
  useEffect(() => {
    alert(Alert);
  }, [Alert]);
  const [number, setNumber] = useState(0);

  const result = useMemo(() => {
    return number * 2;
  }, [number]);



 const [message, setMessage] = useState("");

  const welcome = useCallback(() => {
    setMessage("Welcome Mahiiiiiiiiiiiiii!");
  }, []);

  const thankYou = useCallback(() => {
    setMessage("Thank You Mahiiiiii!");
  }, []);

  return (
 
    

    <div className="App">
      <div class="div1">
      <h1 class="main">UseState</h1>
      <input type='text' placeholder='Enter your name' onChange={(e) => setStore(e.target.value)} />
      <button onClick={() => setName(Store)}>Submit</button>
      <button onClick={() => setName("")}>Clear</button>
      <h1>OUTPUT:
          <h1 class="output">{Name}</h1></h1>       
      </div>



      <div class="div1">
      <h1 class="main">UseEffect</h1>
      <input type='text' placeholder='Enter your name' onChange={(e) => setStore(e.target.value)} />
      <button onClick={() => setAlert(Store)}>Alert</button>
      <br></br>
      </div>




      <div  class="div1">
        <h1 class="main">UseMemo- 
      <h1 class="main"> Multiply Number by 2</h1></h1>
      <div >
          <h1>Number:
          <h1 class="output">{number}</h1></h1> 
      </div>
      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>
       <button onClick={() => setNumber(number - 1)}>
        Decress Number
      </button>

      <h1>Result:<h1 class ="output">{result}</h1></h1>
      <h3></h3>
      </div>




      <div class="div2">
        <div>
          <h1 class="main">useCallback
      <h1 >Show Welcome Message</h1></h1>

      <button onClick={welcome}>Welcome</button>

      <button onClick={thankYou} style={{ marginLeft: "10px" }}>
        Thank You
      </button>

      <h3>{message}</h3>
      </div>
    </div>
    </div>
  );
}

export default App;