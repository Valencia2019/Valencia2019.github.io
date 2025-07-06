'use client';

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { ServicesMenu } from "@/components/ServicesMenu";

// Organize services by category and subcategory
const grouped = services.reduce((acc, service) => {
  const { category, subCategory } = service;
  if (!acc[category]) acc[category] = {};
  if (!acc[category][subCategory]) acc[category][subCategory] = [];
  acc[category][subCategory].push(service);
  return acc;
}, {} as Record<string, Record<string, typeof services>>);

const categories = Object.keys(grouped);

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    Object.keys(grouped[categories[0]])[0]
  );
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredServices = grouped[selectedCategory][selectedSubCategory] || [];
  const visibleServices = filteredServices.slice(0, visibleCount);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-8 px-6 py-20 max-w-7xl mx-auto">
        <ServicesMenu
          categories={grouped}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          onSelect={(cat, sub) => {
            setSelectedCategory(cat);
            setSelectedSubCategory(sub);
            setVisibleCount(3);
          }}
        />

        <main className="flex-1 space-y-6 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {visibleServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {visibleCount < filteredServices.length && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="px-4 py-2 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black rounded-lg"
              >
                Show More
              </button>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
