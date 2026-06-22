import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface HeroProps {
  headline: string
  subheadline?: string | null
  ctaLabel?: string | null
  ctaLink?: string | null
}

export const Hero: React.FC<HeroProps> = ({ headline, subheadline, ctaLabel, ctaLink }) => {
  return (
    <section className="bg-primary text-primary-foreground py-20 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{headline}</h1>
        {subheadline && <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">{subheadline}</p>}
        {ctaLabel && ctaLink && (
          <Button asChild variant="secondary" size="lg">
            <Link href={ctaLink}>{ctaLabel}</Link>
          </Button>
        )}
      </div>
    </section>
  )
}
