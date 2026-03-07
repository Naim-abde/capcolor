import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

import Image from "next/image";

const companies = [
  { name: "LG", logo: "/lg-electronics.svg" },
  { name: "Orange", logo: "/orange-3.svg" },
  { name: "Aramex", logo: "/aramex-logo-1.svg" },
  { name: "Mercedes", logo: "/mercedes-benz-9.svg" },
  { name: "axa", logo: "/axa-768.svg" },
  { name: " AlBarid bank", logo: "/baridbank.svg" },
  { name: "Royal air maroc", logo: "/royal-air-maroc-1.svg" },
  { name: "chergui", logo: "/chergui.png" },
  { name: "pizza hut", logo: "/pizza-hut.svg" },
  { name: "2M", logo: "/2m.png" },
];

const firstRow = companies.slice(0, Math.ceil(companies.length / 2));
const secondRow = companies.slice(Math.ceil(companies.length / 2));

const CompanyLogo = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="mx-8 flex items-center justify-center">
      <Image
      priority 
      width={200}
        height={200}    
        src={logo} 
        alt={`${name} logo`} 
        className="
        w-16
        h-16
    

        "
      />
    </div>
  );
};

const Trusted = () => {
  return (
    <div className={cn(

      "w-full overflow-hidden bg-white py-12 "
    )}>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Partenaire des sociétés nationales et internationales
        </h2>
        <p className="text-gray-600">
          Innover par l'impression de haut niveau
        </p>

      </div>
      
      <div className="flex w-full flex-col items-center mt-10 md:mt-0 ">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((company, idx) => (
            <CompanyLogo key={`${company.name}-${idx}`} {...company} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s] mt-10 md:mt-0">
          {secondRow.map((company, idx) => (
            <CompanyLogo key={`${company.name}-${idx}`} {...company} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Trusted;