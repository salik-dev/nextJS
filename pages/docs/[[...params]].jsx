import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();
  const param = router.query;
  console.log({ param });

  return (
    <h1>
      Docs page
      {param.map((dynamicId) => {
        return <p>{dynamicId}</p>;
      })}
    </h1>
  );
};
export default Docs;
