// components/Blog/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './BlogPost.css';
import image2 from '../../assets/images/fotos/redimensionadas/LaketitcacatourandCopacabanatravel/LakeTiticacatour_Andes2Amazon21  .jpg'
import lakeTiticaca from '../../assets/images/fotos/redimensionadas/LaketitcacatourandCopacabanatravel/copacabanatravel_andes2amazon2 .jpg';
import takesi from '../../assets/images/fotos/redimensionadas/Destinos/DeathRoad.jpg';
import potosiImage from '../../assets/images/fotos/redimensionadas/Destinos/Sajama.jpg'
import sajama from '../../assets/images/fotos/redimensionadas/UyuniSalesFlatandPotosiTravel_Andes2Amazon/UyuniSaltFlatsadventure_Andes2Amazon6  .jpg'
import image3 from '../../assets/images/fotos/redimensionadas/UyuniSalesFlatandPotosiTravel_Andes2Amazon/UyuniSaltFlatsadventure_Andes2Amazon12  .jpg'
import Witches from '../../assets/images/fotos/redimensionadas/LaPazCity_Andes2Amazon/LaPazcitytour_Andes2Amazon14  .jpg'
import market from '../../assets/images/fotos/redimensionadas/LaPazCity_Andes2Amazon/LaPazUrbanAdventures_Andes2Amazon13  .jpg'
import killi from '../../assets/images/fotos/redimensionadas/LaPazCity_Andes2Amazon/LaPazcitytour_Andes2Amazon16  .jpg'
import food from '../../assets/images/fotos/redimensionadas/LaPazCity_Andes2Amazon/LaPazUrbanAdventures_Andes2Amazon2  .jpg'
import cable from '../../assets/images/fotos/redimensionadas/LaPazCity_Andes2Amazon/LaPazcitytour_Andes2Amazon6  .jpg'
import cable1 from '../../assets/images/fotos/redimensionadas/LaPazCity_Andes2Amazon/LaPazUrbanAdventures_Andes2Amazon20  .jpg'
import food1 from '../../assets/images/fotos/redimensionadas/LaPazCity_Andes2Amazon/LaPazcitytour_Andes2Amazon5  .jpg'
import murillo from '../../assets/images/fotos/redimensionadas/LaPazCity_Andes2Amazon/LaPazUrbanAdventures_Andes2Amazon68  .jpg'
import cerro from '../../assets/images/fotos/redimensionadas/UyuniSalesFlatandPotosiTravel_Andes2Amazon/Potositravel_andes2amazon2 .jpg'
import cerro3 from '../../assets/images/fotos/redimensionadas/UyuniSalesFlatandPotosiTravel_Andes2Amazon/Potositravel_andes2amazon24 .jpg'
import cerro0 from '../../assets/images/fotos/redimensionadas/SalvesMines_Andes2Amazon/Potositravel_andes2amazon13 .jpg'
import cerro1 from '../../assets/images/fotos/redimensionadas/SalvesMines_Andes2Amazon/Potositravel_andes2amazon9 .jpg'
import cerro2 from '../../assets/images/fotos/redimensionadas/SalvesMines_Andes2Amazon/Potositravel_andes2amazon5 .jpg'
// Datos de ejemplo (deberías obtenerlos de una API en producción)

const blogPosts = [
  {
    id: 1,
    title: 'The Best Treks in Bolivia',
    content: `
  <p>Bolivia, with its diverse geography and culture, offers some of the most impressive trekking routes in South America. From ancient Inca trails to surreal landscapes, each path promises a unique experience. Here’s a look at the top routes for hiking enthusiasts:</p>

  <h2>1. Takesi Trail: A Journey into the Inca Past</h2>
  <img src="${takesi}" alt="Camino del inca" />
  <p>This pre-Columbian trail takes you from the heights of the Cordillera Real down to the subtropical Yungas valleys. Over about 40 km, you’ll walk along ancient cobblestones, cross stone bridges, and experience dramatic altitude changes. It’s one of the best-preserved routes from the old Inca Empire.</p>
  <p><strong>Tip:</strong> Pack for both cold and warm weather, as temperatures vary significantly along the route.</p>

  <h2>2. Trekking in Sajama National Park: Pure Nature</h2>
  <img src="${sajama}" alt="Sajama National Park" />
  <p>At the foot of the mighty Nevado Sajama, Bolivia’s highest peak, this 3–4 day trek immerses you in a landscape of geysers, hot springs, and vast Altiplano plains. Spot vicuñas, llamas, and alpacas in their natural habitat. The starry nights here are simply unforgettable.</p>
  <p><strong>Tip:</strong> Due to the altitude, proper acclimatization is essential before starting the hike.</p>

  <h2>3. El Choro: Descent from the Andes to the Jungle</h2>
  <p>This ancient Inca trail starts at over 4,800 meters above sea level and descends to 1,300 meters, passing through diverse ecosystems. Along its 50 km, you’ll encounter archaeological ruins, hanging bridges, and lush tropical vegetation. It’s one of the most popular routes thanks to its beauty and diversity.</p>
  <p><strong>Tip:</strong> Use trekking poles to help with the descent and protect your knees.</p>

  <h2>4. Isla del Sol: Mysticism on Lake Titicaca</h2>
  <img src="${lakeTiticaca}" alt="Lake Titicaca Tour" />
   <p>Considered the cradle of Inca civilization, Isla del Sol offers trails connecting local communities, ancient ruins, and panoramic viewpoints over the world’s highest navigable lake. It’s a cultural and spiritual walk that blends history and nature.</p>
  <p><strong>Tip:</strong> Respect local customs and avoid leaving litter on the island.</p>

  <h2>5. Che Route: History and Nature in Bolivia’s Valleys</h2>
  <p>Following in the footsteps of Che Guevara, this 3–4 day route combines mountainous landscapes, crystal-clear rivers, and villages rich in history. Beyond its historical value, it’s a deep dive into rural Bolivian life and the biodiversity of the inter-Andean valleys.</p>
  <p><strong>Tip:</strong> Hire local guides to gain deeper insight into the region’s history and culture.</p>

  <h2>General Trekking Tips in Bolivia</h2>
  <p><strong>Acclimatization:</strong> Many routes are at high altitude. Spend at least two days acclimatizing before starting demanding hikes.</p>
  <p><strong>Proper Gear:</strong> Bring layered clothing, sunscreen, insect repellent, and plenty of water.</p>
  <p><strong>Cultural Respect:</strong> Interact with local communities respectfully and considerately.</p>
  <p><strong>Safety:</strong> Let someone know your itinerary and consider hiring local guides for less-traveled routes.</p>

  <p>Bolivia captivates adventurers with its rich landscapes and cultures. Every trekking route is a chance to connect with the country’s nature and history. Lace up your boots and discover the wonders Bolivia has to offer!</p>
`,
    category: 'Adventure',
    date: 'March 15, 2024',
    readTime: '5 min',
    image: image2,
    tags: ['trekking', 'nature', 'adventure']

  },
  {
    id: 2,
    title: 'Complete Guide to the Salar de Uyuni',
    content: `
  <p>The Salar de Uyuni, located in southwestern Bolivia, is the world’s largest salt flat, covering over 10,000 square kilometers. This vast white expanse offers surreal landscapes, natural mirrors during the rainy season, and a unique cultural richness. Here’s everything you need to know to plan your visit to this stunning destination.</p>

  <h2>What is the Salar de Uyuni and Where is it Located?</h2>
  <p>Formed thousands of years ago after the evaporation of prehistoric lakes, the Salar de Uyuni sits at about 3,700 meters above sea level, spanning the departments of Potosí and Oruro. Besides being a natural wonder, it holds one of the world’s largest lithium reserves.</p>

  <h2>Best Time to Visit</h2>
  <p><strong>Rainy season (December–April):</strong> A thin layer of water creates a mirror effect that reflects the sky, offering incredible photo opportunities. Note: some areas may be inaccessible due to flooding.</p>
  <p><strong>Dry season (May–November):</strong> The salt flat dries out completely, allowing access to places like Incahuasi Island. Ideal for 4x4 exploration with clear skies and stable temperatures.</p>

  <h2>How to Get There</h2>
  <p><strong>From La Paz:</strong> A 1-hour flight or a 10–12 hour overnight bus.</p>
  <p><strong>From Sucre or Potosí:</strong> Daily buses, 7–9 hours.</p>
  <p><strong>From San Pedro de Atacama (Chile):</strong> Multi-day tours (3–4 days) cross the border and include the salt flat.</p>

  <h2>Tour Options</h2>
  <p><strong>1-day tours:</strong> Visit the Train Cemetery, Colchani, the salt flat, and Incahuasi Island.</p>
  <p><strong>3-day/2-night tours:</strong> Explore the salt flat, colored lagoons, geysers, and the Dalí Desert with basic accommodations or salt hotels.</p>
  <p><strong>Customized tours:</strong> Some agencies offer tailored itineraries based on your interests and time.</p>

  <h2>Main Attractions</h2>
  <p><strong>Train Cemetery:</strong> Near Uyuni, a field of 19th-century rusted locomotives — a nostalgic and photogenic spot.</p>
  <p><strong>Colchani:</strong> A small village where you can learn about salt extraction and buy local crafts.</p>
  <p><strong>Incahuasi Island:</strong> A cactus-covered island with panoramic views.</p>
  <p><strong>Dakar Rally Monument:</strong> A tribute to the famous rally that crossed the salt flat in past editions.</p>
  <p><strong>Altiplanic Lagoons:</strong> Such as Laguna Colorada and Laguna Verde, home to flamingos and surrounded by volcanic landscapes.</p>

  <h2>Practical Tips</h2>
  <p><strong>Acclimatization:</strong> Spend a few days in high-altitude cities like La Paz or Potosí beforehand.</p>
  <p><strong>Gear:</strong> Dress in layers, bring sunscreen, sunglasses, a hat, and plenty of water.</p>
  <p><strong>Photography:</strong> Bring a camera and extra batteries — the salt flat is perfect for creative photos and perspective shots.</p>
  <p><strong>Safety:</strong> If self-driving, have off-road experience and a reliable GPS. However, guided tours are highly recommended.</p>

  <h2>Where to Stay</h2>
  <p><strong>Salt hotels:</strong> Unique accommodations built entirely from salt.</p>
  <p><strong>Hostels and basic lodges:</strong> Budget-friendly options available in Uyuni and nearby towns.</p>

  <h2>FAQ</h2>
  <p><strong>Is it safe to visit?</strong> Yes, as long as you follow safety advice and use reputable tour operators.</p>
  <p><strong>Can I visit on my own?</strong> It’s possible but not recommended due to poor signage and navigation challenges — guided tours are best.</p>
  <p><strong>What clothes should I pack?</strong> Layered clothing: warm clothes for cold nights, light clothes for daytime, and sun protection.</p>
`,
    category: 'Adventure',
    date: 'May 3, 2025',
    readTime: '7 min',
    image: image3,
    tags: ['salt flat', 'nature', 'Bolivia']

  },

  {
    id: 3,
    title: 'Discover the Mining History of Potosí: An Unforgettable Experience in the Silver Mines and the National Mint Museum',
    content: `
    <p>Potosí, known as the "Imperial City," stands as a living testament to the wealth and hardship that defined the colonial era in South America. Its silver mines, especially those of Cerro Rico, powered the Spanish Empire’s economy, while the National Mint transformed the extracted riches into coins that circulated worldwide. Today, these historical gems offer visitors a deep dive into the past and an immersive experience of mining life.</p>
   <img src="${cerro1}" alt="Sales Mines" />
    <h2>Explore the Depths of Cerro Rico</h2>
    <img src="${cerro}" alt="Sales Mines" />
    <h3>An Underground Adventure</h3>
    <p>Entering the mines of Cerro Rico is like traveling back in time. Equipped with a helmet, headlamp, and boots, you’ll navigate narrow tunnels that reveal the harsh working conditions miners have faced for centuries. Local guides share fascinating stories about mining history, the techniques used, and ancestral beliefs like the veneration of the "Tío de la Mina," the protective deity of the underworld.</p>
  
    <h3>The Reality of the Miners</h3>
     <img src="${cerro0}" alt="Sales Mines" />
    <p>These tours are not only educational but deeply moving. Some tours allow you to interact with active miners, offering an authentic glimpse into their daily lives. It’s an opportunity to reflect on the social impact of mining in Bolivia and the remarkable resilience of its people.</p>
  
    <h2>Visit the National Mint Museum</h2>
    <h3>A Museum of Historical Treasures</h3>
     <img src="${cerro3}" alt="Sales Mines" />
    <p>Located in the heart of Potosí, the National Mint Museum is an architectural monument that tells the country’s economic story. Built in the 18th century, the museum houses an impressive collection of coin-minting machinery, as well as exhibitions of colonial art and numismatics.</p>
  
    <h3>Tour Highlights</h3>
    <ul>
      <li><strong>Minting Machinery:</strong> Original presses and tools that show how coins were produced.</li>
      <li><strong>Art Galleries:</strong> Paintings and sculptures reflecting the cultural richness of the colonial era.</li>
      <li><strong>Temporary Exhibitions:</strong> Displays covering various aspects of Bolivian history and culture.</li>
    </ul>
  
    <h2>Tips for an Enriching Experience</h2>
     <img src="${cerro2}" alt="Sales Mines" />
    <ul>
      <li><strong>Physical Preparation:</strong> Potosí sits over 4,000 meters (13,000 feet) above sea level. Take time to acclimatize and stay hydrated.</li>
      <li><strong>Appropriate Clothing:</strong> For the mine tours, wear comfortable, warm clothes, as temperatures can vary inside the tunnels.</li>
      <li><strong>Cultural Respect:</strong> Show respect for local beliefs during tours and follow the guides’ instructions.</li>
    </ul>
  
    <h2>Conclusion</h2>
    <p>Exploring the silver mines of Cerro Rico and the National Mint Museum means stepping into a fundamental part of Bolivia’s—and the world’s—history. This experience blends adventure, education, and reflection, leaving a lasting impression on every visitor. If you want to connect with the past and understand Potosí’s cultural wealth, this journey is a must.</p>
  
    <h2>Frequently Asked Questions</h2>
    <p><strong>Is it safe to visit the Cerro Rico mines?</strong><br>
    Yes, as long as you go with authorized tour operators who provide proper equipment and experienced guides.</p>
  
    <p><strong>What are the National Mint Museum’s opening hours?</strong><br>
    Generally, it’s open Tuesday to Saturday, from 9:00 AM to 12:00 PM and 2:30 PM to 6:30 PM. It’s recommended to check current schedules before your visit.</p>
  
    <p><strong>Do I need to book tours in advance?</strong><br>
    To ensure your spot and have the best experience, it’s recommended to book ahead, especially during peak season.</p>
    `,
    category: 'Cultural Travel',
    date: 'April 20, 2024',
    readTime: '6 min',
    image: potosiImage, // asegúrate de importar esta imagen arriba como: import potosiImage from '../../assets/images/fotos/redimensionadas/potosi.jpg';
    tags: ['history', 'culture', 'mining', 'Bolivia']
  },
  {
    id: 4,
    title: 'Discover La Paz on Foot: An Authentic Journey Through Culture, Flavors, and Traditions',
    content: `
      <p>Would you like to experience La Paz in an authentic and intimate way? With our Walking Tour, you’ll explore the city’s fascinating streets on foot, guided by locals who reveal hidden stories, contrasts, and flavors. From traditional markets and scenic viewpoints to colonial squares and lively corners, this journey is perfect for travelers eager to truly connect with the city.</p>
    
      <h2>Explore the Hidden Treasures of La Paz</h2>
    
      <h3>Traditional Markets: A Feast for the Senses</h3>
      <img src="${market}" alt="Rodríguez Market in La Paz" />
      <p>Begin your adventure at the bustling Rodríguez Market, where the scents of fresh fruit, Andean herbs, and local dishes fill the air. Interact with local vendors, learn about native ingredients, and taste delights like salteñas and anticuchos.</p>
    
      <h3>Calle Jaén: A Journey to the Colonial Past</h3>
    
      <p>Stroll through charming Calle Jaén, one of the oldest and best-preserved streets in La Paz. Its colorful colonial houses are home to museums that tell Bolivia’s story from pre-Columbian times to independence.</p>
    
      <h3>Breathtaking Viewpoints: La Paz from Above</h3>
      <img src="${killi}" alt="Mirador Killi Killi view" />
      <p>Climb to Killi Killi Viewpoint for a panoramic view of the city with the majestic Illimani mountain as a backdrop — the perfect spot for unforgettable photos.</p>
    
      <h2>Immerse Yourself in Andean Traditions and Rituals</h2>
    
      <h3>Witches’ Market: Mysticism and Spirituality</h3>
      <img src="${Witches}" alt="Witches' Market La Paz" />
      <p>Dive into the Witches’ Market, where you’ll find amulets, potions, and ritual objects used in traditional Andean medicine. Discover the Andean worldview and the importance of Pachamama (Mother Earth) in daily life.</p>
    
      <h3>Meet Local Shamans</h3>
      <p>Participate in a session with a local shaman who will guide you through ancestral rituals for healing and spiritual connection, offering a deep insight into enduring Bolivian beliefs.</p>
    
      <h2>Delight in Paceña Gastronomy</h2>
    
      <h3>Street Flavors: A Culinary Adventure</h3>
      <img src="${food}" alt="La Paz street food" />
      <p>Taste a variety of street foods that reflect Bolivia’s cultural diversity, from stuffed empanadas to traditional drinks like api. Every bite tells a story!</p>
    
      <h3>Star Restaurants: The New Bolivian Cuisine</h3>
      <p>For a gourmet experience, visit renowned restaurants like <em>Gustu</em> and <em>Ancestral</em>, where chefs reinvent local ingredients into contemporary dishes that have gained international acclaim.</p>
    
      <h2>Connect with Daily Life in La Paz</h2>
    
      <h3>Plaza Murillo: The Political Heart of Bolivia</h3>
      <img src="${murillo}" alt="Plaza Murillo La Paz" />
      <p>Visit Plaza Murillo, home to the Government Palace and the Metropolitan Cathedral. This square is key to understanding Bolivia’s political history and current social dynamics.</p>
    
      <h3>Aerial Transport: La Paz’s Cable Cars</h3>
      <img src="${cable1}" alt="La Paz Teleférico" />
     
      <p>Experience the world’s highest urban cable car system, offering spectacular views and providing sustainable transport that connects the city’s diverse neighborhoods.</p>
     <img src="${cable}" alt="La Paz Teleférico" />
      <h2>Conclusion</h2>
      <p>Embark on this walking journey through La Paz and uncover a city brimming with history, culture, and flavors that will captivate you. We look forward to sharing this unforgettable experience with you!</p>
      `,
    category: 'Cultural Travel',
    date: 'April 20, 2024',
    readTime: '7 min',
    image: food1,
    tags: ['La Paz', 'culture', 'walking tour']
  }


  // ... más posts
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));
  const currentIndex = blogPosts.findIndex(p => p.id === parseInt(id));

  if (!post) return <div className="post-not-found">Post no encontrado</div>;

  // Separa las categorías por comas para mejorar el filtrado
  const relatedPosts = blogPosts.filter(p =>
    p.id !== post.id &&
    post.category.split(', ').some(cat => p.category.includes(cat))
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
            <span className="read-time">{post.readTime} of reading</span>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <main className="post-content">
        <article dangerouslySetInnerHTML={{ __html: post.content || "" }} />

        {/* Tags con validación */}
        {post.tags?.length > 0 && (
          <div className="post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}

        {/* Compartir en redes */}
        <div className="social-sharing">
          <FacebookShareButton url={window.location.href}>
            <button className="share-button facebook">Share on Facebook</button>
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} title={post.title}>
            <button className="share-button twitter">Share on Twitter</button>
          </TwitterShareButton>
        </div>
      </main>

      {/* Navegación entre posts */}
      <div className="post-navigation">
        {currentIndex > 0 && (
          <Link to={`/blog/${blogPosts[currentIndex - 1].id}`} className="nav-button prev">
            <FiArrowLeft /> Previous post
          </Link>
        )}
        {currentIndex < blogPosts.length - 1 && (
          <Link to={`/blog/${blogPosts[currentIndex + 1].id}`} className="nav-button next">
            Next post <FiArrowRight />
          </Link>
        )}
      </div>

      {/* Posts Relacionados */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="related-grid">
            {relatedPosts.map(relatedPost => (
              <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id} className="related-post">
                <img src={relatedPost.image} alt={relatedPost.title} />
                <h2>{relatedPost.title}</h2>
                <span className="category">{relatedPost.category}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;