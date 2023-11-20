import React from 'react'
import {Link} from 'react-router-dom';
const NotFound = () => {
  return (
    // <div className='text-center'>
    //   <p className='display-1 fw-bold text-center mt-5'>404 - Page Not Found</p>
    //   <img src="/mypic.png" alt=""/>
    //   <br/>
    //   <Link className='btn btn-primary mt-5' to='/'>Back to Homepage</Link>
    // </div>
   
  <section className="page_404">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 ">
        <div className="col-sm-10 col-sm-offset-1  text-center">
          <div className="four_zero_four_bg">
            <h1 className="text-center ">404</h1>
          </div>
          <div className="contant_box_404">
            <h3 className="h2">Look like you're lost</h3>
            <p>the page you are looking for not available!</p>
            <a href="" className="link_404">
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </section>
  

  )
}

export default NotFound