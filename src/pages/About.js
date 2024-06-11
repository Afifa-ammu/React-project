import React from 'react'
import './About.css'
import omg from '../images/img7.jpg'
import flower from '../images/img8.jpg'
import lotus from '../images/img9.jpg'
import lily from '../images/img10.jpg'
import cherry from '../images/img11.jpg'
import good from '../images/img12.jpg'
import kurthi from '../images/img13.jpg'
import plazo from '../images/img14.jpg'
import media from '../images/img15.jpg'
import dark from '../images/img16.jpg'
import light from '../images/img17.jpg'
import query from '../images/img18.jpg'


function About() {
  return (
    <div className='content'>
             <h1>Top Collection</h1>
             <div className="container">
             <div className="images">
          <img src={omg} height={200} width={250} />
          <h5>Long top</h5>
          <h6> Rs:500</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div> 
        <div className="images">
          <img src={flower} height={200} width={250} />

          <h5>Long top</h5>
          <h6> Rs:400</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>
        <div className="images">
          <img src={lotus} height={200} width={250} />

          <h5>Modern top</h5>
          <h6> Rs:600</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>
          
        <div className="images">
          <img src={lily} height={200} width={250} />

          <h5>Saree's collection</h5>
          <h6> Rs:2,500</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>
        <div className="images">
          <img src={cherry} height={200} width={250} />

          <h5>Modern saree</h5>
          <h6> Rs:1500</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>
        <div className="images">
          <img src={good} height={200} width={250} />

          <h5>Embredding saree</h5>
          <h6> Rs:2,000</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>
        
        <div className="images">
          <img src={kurthi} height={200} width={250} />

          <h5>Kurthi top</h5>
          <h6> Rs:800</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>
        <div className="images">
          <img src={plazo} height={200} width={250} />

          <h5>Kurthi top</h5>
          <h6> Rs:800</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>
        <div className="images">
          <img src={media} height={200} width={250} />

          <h5>Kurthi top</h5>
          <h6> Rs:800</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>
        
        <div className="images">
          <img src={dark} height={200} width={250} />

          <h5>Long cholie</h5>
          <h6> Rs:700</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>
        <div className="images">
          <img src={light} height={200} width={250} />

          <h5>Long cholie</h5>
          <h6> Rs:700</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>
        <div className="images">
          <img src={query} height={200} width={250} />

          <h5>Long cholie</h5>
          <h6> Rs:700</h6>
          <button class="btn btn-danger">Add to cart</button>
        </div>            






        </div>
          
        

    </div>
  )
}

export default About