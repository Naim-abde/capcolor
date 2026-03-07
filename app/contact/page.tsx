import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '../navbar';
import Footer from '../footer';
import { div } from 'framer-motion/client';
const ContactSection = () => {
  return (
    <div>
        <Navbar/>
       <section className="py-16 md:py-24 px-6 2xl:w-4/5 md:mx-auto md:px-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">
              Contact
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Parlons de votre prochain projet.
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Vous avez une idée ? Une envie de changement ? Notre équipe est là pour vous accompagner de la conception à l'installation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <MapPin size={24} className="text-black" />
              </div>
              <div>
                <h3 className="font-bold text-black">Notre Adresse</h3>
                <p className="text-[#7b7b7b]">Rue 1 N°62 Mazola Hay Hassani, Casablanca</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <Phone size={24} className="text-black" />
              </div>
              <div>
                <h3 className="font-bold text-black">Téléphone</h3>
                <p className="text-[#7b7b7b]">+212 522 89 11 84</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <Mail size={24} className="text-black" />
              </div>
              <div>
                <h3 className="font-bold text-black">Email</h3>
                <p className="text-[#7b7b7b]">capcolor2@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-black">Nom complet</label>
                <input 
                  type="text" 
                  placeholder="Votre nom" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-black">Email</label>
                <input 
                  type="email" 
                  placeholder="votre@email.com" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Sujet</label>
              <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all">
                <option>Enseignes & Signalétique</option>
                <option>Impression Grand Format</option>
                <option>Habillage Véhicule</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Message</label>
              <textarea 
                rows="4" 
                placeholder="Comment pouvons-nous vous aider ?" 
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
              ></textarea>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
              Envoyer le message
            </button>
          </form>
        </div>

      </div>
    </section> 
    <Footer/>
</div>
    
  );
};

export default ContactSection;