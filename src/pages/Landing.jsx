//rafce
import { Link } from 'react-router-dom'
import React from 'react'
import landingImg from '../assets/1.jpg'
import feature1 from '../assets/2.jpg'
import feature2 from '../assets/2.jpg'
import feature3 from '../assets/2.jpg'
import { Card } from 'react-bootstrap'


const Landing = () => {
  return (
    <div style={{paddingTop:"100px"}} className='container'>
      {/**Landing */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:"justify"}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-danger'>Get Started</Link>

        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid' src={landingImg} alt="" />

        </div>
      </div>

      {/**Features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Users can explore , view and remove the videos.
        </Card.Text>
      </Card.Body>
    </Card>

          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Categorize videos</Card.Title>
        <Card.Text>
          Let you categorize your videos.
        </Card.Text>
      </Card.Body>
    </Card>

          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Users can manage the watch history of all videos.
        </Card.Text>
      </Card.Body>
    </Card>

          </div>

        </div>
      </div>

      {/*last */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro voluptatum ipsum aliquam, quod suscipit ut enim perspiciatis ipsam delectus repudiandae possimus tenetur odit a ex error pariatur libero. Dolor!</p>

          <p style={{textAlign:'justify'}}><span className='fw-bolder'>Categorize Videos</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro voluptatum ipsum aliquam, quod suscipit ut enim perspiciatis ipsam delectus repudiandae possimus tenetur odit a ex error pariatur libero. Dolor!</p>

          <p style={{textAlign:'justify'}}><span className='fw-bolder'>Managing History</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro voluptatum ipsum aliquam, quod suscipit ut enim perspiciatis ipsam delectus repudiandae possimus tenetur odit a ex error pariatur libero. Dolor!</p>

        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="360" src="https://www.youtube.com/embed/3wDiqlTNlfQ" title="LEO - Naa Ready Song Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>
      
    </div>
  )
}

export default Landing
