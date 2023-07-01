import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <h4>Posts : {dashboardData.posts}</h4>
      <h5>Likes : {dashboardData.likes}</h5>
      <h6>Followers : {dashboardData.followers}</h6>
      <span>Following : {dashboardData.following}</span>
    </>
  );
};
export default Dashboard;
