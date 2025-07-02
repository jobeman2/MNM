'use client'

import React from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee"

const brands = [
  {
    name: "Coca-Cola",
    logo: "/images/coca.png",
    alt: "Coca-Cola",
  },
  {
    name: "Safaricom",
    logo: "/images/safari.png",
    alt: "Safaricom",
  },
  {
    name: "MTN",
    logo: "/images/mtn.png",
    alt: "MTN",
  },
  {
    name: "Ethio Telecom",
    logo: "/images/eth.png",
    alt: "Ethio Telecom",
  },
  {
    name: "UNICEF",
    logo: "/images/tb.png",
    alt: "UNICEF",
  },
  {
    name: "Heineken",
    logo: "/images/unnamed.png",
    alt: "Heineken",
  },
]

export default function BrandLogos() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl font-dm font-semibold text-[#3A3A38] mb-10">
          Working with those companies
        </h2>
        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {brands.concat(brands).map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center mx-8 h-24 grayscale hover:grayscale-0 transition duration-300"
            >
              <div className="relative h-20 w-auto aspect-[3/1]">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 120px, 180px"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
