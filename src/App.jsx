import './App.css'
import './Formulario'
import Formulario from './Formulario'
import Cita from './Cita'
import Listado from './Listado'
import React,{useEffect, useState} from "react"
function App() {
const [citas,setCitas]=useState([])
useEffect(()=>{})
  return (
    <>
    <h1>Administrador de paciente</h1>
    <div className='container'>
      <div className="row">
      <div class="one-half column">
        <Formulario setCitas={setCitas} citas={citas} />
      </div>
      <div class="one-half column">
        <Listado citas={citas} setCitas={setCitas} />
      </div>
      </div>
    </div>
    </>
    
  )
}

export default App
