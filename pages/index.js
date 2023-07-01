import Link from "next/link";
const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link href="/">Home</Link>
        <Link href="/product">Products</Link>
        <Link href="/posts">Posts</Link> 
      </div> 
    </>
  );
};

export default Home;