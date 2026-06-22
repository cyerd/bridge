import React from 'react'
import { Hero } from '@/components/blocks/Hero'

export default async function HomePage() {
  return (
    <div>
      <Hero
        headline="Connecting Global Buyers with Trusted East African Supply"
        subheadline="East Africa Bridge Group is a procurement, sourcing, and market access platform connecting international buyers with qualified suppliers across East Africa."
        ctaLabel="Request Sourcing Support"
        ctaLink="/contact"
      />
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">Identify qualified suppliers</h3>
              <p>We source the best producers across the region.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">Access new sourcing origins</h3>
              <p>Discover untapped markets in East Africa.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">Verify product quality</h3>
              <p>Rigorous quality control at every step.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Focus Commodities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Sesame Seeds', 'Green Grams', 'Pigeon Peas', 'Kidney Beans'].map((item) => (
              <div key={item} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h4 className="font-bold text-secondary">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
