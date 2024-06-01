import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Desafios from './Components/Desafios'
import styled from 'styled-components'

function App() {
  const [mostrarDesafios, setMostrarDesafios] = useState(true)

  return (
    <>
      <Contenedor>
        <h1>Hoy se celebra el Día del Niño</h1>
        <p>Vamos a comprobar si te mereces la sorpresa &#128522; </p>
        <button onClick={(e) => setMostrarDesafios(true)}>Acepto el desafío!</button>
       
      </Contenedor>
     
     {
      mostrarDesafios && <Desafios setMostrarDesafios={setMostrarDesafios}/>
     }
    </>
  )
}

export default App

const Contenedor = styled.div`

  h1{
    color: #ac35ff;
    text-align: center;

  }

  p{
    color: #6A8BFF;
  }
  
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p{
    font-size: 24px;
    text-align: center;
  }
`;