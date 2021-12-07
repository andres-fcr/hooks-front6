import React from 'react'
import Cards from './Cards'

const CategoriasList = ({ categoria }) => {
    return (
        <div>
            {
                categoria.map((cate, index) => {
                    return (
                        <div key={index} >
                            <h1>{cate}</h1>
                            <Cards categoria={cate} />
                        </div>
                    )
                })
            }
            <Cards />
        </div>
    )
}

export default CategoriasList
