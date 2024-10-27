"use client"; // This is a client component

import React, { useState } from 'react';
import { Star, Wifi, Tv, Coffee, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function Places ({ params }: { params: { id: string } }) {
	console.log(params.id)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const images = [
		"/placeholder.svg?height=400&width=600",
		"/placeholder.svg?height=400&width=600",
		"/placeholder.svg?height=400&width=600",
		"/placeholder.svg?height=400&width=600"
	]

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
	}

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Luxury Ocean View Resort</h1>

			<div className="flex items-center mb-4">
				<div className="flex mr-2">
					{[1, 2, 3, 4, 5].map((star) => (
						<Star key={star} className="w-5 h-5 fill-primary text-primary" />
					))}
				</div>
				<span className="text-sm text-muted-foreground">5.0 (1,234 reviews)</span>
			</div>

			<p className="text-muted-foreground mb-6 flex items-center">
				<MapPin className="w-4 h-4 mr-2" />
				123 Beachfront Avenue, Paradise City, 12345
			</p>

			<div className="relative mb-8 rounded-xl overflow-hidden">
				<img
					src={images[currentImageIndex]}
					alt={`Hotel image ${currentImageIndex + 1}`}
					className="w-full h-[400px] object-cover"
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
							<CardTitle>About the Hotel</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="mb-4">
								Experience luxury and relaxation at our beachfront resort. Nestled on the pristine shores of Paradise City,
								our hotel offers breathtaking ocean views, world-class amenities, and unparalleled service to ensure an
								unforgettable stay.
							</p>
							<h3 className="font-semibold mb-2">Highlights</h3>
							<ul className="list-disc list-inside mb-4">
								<li>Direct beach access</li>
								<li>Infinity pool overlooking the ocean</li>
								<li>Award-winning spa and wellness center</li>
								<li>Multiple dining options featuring local and international cuisine</li>
								<li>State-of-the-art fitness center</li>
							</ul>
						</CardContent>
					</Card>

					<Card className="mt-8">
						<CardHeader>
							<CardTitle>Room Types</CardTitle>
						</CardHeader>
						<CardContent>
							<Tabs defaultValue="standard">
								<TabsList>
									<TabsTrigger value="standard">Standard Room</TabsTrigger>
									<TabsTrigger value="deluxe">Deluxe Suite</TabsTrigger>
									<TabsTrigger value="premium">Premium Suite</TabsTrigger>
								</TabsList>
								<TabsContent value="standard">
									<div className="mt-4">
										<h4 className="font-semibold mb-2">Standard Room</h4>
										<p>Comfortable room with all essential amenities. Perfect for solo travelers or couples.</p>
										<ul className="list-disc list-inside mt-2">
											<li>Queen-size bed</li>
											<li>32&#34; flat-screen TV</li>
											<li>En-suite bathroom</li>
											<li>Mini-fridge</li>
										</ul>
									</div>
								</TabsContent>
								<TabsContent value="deluxe">
									<div className="mt-4">
										<h4 className="font-semibold mb-2">Deluxe Suite</h4>
										<p>Spacious suite with separate living area and premium amenities. Ideal for families or extended stays.</p>
										<ul className="list-disc list-inside mt-2">
											<li>King-size bed</li>
											<li>55&#34; smart TV</li>
											<li>Luxurious bathroom with bathtub</li>
											<li>Kitchenette</li>
											<li>Private balcony</li>
										</ul>
									</div>
								</TabsContent>
								<TabsContent value="premium">
									<div className="mt-4">
										<h4 className="font-semibold mb-2">Premium Suite</h4>
										<p>Our most luxurious accommodation with stunning ocean views and exclusive perks.</p>
										<ul className="list-disc list-inside mt-2">
											<li>King-size bed with premium linens</li>
											<li>65&#34; OLED TV</li>
											<li>Spa-like bathroom with jacuzzi</li>
											<li>Full kitchen</li>
											<li>Large private terrace</li>
											<li>Access to Executive Lounge</li>
										</ul>
									</div>
								</TabsContent>
							</Tabs>
						</CardContent>
					</Card>
				</div>
			</div>

		</div>
	)
}

export default Places