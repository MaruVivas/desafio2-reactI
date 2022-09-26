import { useState } from 'react'
import Input from './components/Input.jsx'
import Boton from './components/Boton.jsx'

function App() {
  const [nombre, setNombre] = useState("")
  const [contraseña, setContraseña] = useState("")
  return (
    
    <div className="App">
      <div className="container">
        <Input
          setNombre ={ setNombre }
          setContraseña = { setContraseña }>
        </Input>
        { nombre && contraseña === "252525" && <Boton></Boton>}
      </div>
    </div>
  );
}

export default App;
