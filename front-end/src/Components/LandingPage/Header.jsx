import React from 'react';
import '../../App.css';


export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark landing-page-header">
                <div className="container my-4">
                    {/* <a className='navbar-brand' href="abc" >abc</a> logo appear when view in small display  */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item pe-5">
                                <a className="nav-link" aria-current="page" href="abc">Home</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link" href="abc">Anime</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link" href="abc">Movies</a>
                            </li>
                            <li className="nav-item pe-5">
                                <a className="nav-link" href="abc">TV</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}