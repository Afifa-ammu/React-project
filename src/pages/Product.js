import React from 'react'
import './Product.css'
import omg from '../images/img19.jpg'
import flower from '../images/img21.jpg'
import lotus from '../images/img22.jpg'
import lily from '../images/img23.jpg'
import cherry from '../images/img24.jpg'
import good from '../images/img25.jpg'
import kurthi from '../images/img26.jpg'
import plazo from '../images/img27.jpg'
import media from '../images/img28.jpg'
import dark from '../images/img29.jpg'
import light from '../images/img30.jpg'
import query from '../images/img31.jpg'
function Product() {
  return (
    <div>
      <h1>Men's Corner</h1>
      <div className="container">
        <div className="images">
          <img src={omg} height={200} width={250} />
          <h5>Coat model</h5>
          <h6> Rs:1500</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
        <div className="images">
          <img src={flower} height={200} width={250} />
          <h5>Coat model</h5>
          <h6> Rs:2000</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
        <div className="images">
          <img src={lotus} height={200} width={250} />
          <h5>Marriage dresses</h5>
          <h6> Rs:2000</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
          <div className="images">
          <img src={lily} height={200} width={250} />
          <h5>Marriage dresses</h5>
          <h6> Rs:1,500</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
        <div className="images">
          <img src={cherry} height={200} width={250} />
          <h5>Marriage dresses</h5>
          <h6> Rs:2,500</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
        <div className="images">
          <img src={good} height={200} width={250} />
          <h5>Jeans model</h5>
          <h6> Rs:1,500</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
        <div className="images">
          <img src={kurthi} height={200} width={250} />
          <h5>Jeans model</h5>
          <h6> Rs:2,500</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
        <div className="images">
          <img src={plazo} height={200} width={250} />
          <h5>Jeans model</h5>
          <h6> Rs:2,000</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
        <div className="images">
          <img src={media} height={200} width={250} />
          <h5>T-shirt odel</h5>
          <h6> Rs:500</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
        <div className="images">
          <img src={dark} height={200} width={250} />
          <h5>T-shirt model</h5>
          <h6> Rs:500</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
        <div className="images">
          <img src={light} height={200} width={250} />
          <h5>T-shirt model</h5>
          <h6> Rs:500</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
        <div className="images">
          <img src={query} height={200} width={250} />
          <h5>Marrige dresses</h5>
          <h6> Rs:2,500</h6>
          <button class="btn btn-dark">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product