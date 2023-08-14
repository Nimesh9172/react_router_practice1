import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import Events, { loader as EventLoader } from "./pages/Events";
import EventDetailPage, {
  loader as EventDetailLoader,
  action as EventDeleteAction,
} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import { action as FormAction } from "./components/EventForm";
import EditEvent from "./pages/EditEvent";
import EventRootLayout from "./pages/EventRootLayout";
import ErrorPage from "./pages/Error";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { 
        path: "events",
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: EventLoader,
          },
          {
            path: ":eventid",
            id: "event-details",
            loader: EventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: EventDeleteAction,
              },
              { path: "edit", element: <EditEvent />, action: FormAction },
            ],
          },
          { path: "new", element: <NewEvent />, action: FormAction },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
