import { FaVideo } from 'react-icons/fa'

function Comportementaliste() {
  return (
    <div className="pt-8 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#662d2d]">Comportementaliste</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FaVideo className="text-[#662d2d] text-4xl mr-4" />
            <h2 className="text-2xl font-bold text-[#662d2d]">Séance comportementale en visio-conférence</h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            Vous souhaitez avoir les conseils d'un éducateur canin sur l'éducation de votre chiot ou votre chien 
            mais vous êtes loin de notre département le Vaucluse?
          </p>
          
          <p className="text-gray-700 mb-6">
            Je vous propose des séances comportementales en visio-conférence d'une durée d'une heure environ 
            pendant lesquelles nous pourrons répondre aux questions que vous vous posez.
          </p>

          <div className="bg-[#f9f2f2] p-6 rounded-lg border-l-4 border-[#662d2d] mb-8">
            <h3 className="text-xl font-bold mb-4 text-[#662d2d]">Je peux vous aider dans plusieurs domaines:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Apprenez à mieux connaître votre chien</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Découvrez les bons conseils à mettre en place dès l'arrivée de votre chiot</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Vous souhaitez comprendre les mauvais comportements de votre loulou</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#662d2d] h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>Ciblez les erreurs à ne pas commettre avec votre compagnon</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white border border-[#662d2d] rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              La séance avec moi, éducatrice canin et comportementaliste depuis plusieurs années vous coûtera 
              <span className="font-bold text-[#662d2d]"> 50€ </span>
              et vous aidera à améliorer votre vie quotidienne avec votre chien.
            </p>
            <p className="text-gray-700 font-semibold">
              Contactez moi pour plus d'informations au <a href="tel:+33663987390" className="text-[#662d2d] hover:underline">06 63 98 73 90</a>.
            </p>
          </div>
          
          <div className="mt-8">
            <div className="bg-[#f9f2f2] rounded-lg p-6 border-l-4 border-[#662d2d]">
              <h3 className="text-xl font-bold mb-4 text-[#662d2d]">Comment se déroule une séance en visio?</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-[#662d2d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <p className="font-bold text-[#662d2d]">Prise de contact</p>
                    <p className="text-gray-700">Nous fixons un rendez-vous selon vos disponibilités et choisissons ensemble la plateforme de visio-conférence.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#662d2d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <p className="font-bold text-[#662d2d]">Consultation</p>
                    <p className="text-gray-700">Pendant environ 1 heure, nous discutons de votre situation et je vous propose des solutions adaptées.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#662d2d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <p className="font-bold text-[#662d2d]">Suivi</p>
                    <p className="text-gray-700">Je reste disponible pour répondre à vos questions après la séance et proposer des séances complémentaires si nécessaire.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comportementaliste
