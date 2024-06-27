import johnDoeImage from '../assets/images/john-doe.png';

function Jumbotron () {
  return (
    <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-7 order-lg-1 px-5 d-flex align-items-center">
            <div>
              <h1 className="display-4 fw-medium">Hi, I'm John Doe</h1>
              <p className="lead">
                I am a front-end developer with 5 years of experience in the IT
                industry🚀
              </p>
            </div>
          </div>
          <div className="col-lg-5 order-2">
            <img
              src={johnDoeImage}
              alt="John Doe"
              className="img-fluid mx-auto d-block mt-5 w-75"
              data-toggle="tooltip"
              title="This is my profile picture"
            />
          </div>
        </div>
      </div>
  );
}

export default Jumbotron;