"use client";

import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");

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
    { icon: PiFacebookLogo, href: "https://www.facebook.com/CAPcolor.ma/" },
    { icon: PiInstagramLogo, href: "#" },
    { icon: PiLinkedinLogo, href: "#" },
    { icon: PiTwitterLogo, href: "#" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call to your backend
      setSubscriptionStatus("success");
      setEmail("");
      setTimeout(() => setSubscriptionStatus(""), 3000);
    }
  };

  return (
    <footer className="py-10 md:py-16 md:mt-20 px-6 2xl:w-4/5 md:mx-auto md:px-16">
  <Separator className="mb-12" />
  <div className="mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
      
      <div className="flex flex-col justify-start">
        <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
        <a
          href="mailto:capcolor2@gmail.com"
          className="text-xl hover:underline inline-block mb-4 text-gray-700"
        >
          capcolor2@gmail.com
        </a>
        <p className="text-gray-600 leading-relaxed">
          Rue 1 N°62 Mazola Hay Hassani  
          <br />
          Casablanca, Maroc
        </p>
      </div>

      {/* Right side - Navigation (المكان اللي كان فيه newsletter دابا فيه الروابط) */}
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

    {/* Bottom section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200">
      {/* Legal links */}
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

      {/* Social links */}
      <div className="flex gap-6 mb-4 md:mb-0">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              className="text-[#7b7b7b] hover:text-gray-900 transition-colors" target="_blank"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>

      {/* Copyright - متنساش تبدل Epic بـ Cap Color */}
      <div className="text-[#7b7b7b] text-sm">© 2026 Cap Color, Inc.</div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
