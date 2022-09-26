

const Formulario = ({setNombre, setContraseña, contraseña, nombre}) => {
    return (
        <div className="form-container">
            <h1>Validando contraseña</h1>
            <label>Nombre</label>
            <input type="text" className= "form-input" onChange={(e) => setNombre(e.target.value)}></input>
            <label>Ingresa la contraseña correcta</label>
            <input type="text" className= "form-input"  onChange={(e) => setContraseña(e.target.value)}></input>
        </div>
    )
}

export default Formulario