import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  return (
    <>
      <h1>About page</h1>
      <button onClick={() => router.push("/")}>Home</button>
    </>
  );
};
export default About;
