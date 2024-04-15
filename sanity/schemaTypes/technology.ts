import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'technology',
      title: 'Technology',
      type: 'string',
    }),
  ],
})
