"use client";

import React from "react";
import Link from 'next/link'

const Page = () => {
  const services = [
    {
      title: "Property closing",
      description: "Legally close on properties you are buying or selling.",
      icon: "🔑",
      action: "Start your closing",
    },
    {
      title: "Property ownership change",
      description: "Change the ownership structure of a property you own.",
      icon: "🏠",
      action: "Start your change",
    },
    {
      title: "Status certificate review",
      description: "Get a status certificate reviewed quickly.",
      icon: "📄",
      action: "Start your review",
    },
  ];

  const charges = [
    {
      title: "Property Closing",
      price: "₹999",
      subtitle: "Purchase / Sale",
      features: [
        "All legal tasks for your closing",
        "Your own closing dashboard",
        "Unlimited access to our team",
        "Virtual signing meeting",
      ],
      button: "Start your closing",
      highlight: true,
    },
    {
      title: "Mortgage Refinance",
      price: "₹2999",
      features: [
        "All legal tasks for your refinance",
        "Unlimited access to our team",
        "Exclusive Doormat partner deals",
        "Virtual signing meeting",
      ],
      button: "Start your refinance",
    },
    {
      title: "Ownership Change",
      price: "₹1999",
      features: [
        "All legal tasks for your change",
        "Unlimited access to our team",
        "Exclusive Doormat partner deals",
        "Virtual signing meeting",
      ],
      button: "Start your change",
    },
  ];

  return (
    <div className="p-8 space-y-12">
      {/* Services Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-primary mt-16">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md border flex flex-col items-center"
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="font-bold text-xl mt-4">{service.title}</h3>
            <p className="text-gray-600 text-center mt-2">
              {service.description}
            </p>
            <Link href={'/contact'}>
              <button className="mt-4 text-blue-500 hover:underline">
                {service.action} &rarr;
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Charges Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-primary mt-16">
        Our Pricing that makes sense !
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {charges.map((charge, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md border flex flex-col items-center ${
              charge.highlight ? "bg-orange-100 border-orange-500" : ""
            }`}
          >
            {charge.highlight && (
              <div className="absolute -top-3 px-4 py-1 text-sm bg-orange-500 text-white rounded-full">
                MOST COMMON
              </div>
            )}
            <h3 className="font-bold text-xl mt-4">{charge.title}</h3>
            <div className="text-4xl font-bold mt-2">{charge.price}</div>
            {charge.subtitle && (
              <p className="text-gray-600 mt-1">{charge.subtitle}</p>
            )}
            <ul className="mt-4 space-y-2">
              {charge.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-500 mr-2">✔️</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href={'/contact'}>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                {charge.button}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
