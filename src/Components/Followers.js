import React, { useEffect, useState } from 'react'
import UseFetch from './UseFetch'

export default function Followers() {
    const { loading, data } = UseFetch()
    const [page, setPage] = useState(0)
    const [follower, setFollower] = useState([])
    useEffect(() => {
        if (loading)
            return
        setFollower(data[page])
    }, [loading, page])
    const handlePage = (index) => {
        setPage(index)
    }
    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1
            if (nextPage > data.length - 1) {
                nextPage = 0
            }
            return nextPage
        })
    }
    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1
            if (prevPage < 0) {
                prevPage = data.length-1
            }
            return prevPage
        })
    }
    return (
        <div>
            {
                loading ?
                    <>
                        <div className='text-center'>
                            <h4 style={{
                                textDecoration: 'underline',
                                textDecorationColor: 'rgba(18, 102, 241,0.8)',
                                textUnderlineOffset: '5px'
                            }}>Loading ....</h4>
                        </div>
                    </>
                    :
                    <>
                        <div className='container'>
                            <div className='row p-4'>
                                <h1 className='text-center p-3' style={{
                                    textDecoration: 'underline',
                                    textDecorationColor: 'rgba(18, 102, 241,0.8)',
                                    textUnderlineOffset: '5px'
                                }}>Pagination</h1>
                                {
                                    follower.map((item) => {
                                        const { avatar_url, html_url, login } = item;

                                        return (
                                            <div className='col-md-6 col-lg-4 col-xl-3 my-4' key={login}>
                                                <div className='card border-0 shadow rounded mx-auto py-3 px-3' style={{ width: '18rem' }}>
                                                    <div className='text-center'>
                                                        <img src={avatar_url} alt={login} className='img-fluid rounded-circle' style={{ width: '90px' }} />
                                                    </div>
                                                    <div className='card-body text-center '>
                                                        <h6 className='text-uppercase text-secondary'>{login}</h6>
                                                        <button className='btn btn-primary btn-sm rounded-pill px-3 py-1'>
                                                            <a href={html_url} className='text-light' style={{ textDecoration: 'none' }}>View Profile</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
            }
            {!loading &&
                <div className='d-flex justify-content-center flex-wrap'>
                    <button className='btn btn-light fw-bold' onClick={prevPage}>prev</button>
                    {data.map((butt, index) => {
                        return <button className={`${index === page ? 'btn btn-sm btn-primary mx-1' : 'btn btn-sm btn-light mx-1'}`} key={index} onClick={() => handlePage(index)}>{index + 1}</button>
                    })}
                    <button className='btn btn-light fw-bold' onClick={nextPage}>next</button>
                </div>
            }
        </div>
    )
}
