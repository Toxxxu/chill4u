import localFont from "next/font/local";
import "./globals.css";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Plane,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-6 mx-auto">
              <Link href="/" className="flex items-center space-x-2">
                <Plane className="h-6 w-6" />
                <span className="font-bold">Chill4U</span>
              </Link>
              <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="/places"
                >
                  Місця
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="/about-us"
                >
                  Про нас
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="/contacts"
                >
                  Контакти
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="w-full py-6 bg-gray-800 text-white">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Про нас</h3>
                  <p className="text-sm">
                    Chill4U - це ваш шлях до незабутніх пригод по всьому світу.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Швидкі посилання
                  </h3>
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
                  <h3 className="text-lg font-semibold mb-2">
                    Зв&apos;яжіться з нами
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" /> вул. Подорожня 123,
                      Місто, Країна
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
                  <h3 className="text-lg font-semibold mb-2">
                    Слідкуйте за нами
                  </h3>
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
        </section>
      </body>
    </html>
  );
}
