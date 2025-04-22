import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ImageGallery from "react-image-gallery";
import "../Tours/tour.css";
import { tourDetailsDataBolivia } from "../../utils/data"; // Asegúrate de exportar los datos como 'tourDetailsDataBolivia'

import {
  Container,
  Row,
  Nav,
  Col,
  Tab,
  ListGroup,
  Accordion,
  Card,
  Stack,
} from "react-bootstrap";

const TourDetails = () => {
  const { id } = useParams(); // Obtiene el id del tour de la URL
  const tour = tourDetailsDataBolivia.find((tour) => tour.id === parseInt(id)); // Busca el tour correspondiente en los datos

  // Hooks deben estar siempre al inicio del componente
  const [numParticipants, setNumParticipants] = useState(1);

  useEffect(() => {
    document.title = "Tour Details";
    window.scrollTo(0, 0);
  }, []);

  // Lógica de cálculo del precio total
  const calculatePrice = () => {
    return tour?.price?.[numParticipants] ? tour.price[numParticipants] * numParticipants : 0;
  };

  // Mostrar mensaje de error si no se encuentra el tour
  if (!tour) {
    return <div>Tour no encontrado</div>;
  }


  return (
    <>
      <Breadcrumbs
        title={tour.title}
        pagename={<NavLink to="/tours">Tours</NavLink>}
        childpagename={tour.title}
      />

      <section className="tour_details py-5">
        <Container>
          <Row>
            <h1 className="fs-2 font-bold mb-4">{tour.title}</h1>
            <ImageGallery
              items={tour.images || []} // Si 'images' no está definido, usa un arreglo vacío
              showNav={false}
              showBullets={false}
              showPlayButton={false}
              autoPlay={true} // Activa el autoplay
              slideInterval={2500} // Cambia la imagen cada 3 segundos
            />


            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Row className="py-5">
                <Col md={8} className="mb-3 mb-md-0">
                  <Col md={12}>
                    <Nav variant="pills" className="flex-row nav_bars rounded-2">
                      <Nav.Item>
                        <Nav.Link eventKey="1">Overview</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2">Itinerary</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3">Inclusions & Exclusions</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="4">More information</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  {/* Overviwsection */}
                  <Tab.Content className="mt-4">
                    <Tab.Pane eventKey="1">
                      <div className="tour_details">
                        <h1 className="font-bold mb-2 h3 border-bottom pb-2">Overview</h1>
                        <p className="body-text">{tour.description}</p>

                        <h5 className="font-bold mb-2 h5 mt-3">Tour Info</h5>
                        <ListGroup>
                          {(Array.isArray(tour.tourInfo) ? tour.tourInfo : []).map((val, index) => (
                            <ListGroup.Item
                              className="border-0 pt-0 body-text"
                              key={index}
                              dangerouslySetInnerHTML={{ __html: val }}
                            ></ListGroup.Item>
                          ))}
                        </ListGroup>

                        <h5 className="font-bold mb-2 h5 mt-3">Tour highlights</h5>
                        {(Array.isArray(tour.highlights) ? tour.highlights : []).map((val, index) => (
                          <ListGroup.Item className="border-0 pt-0 body-text" key={index}>
                            {val}
                          </ListGroup.Item>
                        ))}
                      </div>
                    </Tab.Pane>
                    {/* Itinerarysection */}
                    <Tab.Pane eventKey="2">
                      <div className="tour_details">
                        <h1 className="font-bold mb-2 h3 border-bottom pb-2">Itinerary</h1>
                        <Accordion defaultActiveKey="0" className="mt-4">
                          {(Array.isArray(tour.itinerary) ? tour.itinerary : []).map((val, index) => (
                            <Accordion.Item eventKey={index} key={index} className="mb-4">
                              <Accordion.Header>
                                <h1 dangerouslySetInnerHTML={{ __html: val.title }}></h1>
                              </Accordion.Header>
                              <Accordion.Body className="body-text">{val.des}</Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion>
                      </div>
                    </Tab.Pane>
                    {/* inclusion&exclusionsection */}
                    <Tab.Pane eventKey="3">
                      <div className="tour_details">
                        <h1 className="font-bold mb-2 h3 border-bottom pb-2">Inclusions & Exclusions</h1>

                        <h5 className="font-bold mb-3 h5 mt-3">Inclusion</h5>
                        {Array.isArray(tour.included) && tour.included.length > 0 ? (
                          tour.included.map((val, index) => (
                            <ListGroup.Item
                              className="border-0 pt-0 body-text d-flex align-items-center"
                              key={index}
                            >
                              <i className="bi bi-check-lg me-2 text-success h4 m-0"></i> {val}
                            </ListGroup.Item>
                          ))
                        ) : (
                          <p className="text-muted">Inclusions not available.</p>
                        )}

                        <h5 className="font-bold mb-3 h5 mt-3">Exclusion</h5>
                        {Array.isArray(tour.exclusion) && tour.exclusion.length > 0 ? (
                          tour.exclusion.map((val, index) => (
                            <ListGroup.Item
                              className="border-0 pt-0 body-text d-flex align-items-center"
                              key={index}
                            >
                              <i className="bi bi-x-lg me-2 text-danger h5 m-0"></i> {val}
                            </ListGroup.Item>
                          ))
                        ) : (
                          <p className="text-muted">Exclusions not available.</p>
                        )}
                      </div>
                    </Tab.Pane>
                    {/* Moreinformation        section */}
                    <Tab.Pane eventKey="4">
                      <div className="tour_details">
                        <h1 className="font-bold mb-4 h3 border-bottom pb-2">More information</h1>
                        {Array.isArray(tour.additionalInformation) && tour.additionalInformation.length > 0 ? (
                          tour.additionalInformation.map((val, index) => (
                            <ListGroup.Item
                              className="border-0 pt-0 body-text"
                              key={index}
                              dangerouslySetInnerHTML={{ __html: val }}
                            ></ListGroup.Item>
                          ))
                        ) : (
                          <p>No additional information available for this tour.</p>
                        )}

                        <h5 className="font-bold mb-4 h5 border-bottom pb-2">Suggested Packing List</h5>
                        {Array.isArray(tour.suggestedPackingList) && tour.suggestedPackingList.length > 0 ? (
                          tour.suggestedPackingList.map((val, index) => (
                            <ListGroup.Item
                              className="border-0 pt-0 body-text"
                              key={index}
                              dangerouslySetInnerHTML={{ __html: val }}
                            ></ListGroup.Item>
                          ))
                        ) : (
                          <p>No suggested packing list available for this tour.</p>
                        )}

                        <h5 className="font-bold mb-4 h5 border-bottom pb-2">Additional Costs</h5>
                        {Array.isArray(tour.additionalCosts) && tour.additionalCosts.length > 0 ? (
                          tour.additionalCosts.map((val, index) => (
                            <ListGroup.Item
                              className="border-0 pt-0 body-text"
                              key={index}
                              dangerouslySetInnerHTML={{ __html: val }}
                            ></ListGroup.Item>
                          ))
                        ) : (
                          <p>No additional costs information available for this tour.</p>
                        )}
                      </div>
                    </Tab.Pane>

                  </Tab.Content>
                </Col>
                 {/* BOOKING calculos*/}
                <Col md={4}>
                  <aside>
                    <Card className="rounded-3 p-2 shadow-sm mb-4 price-info">
                      <Card.Body>
                        {/* Precio por persona */}
                        <Stack gap={2} direction="horizontal">
                          <h1 className="font-bold mb-0 h2">${tour.price[numParticipants] || "N/A"}</h1>
                          <span className="fs-4"> /person</span>
                        </Stack>

                        {/* Calificación y reseñas */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <ListGroup horizontal>
                            <ListGroup.Item className="border-0 me-2 fw-bold">{tour.rating}</ListGroup.Item>
                            <ListGroup.Item className="border-0 me-1 text-warning">
                              <i className="bi bi-star-fill"></i>
                            </ListGroup.Item>
                          </ListGroup>
                          <h5 className="h6">({tour.reviews})</h5>
                        </div>

                        <div className="price-calculator" style={{ marginTop: "20px" }}>
                          <label
                            htmlFor="participants"
                            style={{
                              display: "block",
                              fontWeight: "bold",
                              marginBottom: "8px",
                              fontSize: "16px",
                            }}
                          >
                            Number of Participants:
                          </label>
                          <select
                            id="participants"
                            value={numParticipants}
                            onChange={(e) => setNumParticipants(parseInt(e.target.value))}
                            style={{
                              width: "100%",
                              padding: "8px",
                              fontSize: "16px",
                              marginBottom: "16px",
                              border: "1px solid #ddd",
                              borderRadius: "5px",
                            }}
                          >
                            {Object.keys(tour.price).map((pax) => (
                              <option key={pax} value={pax}>
                                {pax}
                              </option>
                            ))}
                          </select>

                          {/* Precio calculado */}
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: "18px",
                              margin: "10px 0",
                              color: "#555",
                            }}
                          >
                            Price per person: <span style={{ color: "#007bff" }}>${tour.price[numParticipants] || "N/A"}</span>
                          </p>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: "24px",
                              margin: "15px 0",
                              color: "#0a0a0a",
                            }}
                          >
                            Total price: ${calculatePrice()}
                          </p>
                        </div>

                        <NavLink to="/" className="primaryBtn w-100 d-flex justify-content-center fw-bold">
                          Book Now
                        </NavLink>
                      </Card.Body>
                    </Card>



                    <Card className="card-info p-2 shadow-sm">
                      <Card.Body>
                        <h1 className="font-bold mb-2 h3">Need Help ?</h1>
                        <ListGroup>
                          <ListGroup.Item className="border-0"><i className="bi bi-whatsapp me-1"></i> Call us on: <strong>+591 719-69465</strong></ListGroup.Item>
                          <ListGroup.Item className="border-0"><i className="bi bi-alarm me-1"></i> Timing: <strong>9AM to 7PM</strong></ListGroup.Item>
                          <ListGroup.Item className="border-0"><strong><i className="bi bi-headset me-1"></i> Let us call you</strong></ListGroup.Item>
                          <ListGroup.Item className="border-0"><i className="bi bi-calendar-check me-1"></i> <strong> Book Appointments</strong></ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </aside>
                </Col>

              </Row>
            </Tab.Container>
          </Row>
        </Container>
      </section>
      <section className="faq-section py-5">
        <Container>
          <h2 className="font-bold mb-4 h4">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            {/* Accede a las FAQs de tour con tour.faqs */}
            {tour.faqs && tour.faqs.map((faq, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
