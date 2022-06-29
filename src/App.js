import React,{useRef} from 'react'
import CanvasDraw from 'react-canvas-draw'; 

const App = () => {

  const primercanvas = useRef(null)
  const segundocanvas = useRef(null)

const handleClick = () => { 
  const data1 = primercanvas.current.getSaveData();
  console.log(data1)
 };

 const devolver = () => { 
  const data = primercanvas.current.getSaveData();
  segundocanvas.current.loadSaveData(data);
  };

  const clear = () => { 
    primercanvas.current.clear()
   };



  return (
  <div>
    <button onClick={handleClick}>save DRAW in a json</button>
    <button onClick={devolver}>load</button>
    <button onClick={clear}>clear</button>
    <CanvasDraw 
    ref={primercanvas}
  brushRadius={12}
  brushcolor='red'
  />

  <CanvasDraw 
  ref={segundocanvas}
  brushRadius={12}
  brushcolor='blue'
  style={{border: '1px solid #000'}}
  />
<p>
    {data1}
  
  </p>
  </div>
  )
}

export default App