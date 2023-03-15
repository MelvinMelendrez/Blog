export default {
    name: 'app',
    type: 'document',
    title: 'App',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        validation: Rule => Rule.required(),
        options: {
          hotspot: true
        }
      }
    ]
  }
  