import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'

const CategoriasAdd = ({ setcategorias }) => {

    const [search, setSearch] = useState('')
    const searchRef = useRef()

    useEffect(() => {
        searchRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setcategorias(categorias => [search, ...categorias])
        setSearch('')
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }



    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formulario">

                    <Form.Control
                        className=""
                        type="text"
                        ref={searchRef}
                        name="search"
                        placeholder="categories"
                        value={search}
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Form>
        </>
    )
}

export default CategoriasAdd
