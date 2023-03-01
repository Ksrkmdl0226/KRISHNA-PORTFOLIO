import React, { Fragment } from "react";
import { SiCodechef, SiHackerrank } from "react-icons/si";

function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Krishna Kurdekar</h2>

              <h5 className="d-inline fw-bold ls-2">Mail Id:</h5> <a href="mailto:ksrkmdl@gmail.com" className="h5 text-danger ls-2">  ksrmdl@gmail.com</a><br />
              <h5 className="d-inline fw-bold ls-2">Phone No:</h5> <a href="https://call.me/7760294984" className="h5 text-danger ">  7760294984</a>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    MCA - Master of Computer Application
                  </h4>
                  <h6 className="blue-label px-2 py-1">2021 - 2022</h6>
                  <p className="m-0">Jain College of Engineering, Belagavi</p>
                  <p>CGPA: 8.0</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    BCA - Bachelor of Computer Application
                  </h4>
                  <h6 className="blue-label px-2 py-1">2017-2020</h6>
                  <p className="m-0">Shri S R Kanti BCA College, Mudhol</p>
                  <p>Grade: 78.00 %</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">INTERNSHIP EXPERIENCE</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    <a href="https://drive.google.com/file/d/1Pe9Wuxo6IW2LswqacL0JuXB8iCPH1YQz/view?usp=share_link"
                      className="ff-jose my-1 text-red text-decoration-none">
                      Web Application Developer
                    </a>
                  </h4>
                  <h6 className="blue-label px-2 py-1">Jan 2022 - Jun 2022</h6>
                  <p className="m-0">InfyNow Software Solutions · Full-time</p>
                  <details>
                    <p className="text-justify">
                      Worked as front end developer on Bootstrap Templates and
                      Worked on Academic project on: Jewellery Shop Management
                      System.
                    </p>
                    <p>
                      Web Technologies used : Bootstrap, Css, Javascript, jQuery
                      and MySQL.
                    </p>
                  </details>
                  <p>Belagavi, Karnataka, India</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    <a
                      href="https://drive.google.com/file/d/1PsCN2Xc6UVfP_SiUvytvTRsIkwoiILSB/view?usp=share_link"
                      className="ff-jose my-1 text-red text-decoration-none"
                    >
                      Internship IOT Trainee
                    </a>
                  </h4>
                  <h6 className="blue-label px-2 py-1">Dec 2019 - Feb 2020</h6>
                  <p className="m-0">MPS Labs · Internship</p>
                  <details>
                    <p className="text-justify">
                      Workerd as Intern for Acedemic Project on: Obstacles
                      Prevention system for Smart car.
                    </p>
                  </details>
                  <p>Dharwad, Karnataka, India</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4 className="ff-jose">Languages Known</h4>
              <div className="row">
                <ul className="col mx-5">
                  <li>
                    <h5>English</h5>
                  </li>
                  <li>
                    <h5>Hindi</h5>
                  </li>
                </ul>
                <ul className="col mx-5">
                  <li>
                    <h5>Kannada</h5>
                  </li>
                  <li>
                    <h5>Konkani</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4 className="ff-jose">Interests</h4>
              <div className="row">
                <ul className="col ms-5">
                  <li>
                    <h5>Pencil Art</h5>
                  </li>
                  <li>
                    <h5>Bike Riding</h5>
                  </li>
                </ul>
                <ul className="col ms-5">
                  <li>
                    <h5>Crafting</h5>
                  </li>
                  <li>
                    <h5>Reading Books</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
