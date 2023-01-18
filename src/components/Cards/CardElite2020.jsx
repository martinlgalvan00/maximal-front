import Card from 'react-bootstrap/Card';
import Logo from '../Logo'
import CardPrimerElite from './Cards Images/CardPrimerEliteImages'

function CardElite2020() {
  return (

    <Card className='border-0' >
      <Card.Header className='border-0 text-center' as="h2">Elite Deadlift Championship 2021 - 1º</Card.Header>
      <Card.Body className='text-center'>
        <Card.Title>Primera edición - 11/12/2021</Card.Title>
        <Card.Text>
          Elite Deadlift Championship es una competencia únicamente de peso muerto. Se divide por categoría de peso y edad, ademas de tener una división entre rookie, avanzado y strongman.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0">
        <CardPrimerElite />
      </Card.Footer>
    </Card>

    
  );
}

export default CardElite2020;