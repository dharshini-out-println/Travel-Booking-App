import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import experienceImg from '../assets/images/experience.png';
import worldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from "../services/ServiceList";
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/*================= hero section start ===============*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="World icon" />
                </div>
                <h1>Traveling opens the door to creating 
                  <span className="highlight"> memories</span>
                </h1>
                <p>
                  Traveling is like a game of survival: you have to navigate through airports, 
                  decipher train schedules written in a language you don't speak, and figure 
                  out how to communicate with a taxi driver using nothing but exaggerated hand 
                  gestures and a hopeful smile. You might start the journey with perfectly packed 
                  bags, but somewhere along the way, your suitcase turns into a black hole that 
                  devours socks, phone chargers, and any sense of organization you once had.
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="Hero image 1" />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} controls alt="Hero video" />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="Hero image 2" />
              </div>
            </Col>

            {/* Search Bar */}
            <Col lg='12' className="mt-4">
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>
      {/*================= hero section end ===============*/}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*===============featured tour section start================ */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*===============featured tour section end================ */}
      {/*===============experience tour section end================ */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experience <br/> we will serve you</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              <br/>
              Cumque eius hic nobis repellat ex ratione officia iste quia quidem vero?
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful trips</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
            </Col>
            <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*===============experience tour section end================ */}
      {/*===============gallery tour section start================ */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={"Gallery"}/>
            <h2 className="gallery__title">
              Visit our customers tour gallery
            </h2>
            </Col>
            <Col lg='12'>
            <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/*===============gallery tour section end================ */}
       {/*===============testimonial section start================ */}
       <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
            <Testimonials/>
            </Col>
          </Row>
        </Container>
       </section>
        {/*===============testimonial section end================ */}
        <Newsletter/>
    </>
  );
};

export default Home;
