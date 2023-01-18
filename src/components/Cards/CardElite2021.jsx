import Card from 'react-bootstrap/Card';
import Logo from '../Logo'

import CardPrimerElite from './Cards Images/CardPrimerEliteImages'

function CardElite2021() {
  return (

    <Card className='border-0' >
      <Card.Header className='border-0 text-center' as="h2">Elite Deadlift Championship 2021 - 2º</Card.Header>
      <Card.Body className='text-center'>
        <Card.Title>Segunda edición - 25/06/2022</Card.Title>
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

export default CardElite2021;