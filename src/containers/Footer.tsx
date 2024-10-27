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
            <h3 className="text-lg font-semibold mb-2">Про нас</h3>
            <p className="text-sm">
              Chill4U - це ваш шлях до незабутніх пригод по всьому світу.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Швидкі посилання</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Головна
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Місця
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Зв'яжіться з нами</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> вул. Подорожня 123, Місто,
                Країна
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" /> +380 123 456 789
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" /> info@travelworld.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Слідкуйте за нами</h3>
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
          © 2024 Chill4U. Усі права захищені.
        </div>
      </div>
    </footer>
  );
};
