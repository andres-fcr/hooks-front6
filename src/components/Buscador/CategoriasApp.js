import React from 'react'
import { useState } from 'react'
// import { Button } from 'react-bootstrap'
import CategoriasAdd from './CategoriasAdd'
import CategoriasList from './CategoriasList'


const CategoriasApp = () => {

    const [categorias, setCategorias] = useState([''])

    // const   handleAgregar = () =>{
    //     setategorias([...categorias, 'Risas'])
    // }

    return (
        <div>
            <h1>Encuentra tu gif </h1>
            <ol>
                <CategoriasAdd setcategorias={setCategorias} />
                <CategoriasList categoria={categorias} />
            </ol>
            {/* <Button variant="primary" onClick={handleAgregar}>Buscar</Button> */}
        </div>
    )
}

export default CategoriasApp
