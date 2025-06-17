"use client";

import dynamic from 'next/dynamic';

const WelcomeAudioClient = dynamic(() => import('./WelcomeAudioClient'), { ssr: false });

export default function DynamicWelcomeAudio() {
  return <WelcomeAudioClient />;
}
