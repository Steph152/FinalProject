import Carousel from 'react-bootstrap/Carousel';
import '../App.css'


function HomeCarousel() {
  return (
    <Carousel className="container">
      <Carousel.Item>
        <img
          className="carousel"
          src={require('./carouselcomponents/planting.jpg')}
          alt="Planting Flowers"
        />
        <Carousel.Caption>
          <h1>Intuitive Interface</h1>
          <h3>Our easy to learn and use software helps you focus on getting to work.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={require('./carouselcomponents/mosses.jpg')}
          alt="Succulents"
        />

        <Carousel.Caption>
          <h1>Intelligent Inventory</h1>
          <h3>Track inventory, plant health, jobs and more.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={require('./carouselcomponents/gardenguy.jpg')}
          alt="Tech in the Nursery"
        />

        <Carousel.Caption>
          <h1>Interactive Information</h1>
          <h3>Everything you need, at your fingertips.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;