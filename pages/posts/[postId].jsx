import Link from "next/link";
import { useRouter } from "next/router";

const PostList = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading ...</h1>;
  }

  const handleBack = () => router.push("/posts");
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
      <button onClick={handleBack}>Back</button>
    </>
  );
};
export default PostList;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) { 
    return { 
      notFound: true,
    }
  }
  return {
    props: {
      post: data,
    },
    revalidate: 10,6
  }
}
