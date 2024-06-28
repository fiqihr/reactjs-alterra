import Button from "../elements/Button";

function Contactme () {
  return (
    <div className="container mt-5">
    <h2 className="mb-3 text-primary fw-bold">Contact Me</h2>
    <h6>Curious? Send me a message</h6>
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <form id="contactForm">
              <div className="form-group d-lg-flex my-2">
                <div
                  className="col-lg-3 d-flex justify-content-between pe-3 align-items-center"
                >
                  <label htmlFor="name" className="col-lg-3">Name</label>
                  <span>:</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group d-lg-flex my-2">
                <div
                  className="col-lg-3 d-flex justify-content-between pe-3 align-items-center"
                >
                  <label htmlFor="email" className="col-lg-3">Email</label>
                  <span>:</span>
                </div>
                <div className="col-lg-9">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email.
                  </div>
                </div>
              </div>
              <div className="form-group d-lg-flex my-2">
                <div
                  className="col-lg-3 d-flex justify-content-between pe-3 align-items-center"
                >
                  <label htmlFor="phone" className="col-lg-3">Phone Number</label>
                  <span>:</span>
                </div>
                <div className="col-lg-9">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid phone number (minimum 12 digits).
                  </div>
                </div>
              </div>
              <div className="form-group d-lg-flex my-2">
                <div className="col-lg-3 d-flex justify-content-between pe-3">
                  <label htmlFor="message" className="col-lg-3">Message</label>
                  <span>:</span>
                </div>
                <div className="col-lg-9">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button type="submit" className="btn btn-primary px-5">
                  Submit
                </button>
              </div>
            </form>
            <div
              id="successMessage"
              className="alert alert-success alert-dismissible fade show mt-3"
              role="alert"
            >
              Berhasil Dikirim!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contactme;