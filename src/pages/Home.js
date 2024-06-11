import React from 'react'
import './Home.css'
import img from '../images/img2.jpg'
import img1 from '../images/img3.jpg'
import img2 from '../images/img4.jpg'
import img3 from '../images/img5.jpg'
import img4 from '../images/img6.jpg'

function Home() {
  return (
    <div className='shop'>
      <h1>React E-commerce Shop</h1>
      <div className="change">
      <h2>New collection</h2>
      <h2>Offer 40%</h2>
      <h2><button class="btn btn-danger">Get Started</button></h2>
       </div>
      <img className='dres' src={img} height={300} width={350} />
      <br></br>
      <b>Best Collection</b>
      <div className="img">
        <div className="images">
          <img src={img1} height={200} width={250} />

          <h5>Super seller top</h5>
          <h6> Rs:500</h6>
          <button class="btn btn-success">Add to cart</button>
        </div>
        <div className="images">
          <img src={img2} height={200} width={250} />
          <h5>Men's corner</h5>
          <h6> Rs:1000</h6>
          <button class="btn btn-success">Add to cart</button>
        </div>
        <div className="images">
          <img src={img3} height={200} width={250} />
          <h5>kids collection</h5>
          <h6> Rs:500</h6>
          <button className='btn' class="btn btn-success">Add to cart</button>
        </div>
      </div>
      <br></br>
        <div className="card">
          <img src={img4} className='cards' height={200} width={300} />
        </div>
    </div>




  )
}

export default Home
