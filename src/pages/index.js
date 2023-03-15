import { useState } from "react";
import { loadData } from "./api/post";
import { Post, Section, Cover, SocialNetworks, Title, PostGrid, Button } from "../../components";
import Head from "next/head";

export default function Home({ initialPosts, total }) {
  const LOAD_MORE_STEP = total -4;  
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(4);
  const [loading, setLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const getMorePosts = async () => {
    setLoading(true);
    setShowLoadMore(false);
  
    try {
      const data = await fetch(`/api/post?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`).then((res) => res.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div style={{ 
      marginBottom: "1rem" 
      }}>
        <Head>
        <title>Helathy blog</title>
        </Head>

      <Section>
        <Cover title="Healthy <br />blog" />
        <SocialNetworks />
      </Section>

      <Section>
        <Title>New Post</Title>
        <PostGrid role="list">
          {posts.slice(0, loadedAmount).map((post) => (
            <Post key={post.slug.current} {...post} />
          ))}
        </PostGrid>
        {showLoadMore && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button disabled={loading} onClick={getMorePosts}>
              {loading ? "Loading..." : "Load More post..."}
            </Button>
          </div>
        )}
      </Section>

    </div>
  );
}


const POSTS_PER_PAGE = 5;

export async function getServerSideProps(context) {
  const { posts } = await loadData(0, POSTS_PER_PAGE);
  const { posts: allPosts } = await loadData(0, 100);

  return {
    props: {
      initialPosts: posts,
      allPosts: allPosts,
      total: allPosts.length,
    }
  }
}