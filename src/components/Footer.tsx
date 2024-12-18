"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const targetSection = document.getElementById(sectionId);
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row h-auto bg-gradient-to-b from-black to-blue-600 text-white" id='Contact'>
        {/* Logo Section */}
        <div className="border-b-2 sm:border-b-0 sm:border-r-2 border-white w-full sm:w-1/3 flex justify-center items-center py-3">
          <Image
            src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733112796/vqjifbdhv8am24uitmmt.png"
            alt="Logo"
            width={192}
            height={160}
            className="rounded-lg object-cover"
          />
        </div>
        {/* Contact Section */}
        <div className="w-full sm:w-1/3 hidden sm:block border-b-2 sm:border-b-0 sm:border-r-2 border-white py-3">
          <div className="mt-6 flex flex-col items-center">
            <h1 className="font-bold text-xl sm:text-2xl mb-4">Contact us</h1>
            <div className="numbers">
            <p className="font-medium text-base sm:text-lg">
              7990553041 &nbsp; Arthur Murray
            </p>
            <p className="font-medium text-base sm:text-lg">
              7205131346 &nbsp; Harley Joan
            </p>
            </div>
            <a
              href="mailto:nitrkl.ecell@gmail.com"
              className="font-medium text-base sm:text-lg underline block mt-4"
            >
              nitrkl.ecell@gmail.com
            </a>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="w-full sm:w-1/3 hidden sm:block text-center py-6 mt-6 ">
          <div className="text-base sm:text-lg font-bold mb-1 cursor-pointer">
            <a onClick={() => handleMenuItemClick("About")}>About us</a>
          </div>
          <div className="text-base sm:text-lg font-bold mb-1 cursor-pointer">
            <a onClick={() => handleMenuItemClick("Speakers")}>Speaker</a>
          </div>
          <div className="text-base sm:text-lg font-bold mb-1 cursor-pointer">
            <a onClick={() => handleMenuItemClick("Sponsors")}>Sponsors</a>
          </div>
          <div className="text-base sm:text-lg font-bold cursor-pointer">
            <a onClick={() => handleMenuItemClick("Parteners")}>
              Our Partners
            </a>
          </div>
        </div>
        {/* Mobile Menu Icon */}
        <div className="mobilefooter flex sm:hidden justify-between items-center pl-3">
          <div className="w-1/2 sm:w-1/3 py-3">
              <div className="mt-6 flex flex-col items-center">
                <h1 className="font-bold text-lg sm:text-2xl mb-4">Contact us</h1>
                <div className="numbers">
                <p className="font-medium text-sm sm:text-lg">
                  7990553041 &nbsp; Arthur Murray
                </p>
                <p className="font-medium text-sm sm:text-lg">
                  7205131346 &nbsp; Harley Joan
                </p>
                </div>
                <a
                  href="mailto:nitrkl.ecell@gmail.com"
                  className="font-medium text-sm sm:text-lg underline block mt-4"
                >
                  nitrkl.ecell@gmail.com
                </a>
              </div>
          </div>
          <div className="w-1/2 sm:w-1/3 text-center py-6 mt-6 ">
            <div className="text-base sm:text-lg font-bold mb-1 cursor-pointer">
              <a onClick={() => handleMenuItemClick("About")}>About us</a>
            </div>
            <div className="text-base sm:text-lg font-bold mb-1 cursor-pointer">
              <a onClick={() => handleMenuItemClick("Speakers")}>Speaker</a>
            </div>
            <div className="text-base sm:text-lg font-bold mb-1 cursor-pointer">
              <a onClick={() => handleMenuItemClick("Sponsors")}>Sponsors</a>
            </div>
            <div className="text-base sm:text-lg font-bold cursor-pointer">
              <a onClick={() => handleMenuItemClick("Parteners")}>
                Our Partners
              </a>
            </div>
          </div>
      </div>
      </div>
      {/* Footer Text */}
      <div className="bg-black h-6 w-full text-center flex items-center justify-center">
        Made with 🩵 by WEBWIZ
      </div>
    </>
  );
}

export default Footer;
