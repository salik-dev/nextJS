const UsersData = ({ data }) => {
  return (
    <>
      <td>{data.name}</td>
      <td>{data.username}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
    </>
  );
};
export default UsersData;
