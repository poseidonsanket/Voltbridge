"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const Header = () => {
  const [registerType, setRegisterType] = useState("");
  const [loginType, setLoginType] = useState("");
  return (
    <header className="bg-gray-50 shadow-lg w-full">
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
  );
};

export default Header;
