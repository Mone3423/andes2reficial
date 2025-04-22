// components/Blog/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

// Datos de ejemplo para los posts
const blogPosts = [
  {
    id: 1,
    title: 'Los Mejores Trekking en Bolivia',
    excerpt: 'Descubre las rutas más impresionantes de los Andes bolivianos...',
    category: 'Aventura',
    date: '15 Mar 2024',
    readTime: '5 min',
    image: 'path/to/image1.jpg'
  },
  {
    id: 2,
    title: 'Guía Completa del Salar de Uyuni',
    excerpt: 'Todo lo que necesitas saber para visitar el mayor desierto de sal...',
    category: 'Viajes',
    date: '10 Mar 2024',
    readTime: '8 min',
    image: 'path/to/image2.jpg'
  },
  // Agrega más posts...
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
          <div className="featured-content">
            <span className="category-tag">{blogPosts[0].category}</span>
            <h2>{blogPosts[0].title}</h2>
            <p>{blogPosts[0].excerpt}</p>
            <Link to={`/blog/${blogPosts[0].id}`} className="read-more">Leer más</Link>
          </div>
        </div>

        <div className="posts-grid">
          {blogPosts.slice(1).map(post => (
            <article key={post.id} className="blog-post-card">
              <img src={post.image} alt={post.title} />
              <div className="post-content">
                <div className="post-meta">
                  <span className="category">{post.category}</span>
                  <span className="date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-footer">
                  <Link to={`/blog/${post.id}`} className="read-more">Leer más</Link>
                  <span className="read-time">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Paginación */}
        <div className="pagination">
          <button className="page-button active">1</button>
          <button className="page-button">2</button>
          <button className="page-button">3</button>
        </div>
      </section>
    </>
  );
};

export default Blog;