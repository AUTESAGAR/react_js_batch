import React from 'react'

function header(props) {
  // console.log(props.data.menu1);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-info fw-bold mb-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.data.menu1}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.data.menu2}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.data.menu3}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.data.menu4}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>)
}

export default header