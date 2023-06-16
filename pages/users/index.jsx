import { useRouter } from "next/router";
import UsersData from "../components/users";

const Users = ({ users }) => {
  const router = useRouter();
  return (
    <>
      <table>
        <tr>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>phone</th>
        </tr> 
        {users.map((element) => {
          return (
            <tr key={element.id}> 
              <UsersData data={element} />
            </tr>
          );
        })}
      </table>
      <button onClick={() => router.push("/")}>home</button>
    </>
  );
};
export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log({ data });
  return {
    props: {
      users: data,
    },
  };
}
