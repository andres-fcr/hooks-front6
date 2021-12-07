import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Formulario from '../components/Formulario';
import CategoriasApp from '../components/Buscador/CategoriasApp';


export default class Container extends Component {
    render() {
        return (
            <div>
                <CategoriasApp />
            </div>
        )
    }
}
