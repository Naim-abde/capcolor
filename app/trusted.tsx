import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const companies = [
  { name: "LG", logo: "/lg-electronics.svg" },
  { name: "Orange", logo: "/orange-3.svg" },
  { name: "Aramex", logo: "/aramex-logo-1.svg" },
  { name: "Mercedes", logo: "/mercedes-benz-9.svg" },
  { name: "AXA", logo: "/axa-768.svg" },
  { name: "AlBarid bank", logo: "/baridbank.svg" },
  { name: "Royal Air Maroc", logo: "/royal-air-maroc-1.svg" },
  { name: "Chergui", logo: "/chergui.png" },
  { name: "Pizza Hut", logo: "/pizza-hut.svg" },
  { name: "2M", logo: "/2m.png" },
];

const firstRow = companies.slice(0, Math.ceil(companies.length / 2));
const secondRow = companies.slice(Math.ceil(companies.length / 2));

const CompanyLogo = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="mx-8 flex items-center justify-center">
      <Image
        priority 
        width={120} // Adjusted for better performance
        height={60}    
        src={logo} 
        alt={`${name} logo`} 
        className="w-20 h-12 object-contain  hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

const Trusted = () => {
  return (
    <div className={cn("w-full overflow-hidden bg-white py-12")}>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
          Partenaire des sociétés nationales et internationales
        </h2>
        <p className="text-gray-600">
          {/* S77na l-apostrophe hna bach build idoz f Vercel */}
          Innover par l&apos;impression de haut niveau
        </p>
      </div>
      
      <div className="flex w-full flex-col items-center mt-10 md:mt-0">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((company, idx) => (
            <CompanyLogo key={`first-${company.name}-${idx}`} {...company} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] mt-10">
          {secondRow.map((company, idx) => (
            <CompanyLogo key={`second-${company.name}-${idx}`} {...company} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Trusted;