'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    }


const FAQItem : React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-xl font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <Plus className="w-6 h-6 " />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-neutral-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqData = [
  {
    question: "Quels sont les services principaux de Cap Color ?",
    answer: "Nous sommes experts en impression de haut niveau : enseignes lumineuses, habillage de véhicules, stands événementiels, impression grand format, offset et découpe laser."
  },
  {
    question: "Qu'est-ce qui différencie Cap Color des autres prestataires ?",
    answer: "Avec plus de 18 ans d'expertise, nous combinons des technologies innovantes avec une approche rigoureuse, garantissant une qualité incomparable et des installations partout au Maroc."
  },
  {
    question: "Assurez-vous l'installation de vos produits ?",
    answer: "Oui, nous disposons d'équipes techniques qualifiées qui assurent la pose et l'installation de vos supports publicitaires et enseignes sur tout le territoire marocain."
  },
  {
    question: "Quel est le coût d'un projet de signalétique ou d'impression ?",
    answer: "Nos tarifs sont adaptés selon la complexité et les matériaux choisis. Nous proposons des études et devis gratuits pour offrir des solutions sur mesure au meilleur prix."
  },
  {
    question: "Comment gérez-vous le processus de production ?",
    answer :"Notre processus est collaboratif : nous commençons par une conception détaillée et une simulation du projet pour vous donner une vision réelle du résultat final. De la validation de la maquette à la fabrication technique, nous validons chaque étape avec vous pour garantir un résultat optimal.",
    
  },
  {
    question: "Quels sont vos délais de livraison ?",
    answer: "Les délais dépendent de l'envergure du projet. Grâce à notre parc machine performant, nous nous engageons à respecter des échéances rapides sans compromettre la qualité."
  }
];
  

  return (
    <div className=" 
    
    mx-auto 2xl:w-4/5 md:px-16
    
     px-6   py-16 pb-32 ">
      <h1 className="text-4xl font-bold mb-12 ">FAQ</h1>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;