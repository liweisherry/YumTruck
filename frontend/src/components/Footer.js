import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (<footer>
      <Container>
          <Row>
              {/* padding on y xis */}
              <Col className='text-center py-3'>  
                  Copyright &copy; YumTruck</Col> 
          </Row>
      </Container>
  </footer>);
};

export default Footer;
