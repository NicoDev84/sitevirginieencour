import { FaEuroSign } from 'react-icons/fa'

function Tarifs() {
  return (
    <div className="pt-8 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#662d2d]">Tarifs 2024</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaEuroSign className="text-[#662d2d] text-4xl mr-4" />
            <h2 className="text-2xl font-bold text-[#662d2d]">INDIVIDUEL</h2>
          </div>
          
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Evaluation :</span> 30€</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Séance individuelle :</span> 50€ d'une durée d'environ 1h</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Forfait programme éducatif en 7 séances individuelles :</span> 315€ (+1 cours collectif offert)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Conseils de préparation à l'arrivée d'un chiot/chien :</span> 50€ environ 1h</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Frais de déplacement :</span> 10€/séance au-delà de 15min de trajet</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Frais de déplacement :</span> 15€/séance au-delà de 30min de trajet</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Assurance :</span> 5€ par forfait 7 séances obligatoire</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Prime de risque chien mordeur et agressif :</span> +30€ par forfait</span>
            </li>
          </ul>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaEuroSign className="text-[#662d2d] text-4xl mr-4" />
            <h2 className="text-2xl font-bold text-[#662d2d]">COLLECTIF</h2>
          </div>
          
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Cours collectif :</span> 25€</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Carte 10 cours collectifs valable 2 ans :</span> 220€ (+1 cours collectif offert)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Abonnement mensuel 6 mois d'engagement :</span> 45€ par mois avec accès illimité</span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span><span className="font-semibold">Abonnement mensuel 12 mois d'engagement :</span> 40€ par mois avec accès illimité</span>
            </li>
          </ul>
          
          <div className="bg-[#f9f2f2] p-4 rounded-lg border-l-4 border-[#662d2d] mb-6">
            <p className="text-gray-700 italic">
              *L'éducatrice se réserve le droit de refuser l'accès aux cours collectifs à :
            </p>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>un chien malade (maladie contagieuse).</li>
              <li>un chien qui ne serait pas à jour de ses vaccins, ou ayant des parasites apparents.</li>
              <li>un chien qui ne serait pas sociable avec les personnes ou ses congénères.</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#662d2d]">EXEMPLES DE TARIFICATION</h2>
          
          <div className="space-y-6">
            <div className="bg-[#f9f2f2] p-4 rounded-lg">
              <p className="font-semibold text-[#662d2d] mb-2">Exemple pour un chiot avec 7 séances d'éducation de base à moins de 15min de trajet :</p>
              <p className="text-gray-700">315€ + 5€ d'assurance = <span className="font-bold">320€ en tout</span></p>
            </div>
            
            <div className="bg-[#f9f2f2] p-4 rounded-lg">
              <p className="font-semibold text-[#662d2d] mb-2">Exemple pour un chien mordeur avec 3 séances de rééducation à moins de 15min de trajet :</p>
              <p className="text-gray-700">150€ + 5€ d'assurance + 30€ de prime de risque = <span className="font-bold">185€ en tout</span></p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold text-[#662d2d]">Pour toute question, contactez votre Coach Vivi au 06 63 98 73 90</p>
        </div>
      </div>
    </div>
  )
}

export default Tarifs