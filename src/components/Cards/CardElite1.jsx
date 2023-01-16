import Card from 'react-bootstrap/Card';
import Logo from './../Logo'
import CardElite1Images from './Cards Images/CardEliteImages'

function CardElite1() {
  return (
    <Card className="text-center">
      <Card.Header as="h2">Elite Deadlift Championship 1</Card.Header>
      <Card.Body>
        <Card.Title>Primera edición - 11/07/2019</Card.Title>
        <Card.Text>
          Elite Deadlift Championship es una competencia únicamente de peso muerto. Se divide por categoría de peso y edad, ademas de tener una división entre rookie, avanzado y strongman.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <CardElite1Images />
      </Card.Footer>
    </Card>
  );
}

export default CardElite1;