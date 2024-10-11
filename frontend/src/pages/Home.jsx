import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from "../services/ServiceList";
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

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
    </>
  );
};

export default Home;
