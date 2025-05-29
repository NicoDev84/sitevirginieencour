import './App.css'
import { useState, useEffect } from 'react'
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import EducationCanine from './pages/EducationCanine'
import Comportementaliste from './pages/Comportementaliste'
import Tarifs from './pages/Tarifs'
import logoImage from './assets/logo.jpg'

// Import des images pour le carrousel
import imgCarousel1 from './assets/imgCarousel1.jpg'
import imgCarousel2 from './assets/imgCarousel2.jpg'
import imgCarousel3 from './assets/imgCarousel3.jpg'
// Import de l'image pour la section "Qui sommes-nous"
import imgEducateur from './assets/img2.JPG'

// Composant pour faire défiler la page vers le haut lors des changements de route
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  // Composant Header réutilisable
  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-[#662d2d] text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="Logo Education Canine Vaison Ventoux" className="h-10 w-auto" />
            <h1 className="text-xl font-bold">Education Canine Vaison Ventoux</h1>
          </div>
          
          {/* Contact info */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+33663987390" className="flex items-center space-x-1 hover:text-[#c8e0b7]">
              <FaPhoneAlt />
              <span>06 63 98 73 90</span>
            </a>
            <a href="mailto:contact@educationcaninevaisonventoux.fr" className="flex items-center space-x-1 hover:text-[#c8e0b7]">
              <FaEnvelope />
              <span>Contact</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-2xl focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:block bg-[#662d2d] shadow-md">
          <div className="container mx-auto px-4">
            <ul className="flex justify-center space-x-1 py-3">
              <li>
                <Link 
                  to="/" 
                  className="px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300 font-medium flex items-center"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/education-canine" 
                  className="px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300 flex items-center"
                >
                  Éducation canine
                </Link>
              </li>
              <li>
                <Link 
                  to="/comportementaliste" 
                  className="px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300 flex items-center"
                >
                  Comportementaliste
                </Link>
              </li>
              <li>
                <Link 
                  to="/cours-collectifs" 
                  className="px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300 flex items-center"
                >
                  Cours collectifs
                </Link>
              </li>
              <li>
                <Link 
                  to="/tarifs" 
                  className="px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300 flex items-center"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <a 
                  href="#actualites" 
                  className="px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    const actualitesSection = document.getElementById('actualites');
                    if (actualitesSection) {
                      actualitesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Actualités
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#662d2d] px-4 py-2 shadow-lg rounded-b-lg">
            <ul className="space-y-2 py-2">
              <li>
                <Link 
                  to="/" 
                  className="block px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/education-canine" 
                  className="block px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Éducation canine
                </Link>
              </li>
              <li>
                <Link 
                  to="/comportementaliste" 
                  className="block px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comportementaliste
                </Link>
              </li>
              <li>
                <Link 
                  to="/cours-collectifs" 
                  className="block px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cours collectifs
                </Link>
              </li>
              <li>
                <Link 
                  to="/tarifs" 
                  className="block px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <a 
                  href="#actualites" 
                  className="block px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const actualitesSection = document.getElementById('actualites');
                    if (actualitesSection) {
                      actualitesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Actualités
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="tel:+33663987390" 
                  className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-[#7a3a3a] hover:text-white transition-all duration-300"
                >
                  <FaPhoneAlt className="mr-2" />
                  <span>06 63 98 73 90</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )

  // Composant Footer réutilisable
  const Footer = () => (
    <>
      {/* Contact */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#662d2d] to-[#7a3a3a] text-white" id="contact">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 relative">
      Contactez-nous
      <div className="absolute w-20 h-1 bg-white left-1/2 transform -translate-x-1/2 mt-4"></div>
    </h2>
    
    <div className="grid md:grid-cols-2 gap-12">
      {/* Coordonnées */}
      <div className="bg-[#5a2525] bg-opacity-80 p-8 rounded-lg shadow-xl">
        <h3 className="text-xl font-bold mb-6 border-b border-white pb-3">Nos coordonnées</h3>
        <div className="space-y-6">
          <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
            <div className="bg-white text-[#662d2d] p-3 rounded-full mr-4">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Téléphone</p>
              <a href="tel:+33663987390" className="text-lg font-semibold hover:text-white">06 63 98 73 90</a>
            </div>
          </div>
          
          <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
            <div className="bg-white text-[#662d2d] p-3 rounded-full mr-4">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-200">Email</p>
              <a href="mailto:contact@educationcaninevaisonventoux.fr" className="text-lg font-semibold hover:text-white">contact@educationcaninevaisonventoux.fr</a>
            </div>
          </div>
          
          <h4 className="text-lg font-semibold mt-8 mb-4">Suivez-nous</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/virginie.crepin.96" className="bg-white text-[#662d2d] p-3 rounded-full hover:bg-opacity-90 transform hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl" />
            </a>           
            <a href="https://www.instagram.com/vivi.coach.canin/?igsh=YWJmaGx2cDcxbnJy" className="bg-white text-[#662d2d] p-3 rounded-full hover:bg-opacity-90 transform hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://www.youtube.com/channel/UCd-K9L2T5k8zHIME50In11A" className="bg-white text-[#662d2d] p-3 rounded-full hover:bg-opacity-90 transform hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Formulaire */}
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h3 className="text-xl font-bold mb-6 text-[#662d2d] border-b border-gray-200 pb-3">Envoyez-nous un message</h3>
        <form className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-gray-700 font-medium block">Votre nom</label>
            <input 
              type="text" 
              id="name"
              placeholder="Entrez votre nom" 
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#662d2d] focus:ring-2 focus:ring-[#662d2d] focus:ring-opacity-30 outline-none transition text-gray-800" 
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-700 font-medium block">Votre email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Entrez votre email" 
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#662d2d] focus:ring-2 focus:ring-[#662d2d] focus:ring-opacity-30 outline-none transition text-gray-800" 
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-gray-700 font-medium block">Votre message</label>
            <textarea 
              id="message"
              placeholder="Comment pouvons-nous vous aider ?" 
              rows={4} 
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#662d2d] focus:ring-2 focus:ring-[#662d2d] focus:ring-opacity-30 outline-none transition text-gray-800"
            ></textarea>
          </div>
          
          <div className="pt-3">
            <button 
              type="submit" 
              className="w-full bg-[#662d2d] hover:bg-[#7a3a3a] text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
            >
              Envoyer votre message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-[#251f1f] text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Education Canine Vaison Ventoux</h3>
              <p>Éducation canine positive et bienveillante dans le Vaucluse et la Drôme.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-[#c8e0b7]">Accueil</Link></li>
                <li><Link to="/education-canine" className="hover:text-[#c8e0b7]">Éducation canine</Link></li>
                <li><a href="#" className="hover:text-[#c8e0b7]">Actualités</a></li>
                <li><a href="#contact" className="hover:text-[#c8e0b7]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Zone d'intervention</h3>
              <p>Vaison la Romaine, Orange, Nyons et les environs dans le Vaucluse (84) et la Drôme (26).</p>
            </div>
          </div>
          <div className="border-t border-[#662d2d] mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Education Canine Vaison Ventoux. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  )

  // Composant HomePage
  const HomePage = () => {
    // Tableau d'images pour le carrousel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const heroImages = [
      imgCarousel1,
      imgCarousel2,
      imgCarousel3
    ];

    // Effet pour changer l'image toutes les 3 secondes
    useEffect(() => {
      console.log("Carrousel initialisé, image actuelle:", currentImageIndex);
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % heroImages.length;
          console.log("Changement d'image:", prevIndex, "->", newIndex);
          return newIndex;
        });
      }, 3000);
      
      return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
      <>
        {/* Spacer div to prevent content jump when header becomes fixed */}
        <div className="h-[105px] md:h-[105px]"></div>
        
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="bg-cover bg-center h-[500px] relative transition-all duration-1000"
            style={{ backgroundImage: `url("${heroImages[currentImageIndex]}")` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">Éducation canine et comportementaliste</h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-shadow-md">Vaison la Romaine - Vaucluse - Drôme</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-shadow-sm">Éducation positive et bienveillante pour votre chiot ou chien</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="#services" className="bg-[#662d2d] hover:bg-[#ffffff] text-white hover:text-[#662d2d] font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
                    Nos services
                  </a>
                  <a href="#contact" className="bg-[#662d2d] hover:bg-[#ffffff] text-white hover:text-[#662d2d] font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
                    Nous contacter
                  </a>
                </div>
                
                {/* Indicateurs de navigation du carrousel */}
                <div className="flex justify-center mt-8 space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-50'}`}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qui sommes-nous */}
        <section id="about-us" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#662d2d]">Qui sommes-nous</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Texte à gauche */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#662d2d]">Éducation Canine Vaison Ventoux</h3>
                <p className="text-lg">Passionnés par les chiens et leur bien-être, nous sommes une équipe d'éducateurs canins professionnels basée à Vaison-la-Romaine.</p>
                <p className="text-lg">Notre approche se base sur des méthodes positives et bienveillantes, respectant le rythme et la personnalité de chaque chien.</p>
                <p className="text-lg">Avec plus de 10 ans d'expérience dans l'éducation canine, nous vous accompagnons dans l'apprentissage et le renforcement de la relation avec votre compagnon à quatre pattes.</p>
                <div className="pt-4">
                  <a href="#contact" className="bg-[#662d2d] hover:bg-[#7a3a3a] text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block">
                    Contactez-nous
                  </a>
                </div>
              </div>
              {/* Image à droite */}
              <div className="flex justify-center">
                <img 
                  src={imgEducateur}
                  alt="Éducateur canin avec un chien" 
                  className="rounded-lg shadow-xl max-w-full h-auto object-cover" 
                  style={{ maxHeight: '400px' }} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#662d2d]">Nos services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Préparation à l'arrivée du chiot" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#662d2d]">Préparation à l'arrivée du chiot</h3>
                  <p className="text-gray-700 mb-4">Conseils personnalisés pour préparer l'arrivée de votre chiot et choisir la race adaptée à votre mode de vie.</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Éducation canine" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#662d2d]">Éducation canine</h3>
                  <p className="text-gray-700 mb-4">Apprentissage des ordres de base, socialisation et développement d'une relation harmonieuse avec votre chien.</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Rééducation troubles du comportement" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#662d2d]">Rééducation troubles du comportement</h3>
                  <p className="text-gray-700 mb-4">Solutions adaptées pour les problèmes d'agressivité, anxiété, destruction, aboiements excessifs et autres troubles.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Actualités */}
        <section id="actualites" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#662d2d]">Actualités</h2>
            
            {/* Carousel Component */}
            <div className="relative overflow-hidden">
              {/* Carousel Logic */}
              {(() => {
                // Définition des slides du carousel
                const slides = [
                  {
                    id: 1,
                    title: "Nouveau cours collectif le samedi matin",
                    content: "Nous avons le plaisir de vous annoncer l'ouverture d'un nouveau créneau pour nos cours collectifs le samedi matin de 10h à 11h30. Ces séances sont idéales pour socialiser votre chien et travailler les exercices d'obéissance en groupe.",
                    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Cours collectif d'éducation canine",
                    link: "#"
                  },
                  {
                    id: 2,
                    title: "Séminaire sur le comportement canin",
                    content: "Le mois prochain, nous organisons un séminaire sur la compréhension du comportement canin. Vous apprendrez à décoder les signaux de votre chien et à mieux communiquer avec lui. Places limitées, réservez dès maintenant !",
                    image: "https://images.unsplash.com/photo-1507146426996-e82e7bf110d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Séminaire comportement canin",
                    link: "#"
                  },
                  {
                    id: 3,
                    title: "Atelier spécial chiots",
                    content: "Vous venez d'adopter un chiot ? Participez à notre atelier spécial chiots pour apprendre les bases de l'éducation et éviter les erreurs courantes. Sociabilisation, propreté, morsures... tous les sujets seront abordés !",
                    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Atelier chiots",
                    link: "#"
                  },
                  {
                    id: 4,
                    title: "Promenades éducatives en groupe",
                    content: "Chaque dimanche, nous organisons des promenades éducatives en groupe dans différents environnements. Une excellente occasion de travailler le rappel et la marche en laisse dans des conditions réelles.",
                    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Promenade éducative en groupe",
                    link: "#"
                  },
                  {
                    id: 5,
                    title: "Formation en ligne disponible",
                    content: "Notre nouvelle formation en ligne 'Les bases de l'éducation canine' est maintenant disponible. Apprenez à votre rythme avec des vidéos explicatives et des exercices pratiques à faire chez vous.",
                    image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Formation en ligne",
                    link: "#"
                  },
                  {
                    id: 6,
                    title: "Nouveau partenariat avec une animalerie locale",
                    content: "Nous sommes heureux d'annoncer notre partenariat avec l'animalerie 'Tout pour Toutou'. Nos clients bénéficient désormais de 10% de réduction sur tous les produits d'éducation et de dressage.",
                    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Partenariat animalerie",
                    link: "#"
                  },
                  {
                    id: 7,
                    title: "Témoignage client : la transformation de Max",
                    content: "Découvrez l'incroyable transformation de Max, un berger allemand qui souffrait d'anxiété de séparation. Grâce à notre programme personnalisé, Max et sa famille ont retrouvé une vie sereine.",
                    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Témoignage client",
                    link: "#"
                  },
                  {
                    id: 8,
                    title: "Agility : nouveau parcours installé",
                    content: "Notre terrain d'entraînement s'est enrichi d'un nouveau parcours d'agility complet. Venez tester les capacités physiques et mentales de votre chien dans un cadre ludique et stimulant.",
                    image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Parcours d'agility",
                    link: "#"
                  },
                  {
                    id: 9,
                    title: "Conférence sur l'alimentation canine",
                    content: "Le Dr Martin, vétérinaire nutritionniste, animera une conférence sur l'alimentation canine dans nos locaux. Apprenez à choisir la meilleure alimentation pour votre chien selon son âge, sa race et son activité.",
                    image: "https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Conférence alimentation canine",
                    link: "#"
                  },
                  {
                    id: 10,
                    title: "Journée portes ouvertes",
                    content: "Venez nous rencontrer lors de notre journée portes ouvertes le 15 mai. Au programme : démonstrations, ateliers gratuits, conseils personnalisés et rencontre avec notre équipe d'éducateurs.",
                    image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Journée portes ouvertes",
                    link: "#"
                  },
                  {
                    id: 11,
                    title: "Nouvelle méthode de détection d'anxiété",
                    content: "Nous avons intégré une nouvelle méthode d'évaluation et de détection de l'anxiété chez les chiens. Cette approche nous permet d'identifier plus précisément les sources de stress et d'adapter nos techniques d'éducation.",
                    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Détection d'anxiété canine",
                    link: "#"
                  },
                  {
                    id: 12,
                    title: "Programme spécial été pour chiens sportifs",
                    content: "Cet été, nous lançons un programme spécial pour les chiens sportifs et leurs maîtres. Randonnées, cani-cross, baignades encadrées... Restez actifs avec votre compagnon tout en renforçant votre complicité.",
                    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    alt: "Programme été chiens sportifs",
                    link: "#"
                  },
                ];
                
                // État pour suivre l'index du slide actuel
                const [currentSlide, setCurrentSlide] = useState(0);
                
                // Effet pour le défilement automatique
                useEffect(() => {
                  const interval = setInterval(() => {
                    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
                  }, 6000); // Défilement toutes les 6 secondes
                  
                  return () => clearInterval(interval);
                }, []);
                
                // Fonction pour passer au slide suivant
                const nextSlide = () => {
                  setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
                };
                
                // Fonction pour passer au slide précédent
                const prevSlide = () => {
                  setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
                };
                
                // Fonction pour aller à un slide spécifique
                const goToSlide = (index: number) => {
                  setCurrentSlide(index);
                };
                
                return (
                  <>
                    {/* Carousel Container */}
                    <div className="relative overflow-hidden rounded-lg shadow-xl">
                      {/* Slides */}
                      <div 
                        className="flex transition-transform duration-500 ease-in-out" 
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {slides.map((slide) => (
                          <div key={slide.id} className="min-w-full">
                            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg">
                              {/* Image à gauche */}
                              <div className="flex justify-center order-2 md:order-1">
                                <img 
                                  src={slide.image} 
                                  alt={slide.alt} 
                                  className="rounded-lg shadow-lg max-w-full h-auto object-cover" 
                                  style={{ maxHeight: '350px' }} 
                                />
                              </div>
                              {/* Texte à droite */}
                              <div className="space-y-4 order-1 md:order-2">
                                <h3 className="text-2xl font-semibold text-[#662d2d]">{slide.title}</h3>
                                <p className="text-lg">{slide.content}</p>
                                <div className="pt-4">
                                  <a 
                                    href={slide.link} 
                                    className="bg-[#662d2d] hover:bg-[#7a3a3a] text-white font-bold py-2 px-6 rounded-lg transition duration-300 inline-block"
                                  >
                                    En savoir plus
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Navigation Buttons */}
                      <button 
                        onClick={prevSlide} 
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#662d2d] text-white p-2 rounded-full opacity-70 hover:opacity-100 transition"
                        aria-label="Slide précédent"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={nextSlide} 
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#662d2d] text-white p-2 rounded-full opacity-70 hover:opacity-100 transition"
                        aria-label="Slide suivant"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-4 space-x-2">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-[#662d2d]' : 'bg-gray-300'}`}
                          aria-label={`Aller au slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </section>
        
        {/* Témoignages */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#662d2d]">Ce que disent nos clients</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Témoignage 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#662d2d]">
                <p className="italic text-gray-700 mb-4">"Virginie a été d'une aide précieuse pour l'éducation de notre jeune Berger Australien. Ses méthodes positives et bienveillantes ont donné des résultats remarquables."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Sophie et Marc</p>
                    <p className="text-sm text-gray-600">Propriétaires de Luna</p>
                  </div>
                </div>
              </div>
              
              {/* Témoignage 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#662d2d]">
                <p className="italic text-gray-700 mb-4">"Notre chien souffrait d'anxiété de séparation. Grâce aux conseils de Virginie, nous avons pu l'aider à surmonter ce problème. Nous recommandons vivement ses services."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold">Thomas</p>
                    <p className="text-sm text-gray-600">Propriétaire de Max</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education-canine" element={<EducationCanine />} />
          <Route path="/comportementaliste" element={<Comportementaliste />} />
          <Route path="/tarifs" element={<Tarifs />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App