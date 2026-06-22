'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'

export async function submitContactForm(formData: any) {
  const payload = await getPayload({ config })

  try {
    await payload.create({
      collection: 'submissions',
      data: formData,
    })
    return { success: true }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { success: false, error: 'Failed to submit form' }
  }
}
