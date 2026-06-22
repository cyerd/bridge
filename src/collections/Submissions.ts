import type { CollectionConfig } from 'payload'

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => user?.role === 'super-admin' || user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'super-admin',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'company', type: 'text' },
    { name: 'country', type: 'text' },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'commodityInterest', type: 'text' },
    { name: 'message', type: 'textarea', required: true },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Buyer', value: 'buyer' },
        { label: 'Supplier', value: 'supplier' },
      ],
      required: true,
    },
  ],
}
