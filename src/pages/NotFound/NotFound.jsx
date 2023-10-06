import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center space-y-3">
      <h1 className="text-6xl font-bold text-gray-600">404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Page {error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
