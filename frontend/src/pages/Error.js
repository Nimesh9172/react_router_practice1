import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error Occured";
  let message = "Something Went Wrong!";
  if (error.status === 500) {
    message = error.data.message;
  }

  return (
    <Fragment>
        <MainNavigation/>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};

export default ErrorPage;
