import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function Events() {
  const data = useLoaderData();
  const events = data.events

  return <EventsList events={events} />;
}

export default Events;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({message:'Couldn\'t fetch the events'},{status:500})
  } else {
    return response
  }
}
