import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from "../images/logo our.png"
import Datablock from './Datablock'
import Aliascard from './Aliascard'

export default function Landing() {

    return (

        <div class="back">
            <nav class="navbar navbar-expand-lg navbar-light  topmenu">
                <a class="navbar-brand" href="#"><img src={logo} className="toplogo"></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">


                    </ul>
                    <form class="d-flex justify-content-center">
                        <a href="#"><button class="btn btn-outline-danger  ml-5 mb-1" type="button">Register</button></a>


                        <a href="# "><button class="btn btn-outline-danger active  ml-4 mr-5" type="button">Login</button></a>
                    </form>
                </div>
            </nav>
            <div class="main_box d-flex flex-column bd-highlight mb-3 container">
                <div class=" bd-highlight d-flex justify-content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col container cardd">
                                <div class="d-flex justify-content-center" ><span class="card_num">1</span></div>
                                <div class="d-flex justify-content-center"><span class="card_data">Alilas</span></div>
                            </div>
                            <div class="col container cardd">
                                <div class="d-flex justify-content-center" ><span class="card_num">1</span></div>
                                <div class="d-flex justify-content-center"><span class="card_data">Forwards</span></div>
                            </div>
                            <div class="col container cardd">
                                <div class="d-flex justify-content-center" ><span class="card_num">1</span></div>
                                <div class="d-flex justify-content-center"><span class="card_data">Replies</span></div>
                            </div>
                            <div class="col container cardd">
                                <div class="d-flex justify-content-center" ><span class="card_num">1</span></div>
                                <div class="d-flex justify-content-center"><span class="card_data">Block</span></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="mb-1 mt-4 bd-highlight d-flex justify-content-center">
                    <div class="container">
                        <div class="row">
                            <button type="button" class="btn btn-primary mr-3 btn_sec"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>New Custom Alilas </button>
                            <button type="button" class="btn btn-success ml-2 btn_sec"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-shuffle a" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                                <path
                                    d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                            </svg> Random Alilas</button>
                        </div>
                    </div>
                </div>
                <div class="p-0 m-0 bd-highlight d-flex justify-content-left flex-wrap">

                    <div class="mails">
                        <div class="mail_item">
                            <div class="email">
                                mxtoolbox.admeadure@aleeas.com
                            </div>
                            <div class="rig">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div class="email_info">
                                xyz@gmail.com  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
                                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                                </svg> <span>18</span> hour ago

                                </div>
                            <div>
                                <button type="button" class="btn btn-outline-danger cardbtn"><span>Send Email</span></button>
                            </div>
                        </div>

                    </div>
                    <div class="mails">
                        <div class="mail_item">
                            <div class="email">
                                mxtoolbox.admeadure@aleeas.com
                            </div>
                            <div class="rig">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div class="email_info">
                                xyz@gmail.com  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
                                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                                </svg> <span>18</span> hour ago

                                </div>
                            <div>
                                <button type="button" class="btn btn-outline-danger cardbtn"><span>Send Email</span></button>
                            </div>
                        </div>

                    </div>
                    <div class="mails">
                        <div class="mail_item">
                            <div class="email">
                                mxtoolbox.admeadure@aleeas.com
                            </div>
                            <div class="rig">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div class="email_info">
                                xyz@gmail.com  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
                                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                                </svg> <span>18</span> hour ago

                                </div>
                            <div>
                                <button type="button" class="btn btn-outline-danger cardbtn"><span>Send Email</span></button>
                            </div>
                        </div>

                    </div>
                    <div class="mails">
                        <div class="mail_item">
                            <div class="email">
                                mxtoolbox.admeadure@aleeas.com
                            </div>
                            <div class="rig">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div class="email_info">
                                xyz@gmail.com  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
                                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                                </svg> <span>18</span> hour ago

                                </div>
                            <div>
                                <button type="button" class="btn btn-outline-danger cardbtn"><span>Send Email</span></button>
                            </div>
                        </div>

                    </div>
                    <div class="mails">
                        <div class="mail_item">
                            <div class="email">
                                mxtoolbox.admeadure@aleeas.com
                            </div>
                            <div class="rig">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div class="email_info">
                                xyz@gmail.com  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
                                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                                </svg> <span>18</span> hour ago

                                </div>
                            <div>
                                <button type="button" class="btn btn-outline-danger cardbtn"><span>Send Email</span></button>
                            </div>
                        </div>

                    </div>



                </div>




            </div>

        </div >
        //  <div className="dashboard">
        // //     <div className="navbar">
        // //         <img alt="logo" src={logo} />
        // //         <div className="nav-right">
        // //             <Link className="log-link" to="/login">login</Link>
        // //             <button className="nav-btn"><Link className="link" to="/register">Sign Up</Link></button>
        // //         </div>
        // //     </div>
        // //     <div className="row">
        // //         <Datablock />
        // //         <Datablock />
        // //         <Datablock />
        // //         <Datablock />
        // //     </div>
        // //     <div className="row">
        // //         <button className="alias-btn"><h3>Create new alias</h3></button>
        // //         <button className="alias-btn-rdm"><h3>Create random alias</h3></button>
        // //     </div>
        // //     <section className="card-grid">
        // //         <Aliascard />
        // //         <Aliascard />
        // //         <Aliascard />
        // //         <Aliascard />
        // //         <Aliascard />
        // //     </section>
        // </div>
    )
}