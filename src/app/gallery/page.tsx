import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const galleryItems = [
  { src: "/terraimages/Fittonia.webp", name: "image1" },
  { src: "/terraimages/Misty Glen Oasis.webp", name: "image2" },
  { src: "/terraimages/trm1a.webp", name: "image3" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0B0C0B] pt-32 sm:pt-36 pb-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-gold mb-6">
              The Atelier Archive
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.01em] text-foreground">
              The Complete Collection
            </h1>
            <p className="mt-6 text-[15px] leading-[1.8] text-muted max-w-lg">
              A systematic archive of every vessel archetype produced at the Sylva Auris atelier. Each configuration engineered for a distinct light, moisture, and spatial profile.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-20">
            {galleryItems.map((item) => (
              <article key={item.name} className="flex flex-col">
                <div className="relative aspect-[4/5] w-full bg-[#0B0C0B] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
              </article>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
