import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();
  const param = router.query;
 
  return <h1>Docs page</h1>;
};
export default Docs;
