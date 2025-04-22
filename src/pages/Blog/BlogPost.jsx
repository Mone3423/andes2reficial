// components/Blog/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './BlogPost.css';
import image2 from '../../assets/images/fotos/redimensionadas/populars/LakeTiticacatour_Andes2Amazon13 .jpg'
// Datos de ejemplo (deberías obtenerlos de una API en producción)
const blogPosts = [
  {
    id: 1,
    title: 'Los Mejores Trekking en Bolivia',
    content: `
      <p>Bolivia alberga algunos de los trekking más espectaculares de Sudamérica. Desde los picos andinos hasta la selva amazónica, aquí te presentamos las mejores rutas:</p>
      
      <h2>1. El Camino del Takesi</h2>
      <p>Esta ruta precolombina de 2 días te lleva a través de paisajes que van desde la alta montaña hasta la selva subtropical...</p>
      
      <h2>2. Trekking del Sajama</h2>
      <p>Al pie del volcán más alto de Bolivia, este trekking de 3 días combina termas naturales y geiseres...</p>
      
      <img src="/ruta-imagen-trekking.jpg" alt="Trekking en Bolivia" />
    `,
    category: 'Aventura',
    date: '15 Mar 2024',
    readTime: '5 min',
    image: image2 ,
    tags: ['trekking', 'naturaleza', 'aventura']
  },
  // ... más posts
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));
  const currentIndex = blogPosts.findIndex(p => p.id === parseInt(id));
  
  // Si no encuentra el post
  if (!post) return <div className="post-not-found">Post no encontrado</div>;

  // Posts relacionados (ejemplo simple)
  const relatedPosts = blogPosts.filter(p => 
    p.id !== post.id && p.category === post.category
  ).slice(0, 3);

  return (
    <div className="blog-post-container">
        
      {/* Hero Section */}
      <div className="post-hero">
        <img src={post.image} alt={post.title} className="hero-image" />
        <div className="hero-overlay">
          <div className="breadcrumb">
            <Link to="/blog">Blog</Link> / {post.category}
          </div>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="publish-date">{post.date}</span>
            <span className="read-time">{post.readTime} de lectura</span>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <main className="post-content">
        <article dangerouslySetInnerHTML={{ __html: post.content }} />
        
        {/* Tags */}
        <div className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Compartir en redes */}
        <div className="social-sharing">
          <FacebookShareButton url={window.location.href}>
            <button className="share-button facebook">Compartir en Facebook</button>
          </FacebookShareButton>
          
          <TwitterShareButton url={window.location.href} title={post.title}>
            <button className="share-button twitter">Compartir en Twitter</button>
          </TwitterShareButton>
        </div>
      </main>

      {/* Navegación entre posts */}
      <div className="post-navigation">
        {currentIndex > 0 && (
          <Link to={`/blog/${blogPosts[currentIndex - 1].id}`} className="nav-button prev">
            <FiArrowLeft /> Post anterior
          </Link>
        )}
        
        {currentIndex < blogPosts.length - 1 && (
          <Link to={`/blog/${blogPosts[currentIndex + 1].id}`} className="nav-button next">
            Próximo post <FiArrowRight />
          </Link>
        )}
      </div>

      {/* Posts Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <h2>Posts relacionados</h2>
          <div className="related-grid">
            {relatedPosts.map(post => (
              <Link to={`/blog/${post.id}`} key={post.id} className="related-post">
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <span className="category">{post.category}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;