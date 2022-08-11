import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Movie.css'

export default function Movie() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios('https://www.omdbapi.com/?i=tt3896198&apikey=fe88a80e&s=batman')
            .then((res) => setData(res.data.Search))
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row p-4'>
                    {
                        data.map((item) => {
                            return (
                                <div className='col-sm-4 my-4'>
                                    <div className='card mx-auto border-0 shadow movie' style={{ width: "18rem" }}>
                                        <img src={item.Poster} alt={item.Title} />
                                        <div className='movie-info'>
                                            <h4 className='title'>{item.Title}</h4>
                                            <p>{item.Year}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

