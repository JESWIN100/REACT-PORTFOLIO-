import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import twitter from "../images/Twitter.png";

function Project() {
  return (
    <div className='my-3'>
      <Container>
        <Card style={{ width: '' }}>
          <Card.Img variant="top" src="https://jeswin100.github.io/Portfolio_Validated/Screenshot%202024-01-31%20091237.png" />
          <Card.Body>
            <Card.Title>Xiaomi</Card.Title>
            <Card.Text className='text-secondary'>
              Build a user-friendly site with optimized content, fast loading, mobile responsiveness, integrated social media, and prioritize security through regular updates.
            </Card.Text>
            <Button href='https://jeswin100.github.io/Mi-xiomi/' variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        
        <Card style={{ margin: '10px' }}>
          <Card.Img variant="top" src="https://jeswin100.github.io/Portfolio_Validated/Screenshot%202023-09-15%20220604.png" />
          <Card.Body>
            <Card.Title>Messenger</Card.Title>
            <Card.Text className='text-secondary'>
              Facebook Messenger is an app for chatting, calling, and sharing with friends.
            </Card.Text>
            <Button href={twitter} variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> <Card style={{ margin: '10px' }}>
          <Card.Img variant="top" src={twitter} />
          <Card.Body>
            <Card.Title>Twitter</Card.Title>
            <Card.Text className='text-secondary'>
            Twitter, Inc. was an American social media company based in San Francisco, California, which operated and was named for its flagship social media network prior to its rebrand as X. In addition to Twitter, the company previously operated the Vine short video app and Periscope livestreaming service.
            </Card.Text>
            <Button href='https://jeswin100.github.io/Twitter/' >Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Project;
