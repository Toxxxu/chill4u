"use client";

import React, { useState, use } from "react";
import {
  Star,
  Wifi,
  Tv,
  Coffee,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import places from "@/data/hotels.json";

function Places({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const hotelData = places.hotels[Number(id) - 1];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = hotelData.images;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{hotelData.title}</h1>

      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 ${
                Number(hotelData.rating) / 2 > star
                  ? "fill-primary text-primary"
                  : ""
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {hotelData.rating}
        </span>
      </div>

      <p className="text-muted-foreground mb-6 flex items-center">
        <MapPin className="w-4 h-4 mr-2" />
        {hotelData.location}
      </p>

      <div className="relative mb-8 rounded-xl overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`Hotel image ${currentImageIndex + 1}`}
          className="w-full h-[800px] object-cover"
        />
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Про готель</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{hotelData.description}</p>
              {hotelData.long_description}
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Зручності</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Wifi className="w-5 h-5 mr-2" />
                  <span>Безкоштовний Wi-Fi</span>
                </div>
                <div className="flex items-center">
                  <Tv className="w-5 h-5 mr-2" />
                  <span>Smart телевізор</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="w-5 h-5 mr-2" />
                  <span>Кофемашина</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Види кімнат</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="standard">
                <TabsList>
                  <TabsTrigger value="standard">Стандартна кімната</TabsTrigger>
                  <TabsTrigger value="deluxe">Люкс Кімната</TabsTrigger>
                  <TabsTrigger value="premium">Преміум кімната</TabsTrigger>
                </TabsList>
                <TabsContent value="standard">
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Стандартна кімната</h4>
                    <p>
                      Комфортна кімната з усіма необхідними зручностями.
                      Ідеально підходить для самостійних мандрівників або пар.
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Ліжко &quot;Queen-size&quot;</li>
                      <li>32&#34; телевізор з плоским екраном</li>
                      <li>Ванна кімната з усіма зручностями</li>
                      <li>Міні-холодильник</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="deluxe">
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Люкс Кімната</h4>
                    <p>
                      Просторий люкс з окремою вітальнею і преміальними
                      зручностями. Ідеально підходить для сімей або тривалого
                      проживання.
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Ліжко &quot;Queen-size&quot;</li>
                      <li>55&#34; smart телевізор</li>
                      <li>Розкішна ванна кімната з ванною</li>
                      <li>Міні-кухня</li>
                      <li>Приватний балкон</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="premium">
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Преміум кімната</h4>
                    <p>
                      Найрозкішніші апартаменти з приголомшливим видом на океан
                      та ексклюзивними привілеями.
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Ліжко &quot;King-size&quot; з преміальною білизною
                      </li>
                      <li>65&#34; OLED телевізор</li>
                      <li>Ванна кімната з джакузі</li>
                      <li>Повноцінна кухня</li>
                      <li>Велика приватна тераса</li>
                      <li>Доступ до Лаунжу для привілейованих гостей</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Відгуки гостей</CardTitle>
            </CardHeader>
            <CardContent>
              {[
                {
                  name: "Alice Johnson",
                  rating: 5,
                  comment: "Все було чудово!",
                },
                {
                  name: "John Smith",
                  rating: 4,
                  comment: "Залишились тільки приємні враження",
                },
                {
                  name: "Emma Davis",
                  rating: 5,
                  comment: "Розташевання чудове",
                },
              ].map((review, index) => (
                <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                  <div className="flex items-center mb-2">
                    <Avatar className="w-10 h-10 mr-2">
                      <AvatarFallback>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? "fill-primary text-primary"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                Переглянути всі відгуки
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Бронювання</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="check-in">Дата заїзду</Label>
                    <Input id="check-in" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="check-out">Дата виїзду</Label>
                    <Input id="check-out" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="guests">Кількість гостей</Label>
                    <Select>
                      <SelectTrigger id="guests">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Гість</SelectItem>
                        <SelectItem value="2">2 Гостей</SelectItem>
                        <SelectItem value="3">3 Гостей</SelectItem>
                        <SelectItem value="4">4 Гостей</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="room-type">Вид кімнати</Label>
                    <Select>
                      <SelectTrigger id="room-type">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">
                          Стандартна Кімната
                        </SelectItem>
                        <SelectItem value="deluxe">Люкс Кімната</SelectItem>
                        <SelectItem value="premium">Преміум Кімната</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="flex justify-between w-full mb-4">
                <span>Сума (прибл.)</span>
                <span className="font-semibold">$XXX.XX</span>
              </div>
              <Button className="w-full">Забронювати</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Places;
