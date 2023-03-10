import React from 'react'
import {
  NavLink, Link
} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
export default function Header() {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6' >
              <p className='text-white mb-0'>Free Shopping Over $100 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline: <a className='text-white' href='tel:+91 6370202834'>+91 6370202834</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Happy</Link>
              </h2>
            </div>
            <div className='col-5'>
            <div class="input-group">
             <input type="text" class="form-control py-2" placeholder="Serach product" aria-label="search product" aria-describedby="basic-addon2" />
               <span class="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6'/></span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between '>
                <div><Link  className='d-flex align-items-center gap-10 text-white'>
                  <img src="images/images/compare.svg" alt="Compare" />
                  <p className='mb-0'>
                    Compare <br /> Products
                  </p>
                </Link></div>
                <div><Link className='d-flex align-items-center gap-10 text-white'><img src="images/images/wishlist.svg" alt="wishlist" />
                  <p className='mb-0'>
                    Favourite <br /> wishlist
                  </p>
                </Link></div>
                <div><Link className='d-flex align-items-center gap-10 text-white'><img src="images/images/user.svg" alt="user" />
                  <p className='mb-0'>
                    Log In <br /> My Account
                  </p>
                </Link></div>
                <div><Link className='d-flex align-items-center gap-10 text-white'><img src="images/images/cart.svg" alt="" />
                  <div className='d-flex flex-column'>
                    <span className='badge bg-white text-dark'>0</span>
                    <p className='mb-0'> $ 5000</p>
                  </div>
              </Link></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-buttom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-buttom d-flex align-items-center gap-30'>
                <div>
                <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img src="./images/images/menu.svg" alt="shop" /><span className='me-5 d-inline-block'>Shop Categories</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item text-white" href="#">Action</a></li>
    <li><a className="dropdown-item text-white" href="#">Another action</a></li>
    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
  </ul>
</div>
                </div>
                <div className='menu-link'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink className="text-white" to="/">Home</NavLink>
                    <NavLink className="text-white" to="/">Our Store</NavLink>
                    <NavLink className="text-white" to="/">Blogs</NavLink>
                    <NavLink className="text-white" to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </> 
  )
}
