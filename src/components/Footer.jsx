function Footer () {
  return (
    <footer className="footer mt-5 py-3 bg-dark">
      <div className="container text-white text-center">
        <p>Follow me on social media</p>
        <div className="my-3">
          <a href="#" className="text-white mx-2"
            ><i className="fab fa-linkedin fa-2x"></i></a>
          <a href="#" className="text-white mx-2"
            ><i className="fab fa-github fa-2x"></i></a>
          <a href="#" className="text-white mx-2"
            ><i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
        <span className="text-white">© 2024 | John Doe Portfolio</span>
      </div>
    </footer>
  );
}

export default Footer;