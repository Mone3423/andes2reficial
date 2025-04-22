import React from 'react';
import './testimonials.css';
import Usuario from '../../../assets/images/imagenUsuario.png';


const testimonialsData = [
  {
    name: "John Doe",
    image: Usuario,
    feedback: "This was an incredible experience! The tour exceeded all my expectations.",
    location: "New York, USA"
  },
  {
    name: "Jane Smith",
    image: Usuario,
    feedback: "Excellent service and friendly staff. I highly recommend them!",
    location: "Los Angeles, USA"
  },
  {
    name: "Carlos Ruiz",
    image: Usuario,
    feedback: "Great tour with lots of interesting stops. Well worth the money.",
    location: "Madrid, Spain"
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p className="testimonial-location">{testimonial.location}</p>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
