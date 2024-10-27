"use client";

import React, { useState, use } from "react";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

      <div className="grid w-full">
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
        </div>
      </div>
    </div>
  );
}

export default Places;
