import React from 'react';
import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddItem from './Components/AddToDo';
import ListContainer from './Components/ListContainer';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>React with Redux Saga</h1>
            <h3>Routing | Firebase | Firestore</h3>
            <Navigation />
            <Route exact path="/" component={ListContainer} />
            <Route exact path="/new-item" component={AddItem} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
