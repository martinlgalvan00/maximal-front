import Card from 'react-bootstrap/Card';
import Logo from '../Logo'
import CardElite2Images from './Cards Images/CardElite2Images'

function CardElite2022() {
  return (

    <Card className='border-0'>
      <Card.Header className='border-0 text-center' as="h2">Elite Deadlift Championship 2022 - 3º</Card.Header>
      <Card.Body className='text-center'>
        <Card.Title>Tercer edición - 17/12/2022</Card.Title>
        <Card.Text>
          Elite Deadlift Championship es una competencia únicamente de peso muerto. Se divide por categoría de peso y edad, ademas de tener una división entre rookie, avanzado y strongman.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0 ">
        <CardElite2Images />
      </Card.Footer>
    </Card>

    
  );
}

export default CardElite2022;