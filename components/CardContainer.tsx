import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { BriefcaseBusiness, CarFront, GalleryHorizontal, Lightbulb, ListFilter, Mail, Search, ShieldCheck, Users } from "lucide-react";
import { Button } from "./ui/button";

const CardContainer = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:mb-10 flex flex-col justify-center items-center gap-10 mb-10">
      <div>
        <Card className="p-2 w-[350px] shadow-md">
          <CardHeader>
            <CardTitle className="pb-4">Discover EV Suppliers</CardTitle>
            <CardDescription>
              Struggling to navigate the complex EV market? Say goodbye to
              endless searches and inconsistent information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex items-center gap-2 pb-4">
              <Search /> Customized Search Functionality
            </p>
            <p className="flex items-center gap-2 pb-4">
              <ListFilter /> Tailored Searches
            </p>
            <p className="flex items-center gap-2 pb-4">
              <BriefcaseBusiness /> In-depth Supplier Information
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card className="p-2 w-[350px] shadow-md h-[380px]">
          <CardHeader>
            <CardTitle className="pb-4">Why VoltBridge</CardTitle>
            <CardDescription>
              VoltBridge is a unique B2B platform designed to streamline
              connections between BUYERS and SUPPLIERS within the dynamic
              E-mobility industry.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex items-center gap-2 pb-4">
              <ShieldCheck /> Verified Supplier Profiles
            </p>
            <p className="flex items-center gap-2 pb-4">
              <Mail /> Contact Capability
            </p>
            <p className="flex items-center gap-2 pb-4">
              <CarFront /> Only EV Industry Focused
            </p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="p-2 w-[350px] shadow-md">
          <CardHeader>
            <CardTitle className="pb-4">Showcase EV Expertise</CardTitle>
            <CardDescription>
              Visibility is the key in the evolving EV market, put your products
              and services in front of the right customers, effortlessly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex items-center gap-2 pb-4">
              <Lightbulb />
              Showcase EV Innovations
            </p>
            <p className="flex items-center gap-2 pb-4">
              <Users /> Customer References
            </p>
            <p className="flex items-center gap-2 pb-4">
              <GalleryHorizontal /> Organized Product Presentation
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardContainer;
