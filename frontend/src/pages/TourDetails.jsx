import React from 'react';
import '../styles/tour-details.css';
import {Container,Row,Col,Form,ListGroup} from 'reactstrap';
import {useParams} from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from './../utils/avgRating';
const TourDetails = () => {
  const {id}=useParams()
  const tour=tourData.find(tour=>tour.id===id)
  const{photo,title,desc,price,address,reviews,city,distance,maxGroupSize}=tour;
  const{totalRating,avgRating}=calculateAvgRating(reviews)
  
    return <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
          <div className="tour__content">
            <img src={photo} alt="" />
            <div className="tour__info">
              <h2>{title}</h2>
              <div className="d-flex align-items-center gap-5">
              <span className='tour__rating d-flex align-items-center gap-1'>
            <i className="ri-star-s-fill" style={{'color':"var(--secondary-color)"}}></i> {calculateAvgRating===0?null:avgRating}
            {totalRating===0?(
              "Not rated"
            ):(
              <span>({reviews?.length})</span>
            )}
          </span>
           <span>
            <i className="ri-map-pin-user-fill"></i>{address}
           </span>
              </div>
              <div className="tour__extra-details">
                <span>
                  <i className="ri-map-pin-2-line"></i> {city}
                </span>
                <span>
                  <i className="ri-money-dollar-circle-line"></i> ${price} /person
                </span>
                <span>
                  <i className="ri-group-line"></i> {maxGroupSize}
                </span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>
            {/* -------------tour reviews section-------------- */}
            <div className="tour__reviews mt-4">
              <h4>Reviews ({reviews?.length} reviews)</h4>
              <Form>
                <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                     1 <span><i className="ri-star-s-fill"></i></span>
                     2 <span><i className="ri-star-s-fill"></i></span>
                     3 <span><i className="ri-star-s-fill"></i></span>
                     4 <span><i className="ri-star-s-fill"></i></span>
                     5 <span><i className="ri-star-s-fill"></i></span>
                </div>
                <div className="review__input">
                  <input type="text" placeholder='share your thoughts' />
                  <button className='btn primary__btn text-white' type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
            {/* -------------tour reviews section-------------- */}
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  
};

export default TourDetails
