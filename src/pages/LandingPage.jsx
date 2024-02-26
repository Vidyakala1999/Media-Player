import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h6 style={{textAlign:"justify" }}>Welcome to <span className='text-warning'>Media Player</span></h6>
        <p className='pp' style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quidem atque perferendis sint porro praesentium cum magni iure corporis molestias adipisci qui, obcaecati itaque quis vel facilis nihil aut vitae.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started</button>
      </Col>
      <Col lg={5}>
        <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="bb" />
      </Col>
      <Col></Col>
    </Row>
    <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
      <h3>Features</h3>
      <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
      <Card className='p-3 bg-info' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-3 bg-info' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/80/29/fd/8029fd3454481e5c7be1f585fcbf5fd9.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-3 bg-info' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
    </div>


    <div className='container border-rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100'>
      <div className='col-lg-5'>
        <h3 className='mb-3 text-warning'>Simple,Powerful & Fast</h3>
        <h6 className='mb-5' style={{textAlign:"justify"}}><span className='fs-5 fw-bolder text-warning'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus eligendi natus, distinctio facere cupiditate quaerat illum, voluptates tempore nesciunt, ab molestiae magni voluptas nam sint. Esse nulla ratione natus!</h6>

        <h6 className='mb-5'  style={{textAlign:"justify"}}><span className='fs-5 fw-bolder text-warning'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus eligendi natus, distinctio facere cupiditate quaerat illum, voluptates tempore nesciunt, ab molestiae magni voluptas nam sint. Esse nulla ratione natus!</h6>

        <h6 className='mb-5'  style={{textAlign:"justify"}}><span className='fs-5 fw-bolder text-warning'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus eligendi natus, distinctio facere cupiditate quaerat illum, voluptates tempore nesciunt, ab molestiae magni voluptas nam sint. Esse nulla ratione natus!</h6>
      </div>
      <div className="video" col-lg-5>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Bk-VNckXMZ8?si=Fw-u4b5Xb7kZ2-0S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </>
  )
}

export default LandingPage