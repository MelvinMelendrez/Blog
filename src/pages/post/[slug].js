import React from 'react'  
import { format } from 'date-fns'
import Head from "next/head";


import { Article, Content, Title } from '../../../components'

import styles from './styles.module.scss'

import { client } from '../../../lib/client'

const Post = ({ post }) => {
  const date = format(new Date(post.publishDate), 'dd, MMM, yyy')
  return (
    <Article backUrl="/" className={styles.post}>
      <Head>
        <title>{post.meta_title}</title>
      </Head>
      <Title className={styles.postTitle}>
        {post.title}
      </Title>
      <p className={styles.postData}>{date} </p>
     <Content body={post.body} />
    </Article>
  )
}

export default Post




export async function getStaticPaths() { 
  const query = `*[_type == "post"] {
    slug { 
      current
    }
  }`;

  const posts = await client.fetch(query); 
  const paths = posts.map((post) => ({ 
    params: { 
      slug: post.slug.current 
    }
  }));

  return {
    paths,
    fallback: 'blocking'
    }
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

  const post = await client.fetch(query);

  return {
    props: {
      post,
    },
  };
}
