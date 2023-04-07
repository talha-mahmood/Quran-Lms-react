import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import myimg from './download.jpeg'
const Cards=()=>{
    return(
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={myimg} />
             
              <Card.Body>
                <Card.Title>Courses</Card.Title>
                <Card.Text>
                  6 Month course
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )
}
export default Cards