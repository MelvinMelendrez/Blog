import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const ids = {
    id:'fv68o183',
    post:'production'
}

export const client = createClient({
    projectId: ids.id,
    dataset: ids.post,
    useCdn: true,
    apiVersion: '2023-03-09', 
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

