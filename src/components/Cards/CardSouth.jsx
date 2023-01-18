import Card from 'react-bootstrap/Card';
import Logo from '../Logo'
import CardSouthImages from './Cards Images/CardSouthImages'

function CardSouth() {
  return (

    <Card className='border-0' >
      <Card.Header className='border-0 text-center' as="h2">South America Strongest Man - 1º</Card.Header>
      <Card.Body className='text-center'>
        <Card.Title>Primera edición - 8-9/10/2022</Card.Title>
        <Card.Text>
          South Ameria Strongest Man fue un evento internacional de Strongman realizado en el transcurso de 2 días. Los eventos fueron Peso muerto, Circus dumbell, Mooring bitt, Yoke y piedra natural de 150kg. Contó con la presencia tanto de atletas de elite, como nacionales.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0">
        <CardSouthImages />
      </Card.Footer>
    </Card>

    
  );
}

export default CardSouth;