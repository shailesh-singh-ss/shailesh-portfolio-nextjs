'use client'

import { useEffect } from 'react'

export default function ClientBodyClass() {
  useEffect(() => {
    // Ensure the body has the correct classes after hydration
    document.body.className = 'antialiased'
  }, [])

  return null
}
