"use client"
import { createContext, useContext, useRef, useState, useEffect } from "react"

type AudioContextType = {
  isPlaying: boolean
  toggle: () => void
}

const AudioCtx = createContext<AudioContextType | null>(null)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio("/music.mp3")
    audio.loop = true
    audio.volume = 0.4

    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
      } else {
        await audio.play() // important (browser policy)
      }

      setIsPlaying(!isPlaying)
    } catch (err) {
      console.log("User interaction required before playing audio")
    }
  }

  return (
    <AudioCtx.Provider value={{ isPlaying, toggle }}>
      {children}
    </AudioCtx.Provider>
  )
}

export function useAudio() {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error("useAudio must be used inside AudioProvider")
  return ctx
}