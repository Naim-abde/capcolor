 "use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type TabId = "projects" | "clients";
type CategoryId =
  | "all"
  | "Enseigne"
  | "Stand"
  | "Palissade"
  | "PLV"
  | "Habillage";

interface TabCounts {
  projects: number;
  clients: number;
}

interface CategoryCounts {
  [key: string]: { projects: number; clients: number };
}

interface Project {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
  category: CategoryId;
  size: string;
  imageHeight: string;
}

interface Client {
  id: number;
  name: string;
  image: string;
  description: string;
  category: CategoryId;
  title?: string;
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState<TabId>("projects");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const clients: Client[] = [
    { id: 1, name: "Chanel", image: "chanel-logo.svg", description: "Supports publicitaires de luxe et PLV personnalisée.", category: "PLV" },
    { id: 2, name: "Swarovski", image: "swarovski-logo.svg", description: "Signalétique intérieure et habillage haut de gamme.", category: "Enseigne" },
    { id: 3, name: "D&G", image: "dg-logo.svg", description: "Impression grand format et habillage événementiel.", category: "Habillage" },
  ];

  const projects: Project[] = [
    // --- CATEGORY: Enseigne ---
    { id: 1, name: "CBI Project", image: "/Enseigne1.jpg", title: "Identité Visuelle Épurée", description: "Conception et installation d'une façade minimaliste blanche pour le siège social de CBI.", category: "Enseigne", size: "col-span-12 md:col-span-8", imageHeight: "h-[500px]" },
    { id: 2, name: "Blaire Auto", image: "/blaire.jpg", title: "Contraste & Modernité", description: "Réalisation d'une enseigne premium en blanc et gris anthracite pour le showroom Blaire Auto.", category: "Enseigne", size: "col-span-12 md:col-span-4", imageHeight: "h-[500px]" },
    { id: 3, name: "Ichrak Centre", image: "/enseigne-3.jpg", title: "Signalétique Lumineuse 3D", description: "Lettres boîtiers en relief aux couleurs vives (blanc et jaune) pour une visibilité optimale.", category: "Enseigne", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 4, name: "Luxury Patisserie", image: "/enseigne-4.jpg", title: "Élégance Nocturne", description: "Habillage de façade noir mat avec logo lumineux blanc pour un rendu haut de gamme.", category: "Enseigne", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 5, name: "Walls & Flowers", image: "/enseigne-5.jpg", title: "Concept Store Design", description: "Création d'une devanture artistique alliant nature et signalétique moderne.", category: "Enseigne", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 6, name: "Biougnach Pro", image: "/enseigne-6.jpg", title: "Sobriété Institutionnelle", description: "Enseigne grand format on fond noir.", category: "Enseigne", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 7, name: "Corporate Signs", image: "/Enseigne-7.jpg", title: "Solutions de Marquage", description: "Enseignes extérieures durables.", category: "Enseigne", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 8, name: "Retail Display", image: "/Enseigne-8.jpg", title: "Attractivité Commerciale", description: "Systèmes lumineux LED.", category: "Enseigne", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 9, name: "Publicité Extérieure", image: "/enseigne-9.jpg", title: "Impact Visuel Majeur", description: "Installation de supports publicitaires.", category: "Enseigne", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 10, name: "Enseigne Urbaine", image: "/enseigne-10.jpg", title: "Design & Intégration", description: "Intégration harmonieuse de l'identité.", category: "Enseigne", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 11, name: "Vision 3D", image: "/enseigne-11.jpg", title: "Conception Technique", description: "Étude et modélisation 3D.", category: "Enseigne", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },

    // --- CATEGORY: Stand ---
    { id: 12, name: "Swarovski Expo", image: "/stand-1.jpg", title: "Luxe Éphémère", description: "Conception d'un espace d'exposition prestigieux.", category: "Stand", size: "col-span-12 md:col-span-8", imageHeight: "h-[500px]" },
    { id: 13, name: "Espace Modulaire", image: "/stand-2.jpg", title: "Flexibilité Salon", description: "Structure adaptable pour salons.", category: "Stand", size: "col-span-12 md:col-span-4", imageHeight: "h-[500px]" },
    { id: 14, name: "Welcome Desk", image: "/stand-3.jpg", title: "Accueil Professionnel", description: "Comptoirs personnalisés.", category: "Stand", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 15, name: "Double Deck Stand", image: "/stand-4.jpg", title: "Architecture Événementielle", description: "Stand à étage.", category: "Stand", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 16, name: "Lounge Area", image: "/stand-5.jpg", title: "Espace Networking", description: "Aménagement de zones de détente.", category: "Stand", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 17, name: "Digital Totem", image: "/stand-6.jpg", title: "Innovation Digitale", description: "Supports interactifs.", category: "Stand", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 18, name: "Custom Booth", image: "/stand-7.jpg", title: "Design Sur-Mesure", description: "Structures uniques.", category: "Stand", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 19, name: "Brand Experience", image: "/stand-8.jpg", title: "Immersion Totale", description: "Scénographie complète.", category: "Stand", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 20, name: "Tech Expo", image: "/stand-9.jpg", title: "High-Tech Display", description: "Présentoirs innovants.", category: "Stand", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 21, name: "Pavillon Expo", image: "/stand-10.jpg", title: "Structure Grand Format", description: "Montage de pavillons.", category: "Stand", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 22, name: "VIP Corner", image: "/stand-11.jpg", title: "Espace Privatif", description: "Mobilier premium.", category: "Stand", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },

    // --- CATEGORY: Palissade ---
    { id: 23, name: "Real Estate Preview", image: "/palissade-1.jpg", title: "Communication de Chantier", description: "Habillage de clôtures.", category: "Palissade", size: "col-span-12 md:col-span-8", imageHeight: "h-[500px]" },
    { id: 24, name: "Safety Signage", image: "/palissade-2.jpg", title: "Protection & Marketing", description: "Sécurité et visibilité.", category: "Palissade", size: "col-span-12 md:col-span-4", imageHeight: "h-[500px]" },
    { id: 25, name: "Mall Branding", image: "/palissade-3.jpg", title: "Teasing Commercial", description: "Décoration temporaire mall.", category: "Palissade", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 26, name: "Graphic Wall", image: "/palissade-4.jpg", title: "Décoration Urbaine", description: "Transformation artistique.", category: "Palissade", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 27, name: "XXL Printing", image: "/palissade-5.jpg", title: "Impact Visuel Géant", description: "Impression haute définition.", category: "Palissade", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 28, name: "Fence Wrap", image: "/palissade-6.jpg", title: "Habillage Périmétral", description: "Solutions occultantes.", category: "Palissade", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 29, name: "Project Reveal", image: "/palissade-7.jpg", title: "Annonce de Projet", description: "Signalétique informative.", category: "Palissade", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 30, name: "Advertising Barrier", image: "/palissade-8.jpg", title: "Barrière Publicitaire", description: "Optimisation des surfaces.", category: "Palissade", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },

    // --- CATEGORY: PLV ---
    { id: 31, name: "Chanel Display", image: "/plv-1.jpg", title: "Merchandising de Luxe", description: "Présentoirs sur-mesure.", category: "PLV", size: "col-span-12 md:col-span-8", imageHeight: "h-[500px]" },
    { id: 32, name: "Plexiglass Series", image: "/plv-2.jpg", title: "Clarté & Esthétique", description: "Supports en PMMA laser.", category: "PLV", size: "col-span-12 md:col-span-4", imageHeight: "h-[500px]" },
    { id: 33, name: "Perfume Glorifier", image: "/plv-3.jpg", title: "Mise en Lumière", description: "Socles rétro-éclairés.", category: "PLV", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 34, name: "Retail Stand", image: "/plv-4.jpg", title: "Meuble de Vente", description: "Mobilier commercial permanent.", category: "PLV", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 35, name: "Counter TOP", image: "/plv-5.jpg", title: "Achat de Proximité", description: "Supports de comptoir.", category: "PLV", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 36, name: "Promo Graphics", image: "/plv-6.jpg", title: "Animation Point de Vente", description: "Signalétique promotionnelle.", category: "PLV", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 37, name: "Store Display V2", image: "/plv-7.jpg", title: "Design de Rayon", description: "Organisation visuelle.", category: "PLV", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 38, name: "Visual Merchandising", image: "/plv-8.jpg", title: "Optimisation de Vente", description: "Solutions de balisage.", category: "PLV", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },

    // --- CATEGORY: Habillage ---
    { id: 39, name: "Dolce & Gabbana Fleet", image: "/habillage-1.jpg", title: "Marquage Véhicule Premium", description: "Total covering événementiel.", category: "Habillage", size: "col-span-12 md:col-span-8", imageHeight: "h-[500px]" },
    { id: 40, name: "Truck Branding", image: "/habillage-10.png", title: "Publicité Itinérante", description: "Habillage de semi-remorques.", category: "Habillage", size: "col-span-12 md:col-span-4", imageHeight: "h-[500px]" },
    { id: 41, name: "Office Frosting", image: "/habillage-2.png", title: "Vitrophanie Décorative", description: "Films dépolis.", category: "Habillage", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 42, name: "Building Wrap", image: "/habillage-3.png", title: "Habillage de Façade", description: "Communication monumentale.", category: "Habillage", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 43, name: "Wall Murals", image: "/habillage-4.png", title: "Ambiance de Bureau", description: "Graphismes muraux XXL.", category: "Habillage", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 44, name: "Floor Stickers", image: "/habillage-5.png", title: "Signalétique Horizontale", description: "Adhésifs de sol.", category: "Habillage", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 45, name: "Corporate Interior", image: "/habillage-6.png", title: "Branding Interne", description: "Uniformisation visuelle.", category: "Habillage", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 46, name: "In-Store Wrap", image: "/habillage-7.png", title: "Décoration de Rayon", description: "Habillage mobiliers.", category: "Habillage", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 47, name: "Elevator Branding", image: "/habillage-8.png", title: "Communication Inattendue", description: "Habillage ascenseur.", category: "Habillage", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 48, name: "Safety Floor Wrap", image: "/habillage-10.png", title: "Signalétique de Sécurité", description: "Marquage au sol industriel.", category: "Habillage", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
    { id: 49, name: "Glass Partition", image: "/habillage-11.png", title: "Design de Cloison", description: "Design en open-space.", category: "Habillage", size: "col-span-12 md:col-span-4", imageHeight: "h-[350px]" },
  ];

  const { tabCounts, categoryCounts } = useMemo(() => {
    const pCount = projects.length;
    const cCount = clients.length;
    const cats: CategoryId[] = ["all", "Enseigne", "Stand", "PLV", "Habillage", "Palissade"];
    const counts: CategoryCounts = {};

    cats.forEach(cat => {
      counts[cat] = {
        projects: cat === "all" ? pCount : projects.filter(p => p.category === cat).length,
        clients: cat === "all" ? cCount : clients.filter(c => c.category === cat).length,
      };
    });

    return {
      tabCounts: { projects: pCount, clients: cCount } as TabCounts,
      categoryCounts: counts,
    };
  }, [projects.length, clients.length]);

  const tabs = [
    { id: "projects" as const, name: "Projets", count: tabCounts.projects },
    { id: "clients" as const, name: "Clients", count: tabCounts.clients },
  ];

  const categoriesList = [
    { id: "all" as const, name: "Tous" },
    { id: "Enseigne" as const, name: "Enseignes" },
    { id: "Stand" as const, name: "Stands" },
    { id: "Palissade" as const, name: "Palissade" },
    { id: "PLV" as const, name: "PLV" },
    { id: "Habillage" as const, name: "Habillage" },
  ];

  return (
    <div className="md:mx-auto 2xl:w-4/5 md:px-16 px-6 py-40">
      <div className="flex flex-wrap gap-8 mb-12 items-center">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.id}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-2xl md:text-4xl font-bold ${activeTab === tab.id ? "border-b-2 border-black" : "text-gray-400"}`}
              onClick={() => { setActiveTab(tab.id); setActiveCategory("all"); }}
            >
              {tab.name}
              <span className="text-sm ml-1 align-super">{tab.count}</span>
            </motion.button>
            {index < tabs.length - 1 && <div className="p-2 rounded-full bg-black h-4 w-4"></div>}
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 mb-12">
        {categoriesList.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-2 py-2 ${activeCategory === category.id ? "font-bold text-black" : "text-gray-500"}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
            <span className="text-xs ml-1 align-super text-gray-400">
              {categoryCounts[category.id]?.[activeTab] || 0}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          layout
          key={`${activeTab}-${activeCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          {(activeTab === "projects" ? projects : clients)
            .filter(item => activeCategory === "all" || item.category === activeCategory)
            .map((item: any) => (
              <motion.div
                layout
                key={item.id}
                className={`${activeTab === "projects" ? item.size : "col-span-12 md:col-span-4"}`}
              >
                <div className={`relative ${activeTab === "projects" ? item.imageHeight : "h-64"} mb-4 overflow-hidden rounded-2xl bg-gray-50`}>
                  <Image
                    fill
                    src={item.image.startsWith('/') ? item.image : `/${item.image}`}
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-xs font-bold mb-2 text-gray-400 uppercase tracking-widest">/ {item.name}</h3>
                <h3 className="text-xl font-bold mb-2">{item.title || item.name}</h3>
                <p className="text-gray-500 text-sm line-clamp-3">{item.description}</p>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;