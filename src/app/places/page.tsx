import React from "react";
import places from "@/data/hotels.json";
import { HotelCard } from "@/components/cards/HotelCard.component";
import Link from "next/link";

export default function Places() {
  return (
    <main className="flex-1 container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Популярні місця в Ужгороді</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.hotels.map((place, index) => (
          <Link key={index} href={`/places/${index + 1}`}>
            <HotelCard
              title={place.title}
              image={place.images[0]}
              rating={Number(place.rating)}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
