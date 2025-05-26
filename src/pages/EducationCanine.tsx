import { FaDog } from 'react-icons/fa'

function EducationCanine() {
  return (
    <div className="pt-8 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#3e6428]">Éducation Canine</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaDog className="text-[#5a8f3c] text-4xl mr-4" />
            <h2 className="text-2xl font-bold text-[#5a8f3c]">Notre approche d'éducation canine</h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            Chez Education Canine Vaison Ventoux, nous proposons une approche positive et bienveillante de l'éducation canine. 
            Notre méthode est basée sur le respect du chien et de sa nature, sans utilisation de méthodes coercitives.
          </p>
          
          <p className="text-gray-700 mb-6">
            Nous travaillons avec vous pour comprendre les besoins spécifiques de votre chien et adapter notre approche 
            en conséquence. Notre objectif est de vous aider à développer une relation harmonieuse avec votre compagnon 
            à quatre pattes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Séance individuelle d'éducation canine" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-[#5a8f3c]">Séances individuelles</h3>
              <p className="text-gray-700 mb-4">
                Les séances individuelles permettent un travail personnalisé adapté aux besoins spécifiques de votre chien. 
                Nous abordons les problématiques particulières que vous rencontrez et mettons en place des solutions sur mesure.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Apprentissage des ordres de base (assis, couché, pas bouger, rappel...)</li>
                <li>Marche en laisse sans tirer</li>
                <li>Gestion des comportements indésirables</li>
                <li>Renforcement du lien maître-chien</li>
              </ul>
              <p className="font-semibold text-[#3e6428]">Durée : 1h à 1h30 selon les besoins</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Cours collectifs d'éducation canine" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-[#5a8f3c]">Cours collectifs</h3>
              <p className="text-gray-700 mb-4">
                Les cours collectifs offrent une excellente opportunité de socialisation pour votre chien. 
                En groupe, votre chien apprend à obéir malgré les distractions et à interagir correctement avec ses congénères.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Socialisation avec d'autres chiens</li>
                <li>Travail des ordres de base en environnement distrayant</li>
                <li>Partage d'expériences avec d'autres propriétaires</li>
                <li>Mise en situation réelle</li>
              </ul>
              <p className="font-semibold text-[#3e6428]">Séances hebdomadaires de 1h, groupes limités à 6 chiens</p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#f5f9f2] rounded-lg p-8 border-l-4 border-[#5a8f3c]">
          <h3 className="text-xl font-bold mb-4 text-[#3e6428]">Notre méthode en 3 étapes</h3>
          <ol className="space-y-4">
            <li className="flex">
              <span className="bg-[#5a8f3c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <div>
                <p className="font-bold text-[#5a8f3c]">Évaluation</p>
                <p className="text-gray-700">Nous commençons par évaluer le comportement de votre chien et comprendre votre relation avec lui.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-[#5a8f3c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <div>
                <p className="font-bold text-[#5a8f3c]">Apprentissage</p>
                <p className="text-gray-700">Nous vous enseignons les techniques adaptées et travaillons avec vous et votre chien.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-[#5a8f3c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <div>
                <p className="font-bold text-[#5a8f3c]">Suivi</p>
                <p className="text-gray-700">Nous assurons un suivi régulier pour garantir des progrès durables et ajuster si nécessaire.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default EducationCanine
