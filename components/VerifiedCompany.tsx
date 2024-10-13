"use client";
import React, { useEffect, useState } from "react";
import Marquee from "./ui/marquee";
import { Card, CardContent } from "./ui/card";

const VerifiedCompany = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch data from the API route
    const fetchListings = async () => {
      const response = await fetch("http://localhost:3000/api/verifiedCompany");
      const data = await response.json();
      setListings(data);
      console.log(data);
    };

    fetchListings();
  }, []);
  return (
    <div className="bg-gray-100 lg:py-8 mt-8 lg:mt-0 lg:mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center lg:mb-12 mb-6">
          Verified Companies
        </h2>
        {/* MagicUI Marquee component */}
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          {listings.map((company: any, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg overflow-hidden mx-4 w-[400px]"
            >
              <CardContent className="p-4">
                {/* Flex container for image and title side by side */}
                <div className="flex items-center ">
                  <img
                    className="w-24 h-20 object-fit" // or rounded-lg for slightly rounded corners
                    src={`/uploads/${company.image_url}`}
                    alt={company.comp_name}
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-black">
                      {company.comp_name}
                    </p>
                  </div>
                </div>
                {/* Description below */}
                <p className="mt-4 text-sm text-gray-500 line-clamp-5">
                  {company.Company_Overview.length > 100
                    ? `${company.Company_Overview.slice(0, 100)}...`
                    : company.Company_Overview}
                </p>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default VerifiedCompany;
