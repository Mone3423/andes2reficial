// components/Blog/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import mina from '../../assets/images/fotos/redimensionadas/SalvesMines_Andes2Amazon/Potositravel_andes2amazon6 .jpg'
import image1 from '../../assets/images/fotos/redimensionadas/LaPazCity_Andes2Amazon/deathroad_andes2amazon7 .jpg';
import image2 from '../../assets/images/fotos/redimensionadas/UyuniSalesFlatandPotosiTravel_Andes2Amazon/UyuniSaltFlatsadventure_Andes2Amazon43  .jpg';
import image3 from '../../assets/images/fotos/redimensionadas/LaPazCity_Andes2Amazon/LaPazcitytour_Andes2Amazon14  .jpg'
// Datos de ejemplo para los posts
const blogPosts = [
  {
    id: 1,
    title: 'The Best Treks in Bolivia',
    excerpt: 'Discover the most impressive routes through the Bolivian Andes...',
    category: 'Adventure',
    date: 'March 15, 2024',
    readTime: '5 min',
    image: image1
  },
  {
    id: 2,
    title: 'Complete Guide to the Salar de Uyuni',
    excerpt: 'Everything you need to know to visit the world’s largest salt flat...',
    category: 'Travel',
    date: 'March 10, 2024',
    readTime: '8 min',
    image: image2
  },
  {
    id: 3,
    title: 'Discover the Mining History of Potosí: An Unforgettable Experience in the Silver Mines and the National Mint Museum',
    excerpt: "Immerse yourself in the rich mining history of Potosí exploring the legendary silver mines of Cerro Rico and the iconic National Mint Museum. A unique adventure that connects you with Bolivia's colonial legacy and living culture.",
    category: 'Travel, Adventure',
    date: 'March 10, 2024',
    readTime: '8 min',
    image: mina,
  },
  {
    id: 4,
    title: 'Discover La Paz on Foot: An Authentic Journey Through Culture, Flavors, and Traditions',
    excerpt: 'Would you like to experience La Paz in an authentic and intimate way? With our Walking Tour, explore historic streets, traditional markets, breathtaking viewpoints, and vibrant colonial squares — all guided by our local experts!',
    category: 'Travel, Adventure',
    date: 'April 20, 2024',
    readTime: '7 min',
    image: image3,
  }
];


const Blog = () => {
  return (
    <>
      <Breadcrumbs title="Explore our blog" pagename="Explore our blog" />
      <section className="blog-container">
        <div className="blog-header">
          <h1>Discover tips, guides, and travel experiences in Bolivia</h1>
        </div>

        <div className="featured-post">
          <div className="featured-image">
            <img src={blogPosts[0].image} alt={blogPosts[0].title} />
          </div>
          <Link to={`/blog/${blogPosts[0].id}`} className="read-more" >
            <div className="featured-content">
              <span className="category-tag">{blogPosts[0].category}</span>
              <h2>{blogPosts[0].title}</h2>
              <p>{blogPosts[0].excerpt}</p>
              <p className="read-more">Read more</p>
            </div>
          </Link>
        </div>

        <div className="posts-grid">
          {(blogPosts || []).slice(1).map(post => (
            post?.id ? (
              <article key={post.id} className="blog-post-card">
                <Link to={`/blog/${post.id}`}  className="read-more">
                  <img src={post.image} alt={post.title} />

                  <div className="post-content">
                    <div className="post-meta">
                      <span className="category">{post.category}</span>
                      <span className="date">{post.date}</span>
                    </div>

                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-footer">
                    <p className="read-more">Read more</p>
                      <span className="read-time">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ) : null
          ))}
        </div>

        {/* Paginación */}
        <div className="pagination">
          <button className="page-button active">1</button>
          <button className="page-button">2</button>

        </div>
      </section>
    </>
  );
};

export default Blog;