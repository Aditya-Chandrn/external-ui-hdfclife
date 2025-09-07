import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = [
  "https://picsum.photos/seed/1/500/300",
  "https://picsum.photos/seed/2/500/300",
  "https://picsum.photos/seed/3/500/300",
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Card className="max-w-lg mx-auto text-center">
      <CardContent className="p-4">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="rounded-lg mb-4 mx-auto"
        />
        <div className="flex justify-between">
          <Button onClick={prev}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </div>
      </CardContent>
    </Card>
  );
}
