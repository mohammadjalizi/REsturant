import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=' '>


<div className="section" id="menu">
  <div className="container-menu">
    <ul className="category">
      <li className="active">All</li>
      <li>Biryani</li>
      <li>Chicken</li>
      <li>Pizza</li>
      <li>Burger</li>
      <li>Pasta</li>
    </ul>
    <div className="container">
      <div className="restaurant-menu">
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-1.jpg"
            alt=""
          />
          <div className="title">Food Restaurant | Chineese &amp; Thai</div>
          <div className="location">Lahore, Pakistan</div>
          <div className="order flex">
            <div className="price">$25.00</div>
            <a href="#" className="btn btn-menu">
              Order Now
            </a>
          </div>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-2.jpg"
            alt=""
          />
          <div className="title">Food Restaurant | Chineese &amp; Thai</div>
          <div className="location">Lahore, Pakistan</div>
          <div className="order flex">
            <div className="price">$25.00</div>
            <a href="#" className="btn btn-menu">
              Order Now
            </a>
          </div>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-1.jpg"
            alt=""
          />
          <div className="title">Food Restaurant | Chineese &amp; Thai</div>
          <div className="location">Lahore, Pakistan</div>
          <div className="order flex">
            <div className="price">$25.00</div>
            <a href="#" className="btn btn-menu">
              Order Now
            </a>
          </div>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-3.jpg"
            alt=""
          />
          <div className="title">Food Restaurant | Chineese &amp; Thai</div>
          <div className="location">Lahore, Pakistan</div>
          <div className="order flex">
            <div className="price">$25.00</div>
            <a href="#" className="btn btn-menu">
              Order Now
            </a>
          </div>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-1.jpg"
            alt=""
          />
          <div className="title">Food Restaurant | Chineese &amp; Thai</div>
          <div className="location">Lahore, Pakistan</div>
          <div className="order flex">
            <div className="price">$25.00</div>
            <a href="#" className="btn btn-menu">
              Order Now
            </a>
          </div>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-4.jpg"
            alt=""
          />
          <div className="title">Food Restaurant | Chineese &amp; Thai</div>
          <div className="location">Lahore, Pakistan</div>
          <div className="order flex">
            <div className="price">$25.00</div>
            <a href="#" className="btn btn-menu">
              Order Now
            </a>
          </div>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-5.jpg"
            alt=""
          />
          <div className="title">Food Restaurant | Chineese &amp; Thai</div>
          <div className="location">Lahore, Pakistan</div>
          <div className="order flex">
            <div className="price">$25.00</div>
            <a href="#" className="btn btn-menu">
              Order Now
            </a>
          </div>
        </div>
        <div className="menu-item">
          <img
            src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-6.jpg"
            alt=""
          />
          <div className="title">Food Restaurant | Chineese &amp; Thai</div>
          <div className="location">Lahore, Pakistan</div>
          <div className="order flex">
            <div className="price">$25.00</div>
            <a href="#" className="btn btn-menu">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Home