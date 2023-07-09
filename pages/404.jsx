const { useRouter } = require("next/router");

const PageNotFound = () => {
  const router = useRouter();
  return (
    <>
      <h3>404 Error: Page not found !</h3>
      <span onClick={() => router.push("/")}>Go back to home</span>
    </>
  );
};
export default PageNotFound;
