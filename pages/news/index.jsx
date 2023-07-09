import axios from "axios";
import { useState } from "react";

const FetchNews = async () => {
  const [fetchData, setFetchData] = useState([]);
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments" 
    ); 
    setFetchData(data);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
  console.log({ fetchData }); 
  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  ); 
}; 
export default FetchNews;