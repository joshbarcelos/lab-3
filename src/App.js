import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from 'react-bootstrap/Nav'


function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Josh Barcelos</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Computer programming student</Card.Subtitle>
      <Card.Text>
        Curabitur consequat mi justo, at varius lorem eleifend vel. Phasellus interdum tellus tempus iaculis efficitur. Ut vitae consectetur nibh. Cras ut nisi egestas, porta ex id, faucibus tortor. Sed pulvinar nibh quis odio bibendum, sed rutrum velit consequat. Suspendisse commodo rutrum mi eu consectetur. Etiam laoreet porttitor convallis. Vestibulum interdum et quam quis porta. Donec at fermentum est. Cras hendrerit elementum mauris, sit amet tincidunt est placerat in. Suspendisse mollis purus a pretium rhoncus. Donec in elit vel ante porttitor euismod. Maecenas cursus laoreet scelerisque.
      </Card.Text>
    </Card.Body>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Computer programming student</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Duis diam enim, rhoncus ac finibus vel, finibus ac felis. Sed dapibus erat ut mauris commodo tempus eget pharetra libero. Nullam nulla metus, pulvinar non posuere eget, malesuada non nunc. Suspendisse eu risus laoreet, efficitur sem scelerisque, tempus augue. Proin consectetur lobortis sagittis. Nunc quis sodales dolor. Ut tempor malesuada nulla, quis porta velit laoreet sit amet. Praesent ac urna sed massa lacinia elementum. Nulla semper dui vel risus accumsan suscipit. Vestibulum at gravida massa. Donec neque dui, molestie ac felis quis, eleifend faucibus lacus. Morbi ultricies quam ex, sed gravida neque iaculis in. Sed sed dapibus elit, a rhoncus ex.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Travis Teerink</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">GFX student (LOL jk)</Card.Subtitle>
        <Card.Text>
          Morbi quis sem justo. Vivamus viverra pharetra nunc, vitae consectetur mauris ullamcorper ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras a pretium lacus. Nam felis sapien, molestie in mattis et, pretium eu sem. Aenean tempor mollis felis, a lobortis purus elementum sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lobortis dui blandit, lacinia magna id, auctor dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Card.Text>
      </Card.Body>
    </Card>
  </Card>;
}

function Contact() {
  return <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Josh Barcelos</Card.Title>
      <Card.Text>
        CO-Lead Developer
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Random words about me</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href="mailto: joshbarcelos1@gmail.com">Email</Card.Link>
      <Card.Link href="realmlands.com">Website Link</Card.Link>
    </Card.Body>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>David Kuzmich</Card.Title>
        <Card.Text>
          CO-Lead Developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Random words about me</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="mailto: davidkuzmich@gmail.com">Email</Card.Link>
        <Card.Link href="realmlands.com">Website Link</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Travis Teerink</Card.Title>
        <Card.Text>
          Lead GFX
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Random words about me</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="mailto: travisteerink@gmail.com">Email</Card.Link>
        <Card.Link href="realmlands.com">Website Link</Card.Link>
      </Card.Body>
    </Card>
  </Card>;
}

function AppRouter() {
  return (
      <Router>
        <div>
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li" style={{ padding: 5 }}>
              <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item as="li" style={{ padding: 5 }}>
              <Link to="/about/">  About</Link>
            </Nav.Item>
            <Nav.Item as="li" style={{ padding: 5 }}>
              <Link to="/contact/">  Contact Us</Link>
            </Nav.Item>
          </Nav>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </div>
      </Router>
  );
}

export default AppRouter;
