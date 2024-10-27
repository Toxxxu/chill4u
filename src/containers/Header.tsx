import { Plane } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Plane className="h-6 w-6" />
          <span className="font-bold">Chill4U</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Місця
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Про нас
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Контакти
          </Link>
        </nav>
      </div>
    </header>
  );
};
