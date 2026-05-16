'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottieHero({ url }) {
  return (
    <div className="w-full h-full max-w-[500px]">
      <DotLottieReact
        src={url}
        loop
        autoplay
      />
    </div>
  );
}