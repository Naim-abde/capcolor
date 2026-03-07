'use client'

import { Marquee } from "@/components/magicui/marquee";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
    {
      src: "/lynxk.jpeg",
      name: "Lynx Optique",
      logo: "",
      type: "Enseigne",
      detail: "Conception et pose d'une façade moderne en panneau évidé noir pour Lynx Optique. L'ensemble est valorisé par un logo lumineux aux couleurs blanc et orange.",
      description: "Magasin d'optique Lynx au Maârif",
      className: "",
    },
    {
      src: "/dolce.jpeg",
      name: "Dolce & Gabbana",
      logo: "gg",
      detail :  "Réalisation d'un panneau publicitaire haut de gamme mettant en avant la collection eyewear. Le visuel combine élégance et modernité avec un portrait sous hijab sublimant les montures.",
      description: "Marque de luxe italienne emblématique",
      className: "",
      type:"PLV"
    },
    {
      src: "/chanel.jpeg",
      name: "chanel",
      logo: "/",
      description: "Référence mondiale du luxe absolu",
      detail : "Installation d'un panneau publicitaire épuré sur fond blanc pour la gamme optique. Le visuel met en scène l'élégance du regard avec un focus sur les montures iconiques.",

      className: "",
      type:"PLV"
    },
    {
      src: "/bur.jpeg",
      name: "burberry",
      logo: "/",
      description: "Référence mondiale du style britannique",
      detail : "Conception d'une enseigne de prestige sur fond noir profond avec marquage doré. L'installation surplombe le magasin pour affirmer l'identité luxueuse et classique de la marque.",
      className: "",
      type:"Enseigne"
    },
    {
      src: "/swar.jpeg",
      name: "Swarovski",
      logo: "/",
      description: "Le leader mondial du cristal",
      detail : "Réalisation d'un panneau évidé premium au design épuré en bleu ciel iconique. L'espace est magnifié par des visuels d'Ariana Grande mettant en valeur les collections optiques.",
      type:"Aménagement",
  
      className: "",
    },
    {
      src: "/sungl.jpeg",
      name: "Sunglass Store",
      logo: "/",
      description: "Magasin de Lunettes 100% solaire",
      detail : "Habillage publicitaire dynamique mettant en scène des icônes mondiales telles que Kendall Jenner. Une signalétique d'impact qui positionne le magasin comme une référence mode et lifestyle.",

      className: "",
      type:"Habillage"
    },
    {
      src: "/lacoste.jpg",
      name: "Lacoste",
      logo: "/",
      description: "L'élégance sportive à la française",
      detail : "Aménagement d'une façade sobre et élégante sur un fond noir mat. L'installation met en relief l'enseigne Lacoste pour un rendu visuel à la fois minimaliste et prestigieux.",

      className: "",
      type:"Aménagement"
    },
    {
      src: "/last.jpeg",
      name: "burberry",
      logo: "/",
      description: "Référence mondiale du style britannique",
      detail : "Conception d'un panneau publicitaire blanc épuré mettant en scène Selena Gomez dans un style tennis. Le visuel souligne le contraste élégant entre la clarté du fond et les montures noires.",
      className: "",
      type:"Décoration"
    },
    {
      src: "/pizza.jfif",
      name: "pizza",
      logo: "",
      description: "Restauration rapide présente partout",
      detail : "Réalisation d'une enseigne lumineuse iconique sur un fond rouge vif. La structure met en avant l'identité visuelle de Pizza Hut avec une finition éclatante pour une visibilité maximale.",
      
      className: "",
      type:"Enseigne"
    },
    {
      src: "/opera.jfif",
      name: "Opera art gallery",
      logo: "/nord-logo.png",
      description: "Galerie d'art moderne et contemporain",
      detail : "Réalisation d'une enseigne lumineuse iconique sur un fond rouge vif. La structure met en avant l'identité visuelle de Pizza Hut avec une finition éclatante pour une visibilité maximale.",

      className: "",
      type:"Habillage"
    },
    {
      src: "/blaire.jpg",
      name: "blair auto",
      logo: "/",
      description: "Expert en entretien automobile professionnel",
      detail : "Habillage intégral de la façade en noir mat avec marquage du logo en blanc pur. Un design minimaliste et contrasté qui souligne l'expertise technique et le sérieux de l'enseigne.",

      className: "",
      type:"Habillage"
    },
  ];

const firstRow = projects.slice(0, projects.length);
const secondRow = projects.slice(3, projects.length);
const thirdRow = projects.slice(6, projects.length);


const ReviewCard = ({
    src,
    name,
    description,
    onClick,
  }: {
    src: string;
    name: string;
    description: string;
    onClick: () => void;
  }) => {
    return (
      <motion.figure
        className="relative cursor-pointer overflow-hidden group"
        onClick={onClick}
      >
        <div className="relative">
          <Image
            width={500}
            height={500}
            src={src}
            alt="projects"
            className="object-cover w-full"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
            <h3 className="text-white text-xl font-semibold">{name}</h3>
            <p className="text-white/80 text-sm">{description}</p>
          </div>
        </div>
      </motion.figure>
    );
  };



const ProjectDetails = ({
    project,
    onClose,
  }: {
    project: (typeof projects)[0];
    onClose: () => void;
  }) => {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full  md:w-2/5 bg-white shadow-lg p-6 z-50 cursor-pointer"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
  
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
          <Image
            src={project.src}
            alt={project.name}
            width={500}
            height={300}
            className="w-full rounded-lg mb-6 object-cover h-60"
          />
          <p className="text-gray-600 mb-4">{project.description}</p>
  
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Project Details</h3>
            <p className="text-gray-600">
              {project.detail}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {project.type}
              </span>
             
            </div>
          </div>
        </div>
      </motion.div>
    );
  };


  export function Projects() {
    const [selectedProject, setSelectedProject] = useState<
      (typeof projects)[0] | null
    >(null);
  
    return (
      <section className="w-full bg-white py-16 md:mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto mb-12 px-6 md:px-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore our projects
          </h2>
          <p className="text-[#7b7b7b] text-lg">
            Our projects showcase the best visuals and storytelling techniques.
          </p>
        </div>
  
        <div className="w-full h-[800px] flex items-center justify-center overflow-hidden py-8">
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:60s]"
            paused={selectedProject !== null}
          >
            {firstRow.map((review, index) => (
              <ReviewCard
                key={index}
                {...review}
                onClick={() => setSelectedProject(review)}
              />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:60s]"
            paused={selectedProject !== null}
          >
            {secondRow.map((review, index) => (
              <ReviewCard
                key={index}
                {...review}
                onClick={() => setSelectedProject(review)}
              />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:60s] hidden md:flex"
            paused={selectedProject !== null}
          >
            {thirdRow.map((review, index) => (
              <ReviewCard
                key={index}
                {...review}
                onClick={() => setSelectedProject(review)}
              />
            ))}
          </Marquee>
        </div>
  
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setSelectedProject(null)}
              />
              <ProjectDetails
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </>
          )}
        </AnimatePresence>
      </section>
    );
  }
  