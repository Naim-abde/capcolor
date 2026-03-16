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
    {
      id: 1,
      name: "2M",
      image: "2m.png",
      description: "Supports publicitaires de luxe et PLV personnalisée.",
      category: "PLV",
    },
    {
      id: 2,
      name: "Swarovski",
      image: "swarovski-logo.svg",
      description: "Signalétique intérieure et habillage haut de gamme.",
      category: "Enseigne",
    },
    {
      id: 3,
      name: "D&G",
      image: "dg-logo.svg",
      description: "Impression grand format et habillage événementiel.",
      category: "Habillage",
    },
  ];

  const projects: Project[] = [
    // --- CATEGORY: Enseigne ---
    {
      id: 1,
      name: "CBI Project",
      image: "/Enseigne1.jpg",
      title: "Identité Visuelle Épurée",
      description:
        "Conception et installation d'une façade minimaliste blanche pour le siège social de CBI.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-8",
      imageHeight: "h-[500px]",
    },
    {
      id: 2,
      name: "Blaire Auto",
      image: "/blaire.jpg",
      title: "Contraste & Modernité",
      description:
        "Réalisation d'une enseigne premium en blanc et gris anthracite pour le showroom Blaire Auto.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[500px]",
    },
    {
      id: 3,
      name: "Ichrak Centre",
      image: "/enseigne-3.jpg",
      title: "Signalétique Lumineuse 3D",
      description:
        "Lettres boîtiers en relief aux couleurs vives (blanc et jaune) pour une visibilité optimale.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    },
    {
      id: 4,
      name: "Luxury Patisserie",
      image: "/enseigne-4.jpg",
      title: "Élégance Nocturne",
      description:
        "Habillage de façade noir mat avec logo lumineux blanc pour un rendu haut de gamme.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    },
    {
      id: 5,
      name: "Walls & Flowers",
      image: "/enseigne-5.jpg",
      title: "Concept Store Design",
      description:
        "Création d'une devanture artistique alliant nature et signalétique moderne.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    },
    {
      id: 6,
      name: "Biougnach Pro ",
      image: "/enseigne-6.jpg",
      title: "Sobriété Institutionnelle",
      description: "Enseigne grand format on fond noir.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    },
    {
      id: 7,
      name: "Beauty & spa",
      image: "/enseigne-7.jpg",
      title: "Création de Logo Professionnel",
      description:
        "Conception et réalisation du logo officiel de l’entreprise Le Dome Clandestin.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    },
    {
      id: 8,
      name: "Imperial Linens",
      image: "/enseigne-8.jpg",
      title: "Façade Commerciale Moderne",
      description:
        "Réalisation de la façade du magasin Imperial Linens en blanc et beige avec une finition élégante.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    },
    {
      id: 9,
      name: "Beauty Now",
      image: "/enseigne-9.jpg",
      title: "Logo de Magasin Lumineux",
      description:
        "Installation du logo Beauty Now sur la façade du magasin pour renforcer la visibilité de la marque.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    },
    {
      id: 10,
      name: "City Club",
      image: "/enseigne-10.jpg",
      title: "Façade et Identité Visuelle",
      description:
        "Réalisation de la façade du City Club avec intégration du logo et couleurs blanc et vert lime.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    },
    {
      id: 11,
      name: "Lear",
      image: "/enseigne-11.jpg",
      title: "Façade Industrielle Corporate",
      description:
        "Habillage de la façade de l’entreprise Lear avec les couleurs blanc et rouge et intégration du logo officiel.",
      category: "Enseigne",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    },

    // --- CATEGORY: Stand -

    {
      id: 12,
      name: "Axa",
      image: "/stand-1.jpg",
      title: "Espace Réception Moderne",
      description:
        "Aménagement d'une zone d'accueil élégante pour les visiteurs.",
      category: "Stand",
      size: "col-span-12 md:col-span-8",
      imageHeight: "h-[500px]",
    }, //9ado liha f 7al blasa dial respesion

    {
      id: 13,
      name: "Inwi",
      image: "/stand-2.jpg",
      title: "Stand Promotionnel Inwi",
      description:
        "Installation d’un grand banner avec trois tables promotionnelles.",
      category: "Stand",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[500px]",
    }, //9ado liha banner f 7it m3a 3 dal twable fihom inwi

    {
      id: 14,
      name: "Supradyn",
      image: "/stand-3.jpg",
      title: "Scène en Bord de Mer",
      description:
        "Installation d'une scène pour les spectacles près de la mer.",
      category: "Stand",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    }, //9ado liha minasa 7da b7ar bach nas t ghni

    {
      id: 15,
      name: "Optique",
      image: "/stand-4.jpg",
      title: "Accueil Type Réception",
      description:
        "Conception d’un espace d’accueil similaire à une réception.",
      category: "Stand",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    }, //9ado liha thya f7al reseption

    {
      id: 16,
      name: "magasin",
      image: "/stand-5.jpg",
      title: "Zone Réception Clients",
      description: "Espace aménagé pour accueillir et orienter les visiteurs.",
      category: "Stand",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    }, //reseption

    {
      id: 17,
      name: "Garnier",
      image: "/stand-6.jpg",
      title: "Stand Accueil Garnier",
      description: "Zone de réception dédiée aux visiteurs et partenaires.",
      category: "Stand",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    }, //reseption

    {
      id: 18,
      name: "magsin",
      image: "/stand-7.jpg",
      title: "Espace Accueil Magasin",
      description: "Aménagement d’un espace de réception pour les clients.",
      category: "Stand",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    }, //reseption

    {
      id: 19,
      name: "Yahia",
      image: "/stand-8.jpg",
      title: "Zone Réception Yahia",
      description: "Création d’un espace d’accueil élégant pour les visiteurs.",
      category: "Stand",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    }, //reseption

    {
      id: 20,
      name: "L'Oreal",
      image: "/stand-9.jpg",
      title: "Stand Réception L'Oréal",
      description: "Zone d’accueil professionnelle pour les visiteurs.",
      category: "Stand",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    }, //reseption

    {
      id: 21,
      name: "magasin",
      image: "/stand-10.jpg",
      title: "Grand Espace Réception",
      description:
        "Aménagement d’un grand espace pour accueillir les visiteurs.",
      category: "Stand",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    }, //reseption

    {
      id: 22,
      name: "magsin",
      image: "/stand-11.jpg",
      title: "Réception Privée",
      description: "Espace d’accueil confortable pour les invités.",
      category: "Stand",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-[350px]",
    }, //reseption
    // --- CATEGORY: Palissade ---
    {
  id: 23,
  name: "Air France",
  image: "/palissade-1.jpg",
  title: "Campagne Publicitaire Extérieure",
  description: "Installation de visuels promotionnels pour une communication visible.",
  category: "Palissade",
  size: "col-span-12 md:col-span-8",
  imageHeight: "h-[500px]",
}//9ad lihom ichhar
,
{
  id: 24,
  name: "Immobilier",
  image: "/palissade-2.jpg",
  title: "Grand Panneau Immobilier",
  description: "Installation d’un grand panneau bleu pour la promotion immobilière.",
  category: "Palissade",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[500px]",
}//ichar wzra9 panneaux kbir
,
{
  id: 25,
  name: "Air France",
  image: "/palissade-3.jpg",
  title: "Affichage Promotionnel",
  description: "Support publicitaire pour promouvoir une marque ou un service.",
  category: "Palissade",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//chhar
,
{
  id: 26,
  name: "Graphic ",
  image: "/palissade-4.jpg",
  title: "Habillage de Containers",
  description: "Transformation de containers en supports publicitaires.",
  category: "Palissade",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
} //charika 9adat f7al bit dyal containers o drna fih ichhar
,
{
  id: 27,
  name: "Services",
  image: "/palissade-5.jpg",
  title: "Panneaux Directionnels",
  description: "Signalisation pour orienter vers les différents services.",
  category: "Palissade",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//hada fih f7al hadok les panneaux li ki kono wst les immoble bach iwrk fin tmchi hna services
,
{
  id: 28,
  name: "Etage",
  image: "/palissade-6.jpg",
  title: "Signalétique Étages",
  description: "Panneaux d’orientation indiquant les différents étages.",
  category: "Palissade",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//hada fih f7al hadok les panneaux li ki kono wst les immoble bach iwrk fin tmchi hna 2 etage
,
{
  id: 29,
  name: "Ichrak center",
  image: "/palissade-7.jpg",
  title: "Signalétique Ichrak Center",
  description: "Panneaux informatifs indiquant la direction du centre.",
  category: "Palissade",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}////hada fih f7al hadok les panneaux li ki kono wst les immoble bach iwrk fin tmchi ichrak centre
,
{
  id: 30,
  name: "Advertising Barrier",
  image: "/palissade-8.jpg",
  title: "Signalisation des Services",
  description: "Panneaux directionnels pour guider vers les services.",
  category: "Palissade",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}////hada fih f7al hadok les panneaux li ki kono wst les immoble bach iwrk fin tmchi services
   
,
    // --- CATEGORY: PLV ---
 {
  id: 31,
  name: "Air France",
  image: "/plv-1.jpg",
  title: "PLV Publicitaire Air France",
  description: "Support PLV intégrant plusieurs annonces de marques.",
  category: "PLV",
  size: "col-span-12 md:col-span-8",
  imageHeight: "h-[500px]",
}//hada plv dyal charikat air france o wst mno ichhar dyal charikat 
,
{
  id: 32,
  name: "Mercedes",
  image: "/plv-2.jpg",
  title: "PLV Mercedes",
  description: "Installation de trois supports PLV dédiés à la marque Mercedes.",
  category: "PLV",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[500px]",
}//3 dyal plv dyal mercedes
,
{
  id: 33,
  name: "DHL",
  image: "/plv-3.jpg",
  title: "PLV Ramadan DHL",
  description: "Supports promotionnels DHL pour la campagne Ramadan.",
  category: "PLV",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//dhl plv 2 dyl  mobrakat ramadan 
,
{
  id: 34,
  name: "StandUp",
  image: "/plv-4.jpg",
  title: "PLV StandUp",
  description: "Support publicitaire pour l’émission marocaine StandUp.",
  category: "PLV",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//plv dyal standup brnamj maghribi dyal mawahib daz f 9nat oula
,
{
  id: 35,
  name: "Amber",
  image: "/plv-5.jpg",
  title: "PLV Amber",
  description: "Support promotionnel pour la marque de farine Amber.",
  category: "PLV",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//plv dyal amber charika dyal d9i9 
,
{
  id: 36,
  name: "Piscine",
  image: "/plv-6.jpg",
  title: "Publicité Bar Piscine",
  description: "Supports publicitaires installés dans un bar piscine.",
  category: "PLV",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//9ADO LIHOM hadko ryat dal ichhar li kikono wst bar pisine 
,
{
  id: 37,
  name: "Store ",
  image: "/plv-7.jpg",
  title: "PLV Magasin",
  description: "Support publicitaire pour l’aménagement d’un magasin.",
  category: "PLV",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
},
{
  id: 38,
  name: "Hyundai",
  image: "/plv-8.jpg",
  title: "PLV Gonflable Hyundai",
  description: "Structure publicitaire gonflable avec le logo Hyundai.",
  category: "PLV",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//ichah plv f7al nf7kha o fih smit charika
    ,

    // --- CATEGORY: Habillage ---
   {
  id: 39,
  name: "Nescafe",
  image: "/habillage-1.jpg",
  title: "Habillage Camion Nescafé",
  description: "Publicité installée à l’arrière d’un camion Nescafé.",
  category: "Habillage",
  size: "col-span-12 md:col-span-8",
  imageHeight: "h-[500px]",
}//9ado ichhar f lor dyal camiou dyal nescafe
,
{
  id: 40,
  name: "OCP",
  image: "/habillage-10.png",
  title: "Habillage Vitre OCP",
  description: "Adhésif appliqué sur vitrage pour réduire la visibilité.",
  category: "Habillage",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[500px]",
}//PADO ZAJ DYAL OCP KHLWH F7ALA MKIBNCH DRO LIH HADIK LS9A GRI
,
{
  id: 41,
  name: "Car Advertising",
  image: "/habillage-2.png",
  title: "Habillage Automobile",
  description: "Sticker publicitaire appliqué sur véhicule.",
  category: "Habillage",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//had o ra ichhar mls9 f f tomobile
,
{
  id: 42,
  name: "Car Advertising",
  image: "/habillage-3.png",
  title: "Habillage Voiture",
  description: "Adhésif publicitaire installé sur automobile.",
  category: "Habillage",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//had o ra ichhar mls9 f f tomobile
,
{
  id: 43,
  name: "Car Advertising",
  image: "/habillage-4.png",
  title: "Sticker Publicitaire Véhicule",
  description: "Support marketing mobile sur voiture.",
  category: "Habillage",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//had o ra ichhar mls9 f f tomobile
,
{
  id: 44,
  name: "Car Advertising",
  image: "/habillage-5.png",
  title: "Publicité Automobile",
  description: "Habillage adhésif sur carrosserie.",
  category: "Habillage",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//had o ra ichhar mls9 f f tomobile
,
{
  id: 45,
  name: "Car Advertising",
  image: "/habillage-6.png",
  title: "Branding Véhicule",
  description: "Habillage marketing pour véhicule.",
  category: "Habillage",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//had o ra ichhar mls9 f f tomobile
,
{
  id: 46,
  name: "Car Advertising",
  image: "/habillage-7.png",
  title: "Covering Automobile",
  description: "Adhésif publicitaire pour voiture.",
  category: "Habillage",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//had o ra ichhar mls9 f f tomobile
,
{
  id: 47,
  name: "Car Advertising",
  image: "/habillage-8.png",
  title: "Sticker Marketing",
  description: "Support publicitaire collé sur véhicule.",
  category: "Habillage",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//had o ra ichhar mls9 f f tomobile
,
{
  id: 48,
  name: "Window Film",
  image: "/habillage-10.png",
  title: "Film pour Vitrage",
  description: "Adhésif appliqué sur surface vitrée.",
  category: "Habillage",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//HADA THW ZAJA
,
{
  id: 49,
  name: "Glass Design",
  image: "/habillage-11.png",
  title: "Habillage de Vitrage",
  description: "Adhésif décoratif pour surfaces en verre.",
  category: "Habillage",
  size: "col-span-12 md:col-span-4",
  imageHeight: "h-[350px]",
}//HADO THOMA ZAJJ
  ];

  const { tabCounts, categoryCounts } = useMemo(() => {
    const pCount = projects.length;
    const cCount = clients.length;
    const cats: CategoryId[] = [
      "all",
      "Enseigne",
      "Stand",
      "PLV",
      "Habillage",
      "Palissade",
    ];
    const counts: CategoryCounts = {};

    cats.forEach((cat) => {
      counts[cat] = {
        projects:
          cat === "all"
            ? pCount
            : projects.filter((p) => p.category === cat).length,
        clients:
          cat === "all"
            ? cCount
            : clients.filter((c) => c.category === cat).length,
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
              onClick={() => {
                setActiveTab(tab.id);
                setActiveCategory("all");
              }}
            >
              {tab.name}
              <span className="text-sm ml-1 align-super">{tab.count}</span>
            </motion.button>
            {index < tabs.length - 1 && (
              <div className="p-2 rounded-full bg-black h-4 w-4"></div>
            )}
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
            .filter(
              (item) =>
                activeCategory === "all" || item.category === activeCategory,
            )
            .map((item: any) => (
              <motion.div
                layout
                key={item.id}
                className={`${activeTab === "projects" ? item.size : "col-span-12 md:col-span-4"}`}
              >
                <div
                  className={`relative ${activeTab === "projects" ? item.imageHeight : "h-64"} mb-4 overflow-hidden rounded-2xl bg-gray-50`}
                >
                  <Image
                    fill
                    src={
                      item.image.startsWith("/") ? item.image : `/${item.image}`
                    }
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-xs font-bold mb-2 text-gray-400 uppercase tracking-widest">
                  / {item.name}
                </h3>
                <h3 className="text-xl font-bold mb-2">
                  {item.title || item.name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-3">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
