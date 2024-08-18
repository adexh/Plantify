import { img3 } from "@/Images/ExportImages";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full h-[80vh] relative overflow-hidden">
      <Image
        src={img3}
        priority
        className="w-full h-full object-cover object-center"
        alt="hero-image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
          Discover the Beauty of Nature
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8 max-w-[600px]">
          Immerse yourself in the breathtaking landscapes of our world, from
          towering mountains to serene coastlines.
        </p>
        <Link
          href="pages/explore"
          className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary/90 px-8 text-sm font-medium dark:bg-black dark:text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}
