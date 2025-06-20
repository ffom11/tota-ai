"use client";
import { useEffect } from "react";

export default function WelcomeAudioClient() {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.localStorage.getItem("tota_welcome_played")) {
      const audio = new Audio(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/welcome-arabic.mp3`);
      audio.play();
      window.localStorage.setItem("tota_welcome_played", "yes");
    }
  }, []);
  return null;
}
