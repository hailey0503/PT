import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
//import Dog from "./dog_in_a_bag.jpg";



function Users() {
  return (
    <div>
    	<div className="Users">
		<Card style={{ width: '18rem' }}>
			
			<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
			<Card.Body>
				<Card.Title>My Dog</Card.Title>
				<Card.Text>
				Some quick example text to build on the card title and make up the bulk of
				the card's content.
				</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroupItem>Cras justo odio</ListGroupItem>
				<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
				<ListGroupItem>Vestibulum at eros</ListGroupItem>
			</ListGroup>
			<Card.Body>
				<Card.Link href="#">Card Link</Card.Link>
				<Card.Link href="#">Another Link</Card.Link>
			</Card.Body>
			</Card>
    	</div>
    </div>
  );
}

export default Users;
