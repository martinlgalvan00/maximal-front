import Card from 'react-bootstrap/Card';
import Logo from '../Logo'
import CardCopaImages from './Cards Images/CardCopaImages'

function CardCopaPitbull() {
  return (

    <Card className='border-0'>
      <Card.Header className='border-0 text-center' as="h2">Copa Pitbull</Card.Header>
      <Card.Body className='border-0 text-center'>
        <Card.Title>Primera edición - 11/07/2019</Card.Title>
        <Card.Text>
          La Copa Pitbull fue un evento realizado en el transcurso de dos días. Contó con categoría amateur y profesional. Más de 250 atletas, transmitido en vivo y fotos profesionales.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0">
        <CardCopaImages />
      </Card.Footer>
    </Card>

    
  );
}

export default CardCopaPitbull;