import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              TravelWorld is your gateway to unforgettable adventures around the
              globe.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> 123 Travel St, City, Country
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" /> +1 234 567 890
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" /> info@travelworld.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 TravelWorld. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
