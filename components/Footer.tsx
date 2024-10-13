import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-left\">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <svg
                className="h-8 w-8 text-[rgb(16,185,129)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span className="text-xl font-bold">
                Volt<span className="text-[#28d478]">Bridge</span>
              </span>
            </Link>
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-semibold">Get In touch</span>
              <Link
                href="https://www.linkedin.com"
                className="text-[#10B981] hover:text-[#059669]"
              ></Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Who We Are</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:text-[#10B981]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm hover:text-[#10B981]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-[#10B981]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm hover:text-[#10B981]">
                  Data Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-[#10B981]">
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-sm text-gray-500">
          <p>© 2024 Voltbridge Technologies Pvt. Ltd. | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
