 import Head from "next/head";
import Navbar from "../navbar"; // Th999 mn smiyt l-fichier (navbar vs Navbar)
import Footer from "../footer"; // Th999 mn smiyt l-fichier (footer vs Footer)

const About = () => {
  return (
    <>
      {/* --- SEO Section: Ghadi t-khlli l-page t-classa mzyan f Google --- */}
      <Head>
        <title>À propos | Cap Color Casablanca - Expertise en Impression</title>
        <meta name="description" content="Découvrez l'histoire de Cap Color, experts en impression au Maroc depuis plus de 15 ans. Plus de 950 projets réalisés avec précision." />
        <meta property="og:title" content="Cap Color - 15 ans d'Expertise en Impression" />
        <meta property="og:description" content="Spécialistes de l'impression de haut niveau à Casablanca." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      {/* Performance: Tag <main> mofid l-robots dyal search engines */}
      <main className="min-h-screen"> 
        <section className="py-16 md:py-24 px-6 2xl:w-4/5 md:mx-auto md:px-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content (SEO Semantic) */}
            <article className="space-y-6">
              <header>
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">
                  Notre Histoire
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  L'impression de haut niveau depuis plus de 18 ans.
                </h1>
              </header>

              <p className="text-lg text-gray-600 leading-relaxed">
                Depuis notre création, nous investissons continuellement pour enrichir notre gamme avec des produits innovants. Notre mission est de transformer vos idées en réalité visuelle avec une précision inégalée.
              </p>
              
              {/* Performance: Accessible stats without using H3 for styling */}
              <div className="pt-4 flex flex-col sm:flex-row gap-8" role="list">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-black">18+</span>
                  <span className="text-sm text-[#7b7b7b] uppercase tracking-wide">Ans d'Expertise</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-black">950+</span>
                  <span className="text-sm text-[#7b7b7b] uppercase tracking-wide">Projets Réalisés</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-black">Maroc</span>
                  <span className="text-sm text-[#7b7b7b] uppercase tracking-wide">Couverture Nationale</span>
                </div>
              </div>
            </article>

            {/* Right Side - Google Maps Location */}
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 h-[450px] md:h-full min-h-[450px] overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846383134106!2d-7.633!3d33.573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIyLjgiTiA3wrAzNyc1OC44Ilc!5e0!3m2!1sfr!2sma!4v1640000000000!5m2!1sfr!2sma" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl transition-opacity duration-500"
                title="Localisation Cap Color Casablanca sur Google Maps"
              ></iframe>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;