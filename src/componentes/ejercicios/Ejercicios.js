import Button from 'react-bootstrap/Button';


const Ejercicios = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2>algebra</h2>
                    <p>Aquí dejamos unos ejercicios de algebra resueltos para poder practicar</p>
                    <Button variant="outline-success"><a href= "../docs/algebra.jpg" class="linkAlebra" download="propuesta">Presione aquí para descargar el archivo</a></Button>

                </div>

                <div className="col-lg-6">
                    <h2>analisis</h2>
                    <p>Aquí dejamos unos ejercicios de analisis Matematico resueltos para poder practicar</p>
                     <Button variant="outline-success"><a href="../docs/analisis matematico.jpg">Presione aquí para descargar la carpeta</a></Button>
                </div>
            </div>
        </div>
        
    )
}

export default Ejercicios;