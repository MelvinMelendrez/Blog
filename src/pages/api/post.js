import { client } from "../../../lib/client";

export default async function post(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).end();
  }

  const { posts, total } = await loadData(start, end);

  res.status(200).json({ posts, total });
}

export async function loadData(start, end) {
  const query = '*[_type == "post"] {publishedDate, title, slug, description, image, publishDate}';

  const posts = await client.fetch(query);

  return {
    posts: posts,
    total: posts?.length ?? 0,
  };
}
