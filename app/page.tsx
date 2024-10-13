"use client";

import { useState } from "react";
import BlogCarousel from "@/components/BlogCarousel";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VerifiedCompany from "@/components/VerifiedCompany";
import CardContainer from "@/components/CardContainer";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  console.log(loading);

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow w-full bg-gray-50">
        {/* Hero Section */}
        <Hero />

        <hr className="font-bold"></hr>

        {/* Verified Companies Section */}
        <VerifiedCompany />
      </main>

      <hr className="mb-10"></hr>

      {/* Cards Section */}
      <CardContainer />

      <div className="bg-gray-100">
        <h1 className="text-2xl font-bold text-center my-8">Latest Blogs</h1>
        <BlogCarousel />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
