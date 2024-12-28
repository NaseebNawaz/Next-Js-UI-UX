"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen bg-[#F8F3ED] relative overflow-hidden">
        <div className="container mx-auto px-4 pt-24 pb-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-6xl font-bold text-[#2A2A2A] leading-tight mb-6">
              Modern Furniture For Modern Living Style
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Discover our curated collection of contemporary furniture designed to elevate your living space.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#2A2A2A] hover:bg-[#404040]">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Collection
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative h-[500px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200"
                alt="Modern furniture"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <Button
                    size="icon"
                    className="absolute bottom-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const featuredProducts = [
  {
    id: 1,
    name: "Modern Lounge Chair",
    price: "599",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800",
  },
  {
    id: 2,
    name: "Minimalist Sofa",
    price: "1,299",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800",
  },
  {
    id: 3,
    name: "Wooden Coffee Table",
    price: "399",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800",
  },
];