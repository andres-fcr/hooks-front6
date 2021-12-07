import React, { useState, useEffect } from 'react'

const Cards = ({ categoria }) => {

    const [stateImages, setStateImages] = useState([])

    useEffect(() => {
        imgGif(categoria)
            .then(imgData => setStateImages(imgData))
    }, [categoria])

    const imgGif = async (categoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}okemon&limit=10&api_key=oVC074LjQIuI2s6yguoLIBGoZjwUCR3G`
        const resp = await fetch(url)
        const { data } = await resp.json()

        const imgData = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })



        return imgData
    }

    return (
        categoria !== undefined ?
           <ol>
               {
                   stateImages.map((img) => (
                    <li key={img.id}>
                        <h3>{img.title}</h3>
                        <img src={img.url} alt="imagen" />
                    </li>
                ))
               }
           </ol>
            :
            null
        
    )
}

export default Cards
