"use client";
import Image from 'next/image';

export default function WorkspaceIllustration() {
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-xl select-none">
      <Image 
        src="/charts.svg" 
        alt="My Description"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />

    </div>
  );
}
