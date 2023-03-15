import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const ids = {
    id:'fv68o183',
    post:'production'
}

export const client = sanityClient({
    projectId: ids.id,
    dataset: ids.post,
    useCdn: true,
    apiVersion: '2023-03-09', 
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

