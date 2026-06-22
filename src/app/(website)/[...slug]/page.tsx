import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug.join('/'),
      },
    },
  })

  if (!result.docs.length) {
    notFound()
  }

  const page = result.docs[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      {/* Layout blocks would be rendered here */}
      <pre>{JSON.stringify(page.layout, null, 2)}</pre>
    </div>
  )
}
