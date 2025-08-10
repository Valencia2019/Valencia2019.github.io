'use client';

import { useState } from "react";
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
    <main className="flex-grow flex flex-col">
      <div className="items-center mb-4">
        <h1 className="text-4xl font-bold mb-2 flex justify-center">My Freelance Services</h1>
        <p className="text-gray-300 text-lg flex justify-center">
          Here&apos;s a list of the freelance services I offer and starting prices.
        </p>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/4 md:w-1/3 xl:w-1/4 ml-4 lg:ml-10">
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
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20 md:gap-8" data-testid="service-cards">
            {visibleServices.map((service, index) => (
              <div className="md:w-1/2 xl:w-full" key={index}>
                <ServiceCard {...service} />
              </div>
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
        </div>
      </div>
    </main>
  );
}
