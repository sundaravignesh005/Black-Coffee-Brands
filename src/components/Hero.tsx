
'use client';

import Image from "next/image";
import { MapPin, Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { useState } from "react";

const HERO_IMAGE = "/image/hero-couple.jpg";

const stats = [
  { value: "25+", label: ["Lifestyle", "Amenities"] },
  { value: "10 Mins", label: ["From Vandalur", "Bus Stand"] },
  { value: "100%", label: ["Secured", "Gated Community"] },
  { value: "80%", label: ["Home Loan", "Facility"] },
];

const box =
  "mx-auto w-[calc(100%-32px)] max-w-[1308px] lg:w-[calc(100%-212px)]";

function Logo() {
  return (
    <a
      href="#home"
      aria-label="Felixa Vistas"
      className="block shrink-0 leading-none text-white"
    >
      <div className="relative">
        <Image
          src="/image/Felixa Vistas Logo with Golden X.jpg"
          alt="Felixa Vistas Logo"
          width={120}
          height={60}
          className="h-auto w-[80px] brightness-150 contrast-125 sm:w-[100px] md:w-[120px]"
          priority
        />
      </div>
    </a>
  );
}

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-white">
      {/* Hero background */}
      <section
        id="home"
        className="relative h-[530px] w-full sm:h-[560px] lg:h-[584px]"
      >
        <Image
          src={HERO_IMAGE}
          alt="Couple sitting together in a modern living room"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Reference image overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Soft white fade at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[105px] bg-gradient-to-b from-transparent to-white" />

        {/* Navigation */}
        <div className={`${box} relative z-10 h-full`}>
          <nav className="flex items-center justify-between pt-[30px]">
            <Logo />

            {/* Desktop Menu */}
            <ul className="font-nav hidden items-center gap-[29px] pr-4 text-[13px] font-semibold text-white md:flex">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-opacity hover:opacity-70"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute left-0 right-0 top-[80px] z-50 bg-[#2d6a66] p-6 md:hidden">
              <ul className="space-y-4 text-center text-[15px] font-semibold text-white">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hero text: right side */}
          <div className="flex justify-center px-4 pt-[66px] text-center text-white md:pt-[72px] lg:absolute lg:right-0 lg:top-[130px] lg:w-[610px] lg:px-0 lg:pt-0">
            <div className="w-full">
              {/* Location badge */}
              <div className="mb-[9px] inline-flex h-[29px] items-center gap-1.5 rounded-md bg-[#c4aa92]/90 px-3 text-[9px] font-medium uppercase tracking-wide text-white">
                <MapPin className="size-3" aria-hidden="true" />
                Padappai, Chennai
              </div>

              {/* Heading */}
              <h1 className="mx-auto mb-[17px] max-w-[610px] text-[34px] font-semibold leading-[1.2] tracking-normal text-white sm:text-[42px] lg:whitespace-nowrap lg:text-[52px] lg:leading-[1.3]">
                Creative Home Simpify
                <br />
                Your Furniture
              </h1>

              {/* Description */}
              <p className="mx-auto mb-[16px] max-w-[530px] px-2 text-[11px] font-normal leading-[18px] text-white sm:text-[12px]">
                Do i have consent to record this meeting gain locaion,
                root-and-branch, review,
                <br className="hidden sm:block" />
                nor game plan who&apos;s the goto
              </p>

              {/* CTA */}
              <a
                href="#visit"
                className="inline-flex h-[43px] min-w-[133px] items-center justify-center rounded-md bg-[#c4aa92] px-6 text-[12px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#ad927a]"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics card */}
      <div className={`${box} relative z-20 -mt-[100px]`}>
        <div className="grid min-h-[155px] grid-cols-2 overflow-hidden rounded-[22px] bg-[#286f6b] py-5 text-center text-white shadow-sm md:min-h-[190px] md:grid-cols-4 md:items-center md:py-0">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`flex min-h-[105px] flex-col items-center justify-center px-2 py-3 md:min-h-[105px] md:py-0 ${
                index % 2 === 0
                  ? "border-r border-white/60"
                  : ""
              } ${
                index < 2
                  ? "border-b border-white/60 md:border-b-0"
                  : ""
              } ${
                index === 1
                  ? "md:border-r md:border-white/60"
                  : ""
              } ${
                index === 2
                  ? "md:border-r md:border-white/60"
                  : ""
              } ${
                index === 3
                  ? "border-r-0"
                  : ""
              }`}
            >
              <span className="mb-1 text-[30px] font-semibold leading-[1.2] sm:text-[36px] md:text-[40px]">
                {stat.value}
              </span>

              <span className="text-[13px] uppercase leading-[22px] sm:text-[15px] md:text-[19px] md:leading-[27px]">
                {stat.label[0]}
                <br />
                {stat.label[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
