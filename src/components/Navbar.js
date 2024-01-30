import React, { Component } from 'react'
import { app_name } from '../constant/Constants'
import { theme_bg,white } from '../constant/Colors'
import { capitalize } from '../globle/GlobleFun'

const Navbar=()=>{
        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{background:theme_bg}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" style={{color:white}}>{app_name}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about" >About</a>
                                </li>  
                                <li className="nav-item"><a className="nav-link" href="/business" >{capitalize('business')}</a></li> 
                                <li className="nav-item"><a className="nav-link" href="/entertainment">{capitalize('entertainment')}</a></li> 
                                <li className="nav-item"><a className="nav-link" href="/">{capitalize('general')}</a></li> 
                                <li className="nav-item"><a className="nav-link" href="/health">{capitalize('health')}</a></li> 
                                <li className="nav-item"><a className="nav-link" href="/science">{capitalize('science')}</a></li> 
                                <li className="nav-item"><a className="nav-link" href="/sports">{capitalize('sports')}</a></li> 
                                <li className="nav-item"><a className="nav-link" href="/technology">{capitalize('technology')}</a></li> 

                                
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    
}


export default Navbar