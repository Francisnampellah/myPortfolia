"use client"

export default function loader({ src, width, quality }) {
  return `https://drive.google.com/drive/folders/1f6zoFPTlPOEevRVyryxrI5dYbZlwWqbH?usp=sharing/${src}?w=${width}&q=${quality || 75}`
}