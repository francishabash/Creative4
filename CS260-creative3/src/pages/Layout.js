import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          
          <img class="navbar-brand" src="images/Palestine.png" width="50" height="50" />
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/home">home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/images">Images</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/history">History</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/people">People</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shop">Shop</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
    </>
  )
};

export default Layout;