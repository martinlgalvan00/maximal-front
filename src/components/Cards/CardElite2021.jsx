import Card from 'react-bootstrap/Card';
import Logo from '../Logo'
import CardElite1Images from './Cards Images/CardElite1Images'

function CardElite2021() {
  return (

    <Card className='border-0' >
      <Card.Header className='border-0 text-center' as="h2">Elite Deadlift Championship 2021</Card.Header>
      <Card.Body className='text-center'>
        <Card.Title>Primera edición - 11/07/2019</Card.Title>
        <Card.Text>
          Elite Deadlift Championship es una competencia únicamente de peso muerto. Se divide por categoría de peso y edad, ademas de tener una división entre rookie, avanzado y strongman.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0">
        <CardElite1Images />
      </Card.Footer>
    </Card>

    
  );
}

export default CardElite2021;