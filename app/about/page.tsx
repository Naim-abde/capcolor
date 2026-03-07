import Navbar from "../navbar";
// import Culture from "./culture";
// import Team from "./team";
import Footer from "../footer";
const About = () => {
  return (
    <div>
      <Navbar />
      {/* hero section */}
      {/* <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
              Not just a team,
              <br />
              but a family.
            </h1>
            <p className="text-xl text-[#7b7b7b]">
              We are a family of passionate creators who love to build amazing
              products
            </p>
          </div>
        </div>
      </div>

      <Culture />
      <Team /> */}
      <section className="py-16 md:py-24 px-6 2xl:w-4/5 md:mx-auto md:px-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Content */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400">
            Notre Histoire
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            L'impression de haut niveau depuis plus de 15 ans.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Depuis notre création, nous investissons continuellement pour enrichir notre gamme avec des produits innovants. Notre mission est de transformer vos idées en réalité visuelle avec une précision inégalée.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="text-3xl font-bold text-black">15+</h3>
              <p className="text-sm text-[#7b7b7b] uppercase tracking-wide">Ans d'Expertise</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black">950+</h3>
              <p className="text-sm text-[#7b7b7b] uppercase tracking-wide">Projets Réalisés</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black">Maroc</h3>
              <p className="text-sm text-[#7b7b7b] uppercase tracking-wide">Couverture Nationale</p>
            </div>
          </div>
        </div>

        {/* Right Side - Description Textuelle / Vision */}
         {/* Right Side - Google Maps Location */}
       <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 h-[450px] md:h-full min-h-[450px] overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.4754347710444!2d-7.668508924304494!3d33.56701547334346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d34df89f69f7%3A0xe6f2b463a7be6f4d!2sRue%201%20N%C2%B062%20Mazola%20Hay%20Hassani%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1715620000000!5m2!1sfr!2sma"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-xl shadow-inner transition-opacity duration-500"
    title="Localisation Cap Color Casablanca"
  ></iframe>
</div>

      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default About;
