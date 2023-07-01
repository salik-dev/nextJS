import useSWR from "swr";
// import { useSWRConfig } from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};
const DashboardSwr = () => {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return 'Something went wrong';
  if (!data) return 'Loading ...';
  return (
    <>
      <h4>Posts : {data.posts}</h4>
      <h5>Likes : {data.likes}</h5>
      <h6>Followers : {data.followers}</h6>
      <span>Following : {data.following}</span>
    </>
  );
};
export default DashboardSwr;
