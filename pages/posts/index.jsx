import Link from "next/link";
import { useRouter } from "next/router";

const Post = ({ posts }) => {
  const router = useRouter();
  const handleBack = () => router.push("/");

  return (
    <>
      <h1>list of post</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h3>
              {post.id} {post.title}
            </h3>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
      <button onClick={handleBack}>Home</button>
    </>
  );
};
export default Post;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
