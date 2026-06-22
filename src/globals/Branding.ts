import type { GlobalConfig } from 'payload'

export const Branding: GlobalConfig = {
  slug: 'branding',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'theme',
      type: 'group',
      fields: [
        {
          name: 'defaultTheme',
          type: 'select',
          defaultValue: 'system',
          options: [
            { label: 'System', value: 'system' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ],
        },
        {
          name: 'enableDarkMode',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'smtp',
      type: 'group',
      fields: [
        { name: 'host', type: 'text' },
        { name: 'port', type: 'number' },
        { name: 'user', type: 'text' },
        { name: 'pass', type: 'text', admin: { condition: () => false } }, // Hidden in admin, should be set via env usually but requirement says admin controlled
        { name: 'fromEmail', type: 'text' },
        { name: 'fromName', type: 'text' },
      ],
    },
  ],
}
