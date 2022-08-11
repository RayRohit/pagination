import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Followers from './Followers'
import Movie from './Movie/Movie'

export default function Navb() {
    return (
        <>
            <BrowserRouter>
                <Navbar expand='lg' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav className='mx-auto'>
                                <Nav.Link as={Link} to='/pagination'>Pagination</Nav.Link>
                                <Nav.Link as={Link} to='/movie'>Movies</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path='/pagination' element={<Followers />} />
                    <Route path='/movie' element={<Movie />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
