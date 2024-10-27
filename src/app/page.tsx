import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <main className="flex-1">
      <section
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=600&width=800")',
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Discover Your Next Adventure
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                Explore the world's most beautiful destinations and create
                unforgettable memories.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Paris",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "Tokyo",
                image: "/placeholder.svg?height=400&width=300",
              },
              {
                name: "New York",
                image: "/placeholder.svg?height=400&width=300",
              },
            ].map((destination) => (
              <div
                key={destination.name}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
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
                Ready for Your Next Trip?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Book your adventure today and get exclusive deals on flights,
                hotels, and experiences.
              </p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
