"use client";
import React from "react";
import { Carousel, Card } from "../ui/apple-cards-carousel";

export default function TeamCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Leadership",
    title: "Carlos Martinez",
    src: "/images/team-1.jpg",
  },
  {
    category: "Solar Tech",
    title: "Sarah Jenkins",
    src: "/images/team-2.jpg",
  },
  {
    category: "Electrical",
    title: "David Rodriguez",
    src: "/images/team-3.jpg",
  },
  {
    category: "Engineering",
    title: "Elena Rostova",
    src: "/images/team-4.jpg",
  },
  {
    category: "Plumbing",
    title: "Marcus Vance",
    src: "/images/team-5.jpg",
  },
];
