
import { useState } from 'react';
import './App.css';
import useCopy from './hooks/useCopy';
import useToggle from './hooks/useToggle';

// import Clicker from './components/clicker/Clicker';
// import Plusser from './components/plusser/Plusser';

function App() {

  const [inputText, setInpuText] = useState("")
  const { open, change } = useToggle()

  
  const [copied, copy] = useCopy(inputText)

  const handdleInputChange = (e) => {
    setInpuText(e.target.value)
  }


  return (
    <div className="App">

      {/* <Clicker/>
      <Plusser/> */}


      {/* <div className={`main ${ open? "demo": "" }`}></div>
      <button style={{"position":"absolute","bottom":"70px"}} onClick={change}>{open ? "Close": "Open"}</button> */}

        <input type="text" 
          placeholder='Text'
          onChange={handdleInputChange}
          value={inputText} />

        
        <i onClick={copy} className="fa fa-clone " aria-hidden="true"></i>
        
    
        {copied && <p style={{"color":"green"}}>Copy olundu</p>}

    </div>
  );
}

export default App;
