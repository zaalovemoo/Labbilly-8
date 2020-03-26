import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={process.env.PUBLIC_URL+'/GiornoAV (2).png'} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Theerasuwat Thungthanaphon (610610590)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/Labbilly-8/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
