"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Import ShadCN Sheet component

import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
// Import MagicUI Marquee
import Marquee from "@/components/ui/marquee";
import Ripple from "@/components/ui/ripple"; // Import the Ripple component
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const companies = [
  {
    name: "TechCorp",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Leading technology solutions",
  },
  {
    name: "GreenEnergy",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Sustainable energy solutions",
  },
  {
    name: "MediHealth",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Innovative healthcare products",
  },
  {
    name: "ConstructPro",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Quality construction materials",
  },
  {
    name: "AgriTech",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Advanced agricultural solutions",
  },
  {
    name: "LogisTech",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Efficient logistics solutions",
  },
];

export default function Home() {
  const [registerType, setRegisterType] = useState("");
  const [loginType, setLoginType] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center">
            <svg
              className="h-8 w-8 text-[#28d478]"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="m9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
            <span className="ml-2 text-xl font-bold text-black">
              Volt<span className="text-[#28d478]">Bridge</span>
            </span>
          </Link>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="fixed inset-0 bg-white shadow-md h-[100vh] w-[100vw] p-4 space-y-4 z-50"
              >
                {/* Register and Login Buttons */}
                <div className="flex flex-col gap-4 mt-14">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-black w-full">
                        Register Your Company
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Register Your Company</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col w-full">
                        <Button
                          variant="outline"
                          onClick={() => setRegisterType("supplier")}
                          className="border-black my-2"
                        >
                          As a Supplier
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setRegisterType("buyer")}
                          className="border-black my-2"
                        >
                          As a Buyer
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-black w-full">
                        Login
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Login</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col w-full">
                        <Button
                          variant="outline"
                          onClick={() => setLoginType("supplier")}
                          className="border-black my-2"
                        >
                          Login as Supplier
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setLoginType("buyer")}
                          className="border-black my-2"
                        >
                          Login as Buyer
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden md:block border-black"
                >
                  Register Your Company
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Register Your Company</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col w-full">
                  <Button
                    variant="outline"
                    onClick={() => setRegisterType("supplier")}
                    className=" border-black my-2"
                  >
                    As a Supplier
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setRegisterType("buyer")}
                    className=" border-black my-2"
                  >
                    As a Buyer
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden md:block border-black"
                >
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col w-full">
                  <Button
                    variant="outline"
                    onClick={() => setLoginType("supplier")}
                    className=" border-black my-2"
                  >
                    Login as Supplier
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setLoginType("buyer")}
                    className=" border-black my-2"
                  >
                    Login as Buyer
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full bg-gray-50">
        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center w-full lg:h-[400px] h-[300px] bg-gradient-to-r from-green-300 via-green-500 to-[#28d478] text-white">
          <div className="absolute inset-0 bg-black opacity-30"/>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Streamlining B2B Connections In EV Supply Chain
            </h1>
            <p className="text-lg mb-4">
              Find your trusted suppliers or buyers today
            </p>

            {/* Search Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 mx-auto">
              <Input
                type="search"
                placeholder="Search with keywords like castings, bearings..."
                className="w-full sm:w-[300px] bg-white/90 placeholder-gray-500 text-gray-900 border-black"
              />
              <Button
                type="submit"
                className="w-full sm:w-auto bg-[#28a745] hover:bg-[#218838] text-white rounded-md px-6"
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Verified Companies Section */}
        <div className="bg-gray-50 lg:py-8 mt-8 lg:mt-0 lg:mb-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center lg:mb-12 mb-6">
              Verified Companies
            </h2>
            {/* MagicUI Marquee component */}
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
              {companies.map((company, index) => (
                <Card
                  key={index}
                  className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg overflow-hidden mx-4"
                >
                  <CardContent className="p-4 flex justify-center items-center">
                    <img
                      className="w-20 h-20 object-cover"
                      src={company.logo}
                      alt={company.name}
                    />
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-black">
                        {company.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {company.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Marquee>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-white text-center">
          <p>&copy; 2024 VoltBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
