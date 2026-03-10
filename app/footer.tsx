"use client";

import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";

const Footer = () => {
  // Performance: 7yedna state dyal newsletter hit makhdammch biha hna
  // Hadchi kiy-avoidi build errors f Vercel

  const mainLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Sitemap", href: "#" },
  ];

  const socialLinks = [
    { icon: PiFacebookLogo, href: "https://www.facebook.com/CAPcolor.ma/", label: "Facebook" },
    { icon: PiInstagramLogo, href: "#", label: "Instagram" },
    { icon: PiLinkedinLogo, href: "#", label: "LinkedIn" },
    { icon: PiTwitterLogo, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="py-10 md:py-16 md:mt-20 px-6 2xl:w-4/5 md:mx-auto md:px-16">
      <Separator className="mb-12" />
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl font-bold mb-4 text-black">Contactez-nous</h2>
            <a
              href="mailto:capcolor2@gmail.com"
              className="text-xl hover:underline inline-block mb-4 text-gray-700 transition-all"
            >
              capcolor2@gmail.com
            </a>
            {/* SEO: Using address tag for local business indexing */}
            <address className="not-italic text-gray-600 leading-relaxed">
              Rue 1 N°62 Mazola Hay Hassani  
              <br />
              Casablanca, Maroc
            </address>
          </div>

          <div className="grid grid-cols-2 gap-8 md:justify-self-end w-full max-w-md">
            <div className="space-y-4">
              <h3 className="font-semibold text-black mb-2">Menu</h3>
              {mainLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#7b7b7b] hover:text-black hover:underline transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-black mb-2">Services</h3>
              {mainLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#7b7b7b] hover:text-black hover:underline transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200">
          <div className="flex gap-6 mb-4 md:mb-0">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#7b7b7b] hover:underline text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#7b7b7b] hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer" // Security: Essential for target="_blank"
                  aria-label={link.label} // SEO: Help robots identify links
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <div className="text-[#7b7b7b] text-sm font-medium">
            © 2026 Cap Color, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;