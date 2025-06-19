'use client';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { useState } from 'react';

export default function Freelance() {
  const services = [
    {
      title: "Manual QA",
      description: "Short pitch about the service.",
      cost: "TBD",
    },
    {
      title: "Automate a Smoke Test Suite",
      description: "Short pitch about the service.",
      cost: "TBD",
    },
    {
      title: "Automate a Regression Test Suite",
      description: "Short pitch about the service.",
      cost: "TBD",
    },
    {
      title: "Automate an API Test Suite",
      description: "Short pitch about the service.",
      cost: "TBD",
    },
    {
      title: "Create custom tools for your team",
      description: "Short pitch about the service.",
      cost: "TBD",
    },
    {
      title: "Training your team",
      description: "Short pitch about the service.",
      cost: "TBD",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className="mt-12 bg-gray-900 py-8">
        <h3 className="text-center text-white mb-4">Schedule a Meeting</h3>
        <div className="flex justify-center">
        </div>
      </div>
      <Footer />
    </div>
  );
}

