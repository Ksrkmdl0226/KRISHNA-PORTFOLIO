import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import bepract from '../images/bepract.jpg'
import wireless from '../images/wireless.jpg'
import air from '../images/air.jpg'

function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Projects</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={bepract} className="d-block w-100" alt="..." height={"150px"}/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Be-Practical Template</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://html-template-be-practical-8ca7dqedz-ksrkmdl0226.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a>
                                <a href="https://github.com/Ksrkmdl0226/HTML-TEMPLATE-BE-PRACTICAL" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                    </div>
                    
                    <div className="col-md-4 text-center my-2">
                        <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={air} className="d-block w-100" alt="..." height={"150px"}/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Air Quality Measure IoT Project</h5>
                            <div className="row d-flex justify-content-center">
                                {/* <a href="https://natour-yg.herokuapp.com/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a> */}
                                <a href="https://github.com/Ksrkmdl0226/AIR-QUALITY-WARNING-SYSTEM-IOT-PROJECT" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={wireless} className="d-block w-100" alt="..." height={"150px"}/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Wireless Notice Board IOT Project</h5>
                            <div className="row d-flex justify-content-center">
                                {/* <a href="https://natour-yg.herokuapp.com/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a> */}
                                <a href="https://github.com/Ksrkmdl0226/WIRELESS-NOTICE-BOARD-IOT-PROJECT" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default MyWork