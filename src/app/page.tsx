import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex-1">
      <section
        className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1386110/pexels-photo-1386110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Відкрийте свою наступну пригоду
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Досліджуйте найкрасивіші місця світу та створюйте незабутні
                спогади.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Популярні місця
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Готель Ужгород",
                image:
                  "https://hoteluzhgorod.com/wp-content/uploads/2024/03/20240322_001-480x300.webp",
              },
              {
                name: "Готель Прага",
                image:
                  "https://lh3.googleusercontent.com/p/AF1QipPbOe5bHDTJEuDZ81jRYsSuuMll9miwD2GZ7EuI=s1360-w1360-h1020",
              },
              {
                name: "Готель Кілікія",
                image:
                  "https://lh3.googleusercontent.com/p/AF1QipO3jN0sBsYK0v6LUJK6X7PNzqbty_G4Yye9h298=s1360-w1360-h1020",
              },
            ].map((destination) => (
              <div
                key={destination.name}
                className="relative group overflow-hidden rounded-lg"
              >
                <Image
                  alt={`${destination.name} cityscape`}
                  className="object-cover w-full h-60 transition-transform group-hover:scale-110"
                  height="400"
                  src={destination.image}
                  style={{
                    aspectRatio: "300/400",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-2xl font-bold">
                    {destination.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Готові до наступної подорожі?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Забронюйте свою пригоду сьогодні та отримайте ексклюзивні
                пропозиції на рейси, готелі та враження.
              </p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Забронювати зараз
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
