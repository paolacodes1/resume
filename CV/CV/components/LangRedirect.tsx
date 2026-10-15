'use client'
import { useEffect } from 'react'

// Sends Portuguese-language browsers from the English call sheet to the Portuguese one, once.
// The PT -> EN switch link carries ?lang=en so that choice is respected.
export default function LangRedirect({ to }: { to: string }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('lang') === 'en') return
    if (navigator.language?.toLowerCase().startsWith('pt')) window.location.replace(to)
  }, [to])
  return null
}
