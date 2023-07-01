import { useState } from "react";
import { useRouter } from "next/router";

const Events = ({ eventLists }) => {
  const [filterEvents, setFilterEvents] = useState(eventLists);
  var dropdownValue = null;
  const router = useRouter();
  const filterCategory = async (e) => {
    var response;
    if (e.target.value === "All") {
      response = await fetch("http://localhost:4000/events");
    } else {
      response = await fetch(
        `http://localhost:4000/events?category=${e.target.value}`
      );
    }
    const data = await response.json();
    setFilterEvents(data);
    dropdownValue = e.target.value;
    router.push(`/events?category=${e.target.value}`, undefined, {
      shallow: true,
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>events list page</h3>
        <span>
          <select onChange={filterCategory}>
            <option value="All" selected>
              All
            </option>
            <option value="sports">sports</option>
            <option value="disaster">disaster</option>
          </select>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {filterEvents.map((event) => {
          return (
            <div
              key={event.id}
              style={{
                borderRadius: "1rem",
                boxShadow: "0px 0px 6px -2px gray",
                padding: "12px  ",
              }}
            >
              <h4>
                {event.id} {event.title}
              </h4>
              <p>
                {event.category} | {event.description}
              </p>
              <p>{event.date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Events;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=${dropdownValue}` : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventLists: data,
    },
  };
}
