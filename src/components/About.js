import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Ambitious MERN Full-stack developer, a self-led learner and team player  <br></br>
                                with Half Year of experience as intern in web developement.
                            </p>
                            <p className='slide-in-bottom'>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p className='slide-in-bottom'>
                                Currently Pursuing MERN Stack Development Course.<br></br>
                                The technology I've worked on : <br></br><span className="text-red ls-2">React js, Node js, Express js , Mongodb <br></br>
                                Html, Css, Js, Bootstrap, jQuery </span>
                            </p>
                            <p className='slide-in-bottom'>
                                Currently Learning React Js Library and Node js. 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About