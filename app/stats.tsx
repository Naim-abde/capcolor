'use client'

import React, { useState, useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const formatNumber = (num: string): string => {
    if (num.includes("%")) {
      return num;
    }
    if (num.includes("$")) {
      return `$${num.replace(/[^0-9]/g, "")}+`;
    }
    return `${num.replace(/[^0-9]/g, "")}+`;
  };

  return (
    <div ref={cardRef} className="bg-gray-100 p-6 shadow-sm">
      <div className="h-14 ">
        <div
          className={`text-5xl font-bold mb-2 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {formatNumber(number)}
        </div>
      </div>
      <div
        className={`text-[#7b7b7b] text-sm transform transition-all duration-700 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  // 1. Solution dyal l-Hydration: n-tsennaw l-client side mounting
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    // S77na l-apostrophe hna bach build idoz n9i f Vercel
    { number: "18", label: "Années d&apos;expérience" }, 
    { number: "950", label: "Projets réalisés" },
    { number: "30", label: "Equipe expérimenté" },
    { number: "300", label: "Clients satisfaits" },
  ];

  // 2. Ila baki hydration mat-salatch, rj3 state khawya bach n-avoidiw l-mismatch
  if (!mounted) {
    return (
      <div className="mx-auto 2xl:w-4/5 md:px-16 px-6">
        <Separator className="my-16" />
        <div className="h-64" /> {/* Space placeholder */}
      </div>
    );
  }

  return (
    <div className="mx-auto 2xl:w-4/5 md:px-16 px-6">
      <Separator className="my-16" />

      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-2/4 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold">CapColor en chiffre : </h2>
          <p className="text-gray-500 mt-4">
            Nos projets sont notre fierté
          </p>
        </div>
        <div className="md:w-2/4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-16" />
    </div>
  );
};

export default Stats;