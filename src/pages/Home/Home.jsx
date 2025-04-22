import React from "react";
import Banner from "../../components/Banner/Banner";

import Features from "../../components/Features/Features";
import { Container, Row, Col,  } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import Cards from "../../components/Cards/Cards";
import { destinationsData, popularsDataBolivia } from "../../utils/data";
import PopularCard from "../../components/Cards/PopularCard";
import whatsappIcon from '../../assets/images/whatsapp-icon.png';
import messengerIcon from '../../assets/images/messenger-icon.png';
import Testimonials from "../../components/Common/testimonials/testimonials";



const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };



  return (
    <>

      <Banner />

      

      <Features />

      <div className="contact-widgets">
        <div
          className="whatsapp-widget"
          onClick={() =>
            window.open(
              'https://api.whatsapp.com/send/?phone=59171969465&text&type=phone_number&app_absent=0',
              '_blank'
            )
          }
        >
          <img src={whatsappIcon} alt="WhatsApp Icon" />
        </div>
        <div
          className="messenger-widget"
          onClick={() =>
            window.open(
              'https://www.messenger.com/t/356500907748837/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0',
              '_blank'
            )
          }
        >
          <img src={messengerIcon} alt="Messenger Icon" />
        </div>
      </div>
      { }

      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Top Destination For Your Next Vacation </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsData.map((destination, inx) => {
                  return (
                    <Cards destination={destination} key={inx} />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* tour seciton start */}

      <section className="popular py-5">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1> Popular Activities </h1>
            </div>
          </Col>
        </Row>
        <Row>
        <Slider {...settings}>
        {popularsDataBolivia.map((val, inx)=>{
          return(
          <Col  md={3} sm={6} xs={12} className="mb-5" key={inx}>
            <PopularCard val={val} />
          </Col>
        )
        })}
         </Slider>
        </Row>
      </Container>
    </section>

    <section className="call_us">
  <Container>
    <Row className="align-items-center">
      <Col md="8">
        <h5 className="title">Need Help?</h5>
        <h2 className="heading">
          READY FOR UNFORGETTABLE TRAVEL. REMEMBER US!
        </h2>
        <p className="text"></p>
      </Col>
      <Col md="4" className="text-center mt-3 mt-md-0">
        <a
          href="https://api.whatsapp.com/send/?phone=59171969465&text&type=phone_number&app_absent=0"
          className="secondary_btn bounce"
          rel="no"
        >
          Contact Us !
        </a>

              {/* Contenedor para los íconos, debajo del botón */}
              <div className="mt-3">
                <a href="https://www.instagram.com/andes_2_amazon/"
                  className="bi bi-instagram me-4 fs-3 text-white"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram profile"
                ></a>
                <a
                  href="https://www.facebook.com/Andes2Amazon"
                  className="bi bi-facebook fs-3 text-white"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                ></a>
              </div>
      </Col>
    </Row>
  </Container>
  <div className="overlay"></div>
</section>

<Testimonials />

        
     

    </>
  );
};

export default Home;
