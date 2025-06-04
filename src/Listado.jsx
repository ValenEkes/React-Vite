import Cita from './cita';
import "./cita.css";
import Mensaje from "./Mensaje";

let Listado = ({citas, setCitas}) => {
let EliminarCita=(e)=>{
setCitas(citas.filter(citas=>citas.nombreMascota!==e.nombreMascota||citas.nombreDueño!==e.nombreDueño||citas.fecha!==e.fecha||citas.hora!==e.hora||citas.sintomas!==e.sintomas))
localStorage.setItem('citas',JSON.stringify(citas.filter(citas=>citas.nombreMascota!==e.nombreMascota||citas.nombreDueño!==e.nombreDueño||citas.fecha!==e.fecha||citas.hora!==e.hora||citas.sintomas!==e.sintomas)))
}  
  return (
    <div class="one-half column">
      <h2>Pacientes registrados</h2>
    { 
    citas.map((c,index) => <Cita index={index} mascota={c.nombreMascota} duenio={c.nombreDueño} fecha={c.Fecha} hora={c.Horario} sintomas={c.sintomas}  eliminar={() => EliminarCita(c)}/>) 
  }
    </div>
  );
};

export default Listado;
