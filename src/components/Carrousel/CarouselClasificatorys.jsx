import Carousel from 'react-bootstrap/Carousel';
import images from '../../assets/img/calendario/clasificatorio/clasificatorioImages'

function CarouselClasificatorys() {
  return (
    <Carousel indicators={false} interval={6000} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[0].name}
          alt={images[0].title}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[1].name}
          alt={images[1].title}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselClasificatorys;