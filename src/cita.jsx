import "./cita.css";
import Mensaje from "./Mensaje";
let Cita = ({mascota, duenio, fecha, hora, sintomas,eliminar}) =>{  

  return (
    <>
      <div class="cita">
        <div>
          <p>
            Mascota
            <span>{mascota}</span>
          </p>
        </div>
        <div>
          <p>
            Dueño
            <span>{duenio}</span>
          </p>
        </div>
        <div>
          <p>
            Fecha
            <span>{fecha}</span>
          </p>
        </div>
        <div>
          <p>
            Hora
            <span>{hora}</span>
          </p>
        </div>
        <div>
          <p>
            Sintomas
            <span>{sintomas}</span>
          </p>
        </div>
        <button class="button elimnar u-full-width" onClick={eliminar}>Eliminar</button>
      </div>
    </>
  );
};
export default Cita;
