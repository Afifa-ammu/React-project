import React from 'react'
import './Service.css'
import omg from '../images/img32.jpg'
import flower from '../images/img33.jpg'
import lotus from '../images/img34.jpg'
import lily from '../images/img35.jpg'
import cherry from '../images/img36.jpg'
import good from '../images/img37.jpg'
import kurthi from '../images/img38.jpg'
import plazo from '../images/img39.jpg'
import media from '../images/img40.jpg'
import dark from '../images/img41.jpg'
import light from '../images/img42.jpg'
import query from '../images/img43.jpg'
function Service() {
  return (
    <div>
        <h1>Kid's Section</h1>
        <div className="container">
        <div className="images">
          <img src={omg} height={200} width={250} />
          <h5>Long top</h5>
          <h6> Rs:1500</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
        <div className="images">
          <img src={flower} height={200} width={250} />
          <h5>Long top</h5>
          <h6> Rs:1,500</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
        <div className="images">
          <img src={lotus} height={200} width={250} />
          <h5>cholie model</h5>
          <h6> Rs:2000</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
          <div className="images">
          <img src={lily} height={200} width={250} />
          <h5>Long top</h5>
          <h6> Rs:1,500</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
        <div className="images">
          <img src={cherry} height={200} width={250} />
          <h5>Shara model</h5>
          <h6> Rs:2,500</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
        <div className="images">
          <img src={good} height={200} width={250} />
          <h5>Long model</h5>
          <h6> Rs:1,500</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
        <div className="images">
          <img src={kurthi} height={200} width={250} />
          <h5>Coat shot</h5>
          <h6> Rs:2,500</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
        <div className="images">
          <img src={plazo} height={200} width={250} />
          <h5>Coat shot</h5>
          <h6> Rs:2,000</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
        <div className="images">
          <img src={media} height={200} width={250} />
          <h5>Coat shot</h5>
          <h6> Rs:500</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
        <div className="images">
          <img src={dark} height={200} width={250} />
          <h5>T-shirt model</h5>
          <h6> Rs:500</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
        <div className="images">
          <img src={light} height={200} width={250} />
          <h5>T-shirt model</h5>
          <h6> Rs:500</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
        <div className="images">
          <img src={query} height={200} width={250} />
          <h5>T-shirt</h5>
          <h6>Rs:600</h6>
          <button class="btn btn-info">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Service