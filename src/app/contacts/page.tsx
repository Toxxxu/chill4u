import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Contacts() {
  return (
    <main className="flex-1 container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Зв&apos;яжіться з нами</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Надіслати повідомлення</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Ім&apos;я
                </label>
                <Input id="name" placeholder="Ваше ім'я" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Електронна пошта
                </label>
                <Input id="email" type="email" placeholder="ваша@пошта.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Повідомлення
                </label>
                <Textarea
                  id="message"
                  placeholder="Ваше повідомлення"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Надіслати
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Контактна інформація</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>вул. Подорожня, 123, Київ, 01001, Україна</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>+380 44 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>info@chill4u.com</span>
            </div>
            <div className="pt-4">
              <h3 className="font-semibold mb-2">Слідкуйте за нами</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
