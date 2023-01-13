export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Author Name',
    },
    {
      name: 'metaDescription',
      type: 'string',
      title: 'Meta Description',
    },
    {
      title: 'Author Image',
      name: 'authorImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
