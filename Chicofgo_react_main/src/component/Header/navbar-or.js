import {
  BsSearch,
  BsFillBellFill,
  BsSuitHeartFill,
  BsFillPersonFill,
  BsFillCartFill,
} from 'react-icons/bs'

function NavScrollExample() {
  return (
    <div class="container">
      <nav class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom navbar navbar-expand-lg">
        <a
          href="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none navbar-brand"
        >
          {/* <img src="./logo.png" class="img-thumbnail" alt="..." /> */}
          <img src={require('./logo.png')} alt="logo" class="img-fluid w-25" />
        </a>

        {/* 漢堡選單 */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-3 link-secondary">
                首頁
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-3 link-dark">
                商品
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-3 link-dark">
                活動專區
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-3 link-dark">
                優惠券
              </a>
            </li>
          </ul>
        </div>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="搜尋商品"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              <BsSearch />
            </button>
          </form>
          <li>
            <a href="#" class="nav-link mx-1 px-2 link-secondary">
              <BsFillBellFill />
            </a>
          </li>
          <li>
            <a href="#" class="nav-link mx-1 px-2 link-dark">
              <BsSuitHeartFill />
            </a>
          </li>
          <li>
            <a href="#" class="nav-link mx-1 px-2 link-dark">
              <BsFillPersonFill />
            </a>
          </li>
          <li>
            <a href="#" class="nav-link mx-1 px-2 link-dark">
              <BsFillCartFill />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavScrollExample
