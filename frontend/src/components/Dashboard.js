import React, { useState } from 'react';
import { Link , Redirect } from 'react-router-dom';
import logo from "../images/logo our.png"
import Datablock from './Datablock'
import Aliascard from './Aliascard'

export default function Landing(){

    const [auth] = useState(false)

    if(auth){
        return(
            <Redirect to="/login" />
        )
    }
    return(
        <div className="dashboard">
            <div className="navbar">
                <img alt="logo" src={logo} />
                <div className="nav-right">
                    <Link className="log-link" to="/login">login</Link>
                    <button className="nav-btn"><Link className="link" to="/register">Sign Up</Link></button>
                </div>
            </div>
            <div className="row">
                <Datablock />
                <Datablock />
                <Datablock />
                <Datablock />
            </div>
            <div className="row">
                <button className="alias-btn"><h3>Create new alias</h3></button>
                <button className="alias-btn-rdm"><h3>Create random alias</h3></button>
            </div>
            <section className="card-grid">
                <Aliascard />
                <Aliascard />
                <Aliascard />
                <Aliascard />
                <Aliascard />
            </section>
        </div>
    )
}