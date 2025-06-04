import Mensaje from "./Mensaje";

let Formulario = ({setCitas, citas}) => {
    const agregarCita = (e) => {
      e.preventDefault();
      const cita = {
        nombreMascota: e.target.NombreMascota.value,
        nombreDueño:e.target.propietario.value,
        Fecha:e.target.Fecha.value,
        Horario:e.target.Hora.value,
        sintomas:e.target.Sintomas.value
      };

      setCitas([...citas, cita]);
    
    }
    
  return (
    <>
    <h2>Crear mi cita</h2>
      <form onSubmit={agregarCita}>
        <div>
          <Mensaje mensaje="Nombre Mascota" />
          <input type="text" name="NombreMascota" class="u-full-width" placeholder="Nombre Mascota" />
        </div>
        <div>
          <Mensaje mensaje="Nombre Dueño" />
          <input type="text" name="propietario" class="u-full-width" placeholder="Nombre Dueño" />
        </div>

        <div>
          <Mensaje mensaje="Fecha" />
          <input type="date" name="Fecha" class="u-full-width"/>        
          </div>

        <div>
          <Mensaje mensaje="Horario" />
          <input type="time" name="Hora" class="u-full-width" />
        </div>

        <div>
          <Mensaje mensaje="Sintomas" />
          <input type="text" name="Sintomas" class="u-full-width" placeholder="Sintomas" />
        </div>
        <button class="u-full-width button primary">Agregar Cita</button>
      </form>
    
    </>
  );
};
export default Formulario;
