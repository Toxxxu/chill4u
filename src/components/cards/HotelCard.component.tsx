import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

interface Props {
  image: string;
  title: string;
  rating: number;
}

export const HotelCard: React.FC<Props> = ({ image, title, rating }) => {
  return (
    <Card className="shadow-md rounded-lg">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={`Фото ${title}`}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
        </div>
      </CardContent>
    </Card>
  );
};
