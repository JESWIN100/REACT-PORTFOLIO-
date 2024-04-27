import React from 'react'
import { Container } from 'react-bootstrap'

function About() {
  return (
    <Container>
      <div className="row my-3 mb-5">
        <div className="col-lg-12">
          <h4 className='text-center text-muted'>
            About me
          </h4>
          <div className="row gy-4">
            <div className="bg-base p-4 rounded-4 shadow-effect">
              <h5 className="bg-base text-muted">Mern Stack</h5>
              <p className="bg-base text-muted">I am Jeswin Joseph, an enthusiastic web development student with a strong passion for creating captivating online experiences. Currently, I am immersed in my studies in web development, where I am mastering the art of front-end and back-end coding, as well as web design principles. I thrive on the dynamic and ever-evolving nature of the web development field and am eager to contribute my skills to crafting innovative and user-friendly websites. My goal is to leverage my education and creativity to build engaging online platforms that leave a lasting impression!.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
