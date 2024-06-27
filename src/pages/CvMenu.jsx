import React from 'react';
import frame1 from '../assets/images/Frame1.png';
import frame2 from '../assets/images/Frame2.png';
import frame3 from '../assets/images/Frame3.png';
import Button from '../elements/Button';

function Cvmenu() {
  return (
    <div className="container">
      <h2 className="text-primary fw-bold">CV</h2>
      <h6>Why Hiring Me?</h6>
      <div className="col-lg-6 mx-auto">
        <div
          id="carouselExampleIndicators"
          className="carousel slide custom-rounded"
          style={{ overflow: 'hidden' }} 
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={frame1} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={frame2} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={frame3} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <p className="mt-3">You can click the button below to download my CV.</p>
      <a
        type="button"
        className="btn btn-primary bottom-0 start-0 mb-3"
        data-bs-toggle="modal"
        data-bs-target="#modalCV"
      >
        Download CV
      </a>
      <div
        className="modal fade"
        id="modalCV"
        tabIndex="-1"
        aria-labelledby="modalCVLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-rounded">
            <div className="modal-header">
              <h5 className="modal-title" id="modalCVLabel">Download the CV</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Click the button below to download the CV:</p>
              <a href="#" className="btn btn-primary">Download John Doe CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cvmenu;
