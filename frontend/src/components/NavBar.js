import logo from '../images/logo.png'

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  topmenu">
      <a className="navbar-brand" href="/">
        <img src={logo} className="toplogo" alt="logo"></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        <form className="d-flex justify-content-center">
          <a href="/profile">
            <button className="btn btn-outline  ml-5 mb-1" type="button">
              {props.name}
            </button>
          </a>

          <a href={props.isLoggedIn?'/logout':'/login'}>
            <button
              className="btn btn-outline-danger active  ml-4 mr-5"
              type="button"
            >
              {props.isLoggedIn?'Log out':'Login'}
            </button>
          </a>
        </form>
      </div>
    </nav>
  );
}
