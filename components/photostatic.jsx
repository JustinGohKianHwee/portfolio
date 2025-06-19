"use client";

import Image from "next/image";

export default function PhotoStatic() {
  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden ring-4 ring-accent ring-offset-2 ring-offset-primary">
      <Image
        src="/assets/montreal_final.png"
        alt="Portrait"
        fill
        priority
        quality={100}
        className="object-cover"
      />
    </div>
  );
}