import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { json, useLoaderData,defer, Await } from "react-router-dom";

function Events() {
  const {events} = useLoaderData();
  const loadingElement =  <p style={{textAlign:'center'}}  >Loading...</p>

  return (
   <Suspense fallback={loadingElement}>
     <Await resolve={events}>
      {loaderEvents => <EventsList events={loaderEvents} /> }
    </Await>
   </Suspense>
  )
}  

export default Events;

const loadEvents = async () => {

  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({message:'Couldn\'t fetch the events'},{status:500})
  } else {
    const resData = await response.json()
    return resData.events
  }
}

export function loader() {
  return defer({
    events:loadEvents()
  })
}
